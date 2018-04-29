from django.db import models
from decimal import Decimal

class Company(models.Model):
    name = models.CharField(max_length=50)
    openning = models.DecimalField(unique=False, max_digits=5, decimal_places=2, default=Decimal(0.00))
    previous_close = models.DecimalField(unique=False, max_digits=5, decimal_places=2, default=Decimal(0.00))
    volume = models.IntegerField(unique=False)
    pe_ratio = models.DecimalField(unique=False, max_digits=6, decimal_places=2, default=Decimal(0.00))
    eps = models.DecimalField(unique=False, max_digits=6, decimal_places=2, default=Decimal(0.00))
    one_year = models.DecimalField(unique=False, max_digits=6, decimal_places=2, default=Decimal(0.00))
    full_name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    website = models.CharField(max_length=50)
    lat = models.DecimalField(unique=False, max_digits=6, decimal_places=2, default=Decimal(0.00))
    long = models.DecimalField(unique=False, max_digits=6, decimal_places=2, default=Decimal(0.00))

    def __str__(self):
            return U'%s' %(self.name)
    # def save(self, *args, **kwargs):
    #     self.name = self.name.upper()
    #     super(Company, self).save(*args, **kwargs)
    def to_json(self):
        return{
            "full_name": self.full_name,
            "openning": self.openning,
        }
