import datetime
import json

from django.core.management.base import BaseCommand, CommandError
from finance.fin.models import Company
# Country, Category, Person

# Here we are creating a custom management command to load our winner data into
# Django models.
# The Command class is loaded by Django at runtime and executed when the file
# that contains it is specified as the command to manage.py
# In our case this file is called `load_winners.py` so the command we will use
# to execute this file is `manage.py load_winners path/to/winners.json`
class Command(BaseCommand):
    help = 'Load winner data into the database'

    # add_arguments lets us specify arguments and options to read from the command
    # line when the command is executed.
    # We are going to add 1 argument- "json_file" which is a string (type=str)
    # representing the path to a json file containing our data to load.
    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str)

    # The handle method is the main function of the command. This is the entry
    # point for our command and contains all our business logic.
    def handle(self, *args, **options):
        # Grab the path from our commandline arguments
        json_path = options['json_file']

        # We are going to write output to the screen as we process things so
        # the user has feedback the script is running.
        self.stdout.write(self.style.SUCCESS('Loading JSON from "{}"'.format(json_path)))
        data = json.load(open(json_path))

        # Track the total number of records
        total = len(data)

        # Let the user know we're running
        self.stdout.write(self.style.SUCCESS('Processing {} rows'.format(total)))

        # Create an array to hang on to anything skipped while processing
        skipped = []

        # Loop over each row in the data with the enumerate function so we have
        # a row counter




        for i, row in enumerate(data):
            # Ensure we have a country, category, and gender as these are all required
            # name = row['ticker']
            # try:
            #     openning = row['Open']
            # except:
            #     openning = openning.replace("N/A",0.00)
            # try:
            #     previous_close = row['Previous Close']
            # except:
            #     previous_close = previous_close.replace("N/A",0.00)
            # try:
            #     volume = row['Volume']
            # except:
            #     volume = volume.replace(",","")
            # try:
            #     pe_ratio = row['PE Ratio (TTM)']
            # except:
            #     pe_ratio = pe_ratio.replace("N/A",0.00)
            # try:
            #     eps = row['EPS (TTM)']
            # except:
            #     eps = eps.replace("N/A",0.0000)
            # try:
            #     one_year = row ['1y Target Est']
            # except:
            #     one_year = one_year.replace("N/A",0.00)
            name = row['ticker']

            openning = row['Open']
            openning = openning.replace('"', '').replace(',', '').replace("'", "")

            previous_close = row['Previous Close']
            previous_close = previous_close.replace('"', '').replace(',', '').replace("'", "")

            volume = row['Volume']
            volume = volume.replace('"', '').replace(',', '').replace("'", "")

            pe_ratio = row['PE Ratio (TTM)']
            pe_ratio = pe_ratio.replace('"', '').replace(',', '').replace("'", "")

            eps = row['EPS (TTM)']
            # eps = eps.replace('"', '').replace(',', '').replace("'", "")

            one_year = row ['1y Target Est']
            # one_year = one_year.replace('"', '').replace(',', '').replace("'", "")
            full_name = row ['name']
            location = row ['location']
            website = row ['website']
            lat = row ['lat']
            long = row ['long']
            # If we don't have this data add the row to the skipped list and
            # continue to the next item in the for loop
            if not name or not openning or not previous_close or not pe_ratio or not volume or not eps or not one_year or not full_name or not location or not website or not lat or not long:
                skipped.append(row)
                continue

            # Here we will create the objects that a winning record relies on.
            # We use the get_or_create method to avoid creating duplicaates
            # https://docs.djangoproject.com/en/2.0/ref/models/querysets/#get-or-create
            # This lets us create a new category object called "Physics" the first
            # time we see it but otherwise return the already existing category object
            # from the database and use it.
            # This is the same for country and person but note that we have to
            # specify all the fields for the person object.
            #open1, _ = open.objects.get_or_create(name=open)
            #previousClose, _ = previousClose.objects.get_or_create(name=previousClose)

            company, _ = Company.objects.get_or_create(
                name= row ['ticker'],
                openning= row ['Open'].replace('"', '').replace(',', '').replace("'", ""),
                previous_close= row ['Previous Close'].replace('"', '').replace(',', '').replace("'", ""),
                volume = row['Volume'].replace('"', '').replace(',', '').replace("'", ""),
                pe_ratio = row['PE Ratio (TTM)'].replace('"', '').replace(',', '').replace("'", ""),
                eps = row['EPS (TTM)'],
                one_year = row ['1y Target Est'],
                full_name = row ['name'],
                location = row ['location'],
                website = row ['website'],
                lat = row ['lat'],
                long = row ['long'],
        )

            # Now that we have created our dependencies we can create a winner
            # record which ties all the objects together along with the year
            # that the award was won.
            # w = Company.objects.get_or_create(
            #     name=name,
            #     open=open1,
            #     previousClose=previousClose,
            #     # year=row['year'],
            # )

            # Now we tell the user which object count we just updated.
            # By using the line ending `\r` (return) we return to the begginging
            # of the line and start writing again. This writes over the same line
            # and gives the illusion of the count incrementing without cluttering
            # the screens output.
        self.stdout.write(self.style.SUCCESS('Processed {}/{}'.format(i + 1, total)), ending='\r')
        # We call flush to force the output to be written
        self.stdout.flush()

        # If we have any skipped rows write them out as json.
        # Then the user can manually evaluate / edit the json and reload it once
        # it has been fixed with `manage.py load_winners skipped.json`
        if skipped:
            self.stdout.write(self.style.WARNING("Skipped {} records".format(len(skipped))))
            with open('skipped.json', 'w') as fh:
                json.dump(skipped, fh)
