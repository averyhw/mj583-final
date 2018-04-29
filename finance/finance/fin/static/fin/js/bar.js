function initBar(config) {
    var svgContainer = d3.select("#fin-bar");

    // var data[] = config.openning
    // for (i=0; i<data.length; i++){
    //   data[i].openning = parseInt(data[i].openning)
    //   console.log(typeof data[i].openning)
    // }
    // Create an object to export our methods on the config
    config.bar = {};

    // Start building our svg bar chart
    var svg = svgContainer.append("svg");
    var chart = svg.append("g");
    // Configure our SVG element to be the full width and 200px tall
    svg.attr('width', '100%')
        .attr('height', 200);

    // Get the width and height of the element containing our svg element
    var boundingRect = svgContainer.node().getBoundingClientRect();

    // Hang on to the width and height values to use when generating the graph
    //### line 18
    // Add margins so there is room to draw our axis
    var margin = {'left': 40, 'right': 0, 'top': 10, 'bottom': 40};

    // Hang on to the width and height values to use when generating the graph
    var width = boundingRect.width - (margin.left + margin.right);
    var height = boundingRect.height - (margin.top + margin.bottom);

///### line 25

// Position the chart with the margin accounted for
    // Position the chart with the margin accounted for
    chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    var height = boundingRect.height;

    // Render re-renders the bar chart
    config.bar.render = function () {
        // Get the updated countries data sorted by the number of winners
        var companies = config.data.companies.sort(function(a, b) {
            return d3.descending(a.full_name, b.openning);
        });

// Create lists of country names and the winner counts so we can generate
       // d3 scales from the data.
       // We'll use the country names to create a band scale and the winner
       // counts to create a linear band.
       // https://github.com/d3/d3-scale
       // https://github.com/d3/d3-scale#band-scales
       // https://github.com/d3/d3-scale#linear-scales
       var cnames = companies.map(function(x) {return x.full_name});
       var winners = companies.map(function(x) {return x.openning});

       // Create our country name scale
       var nameScale = d3.scaleBand() // band scale
           .domain(cnames)            // of country names
           .range([0, width])         // ranging from 0 to the width of our container
           .paddingInner(0.1);        // with padding between the bands

       // Get the highest value from the winners data
       var maxWinner = d3.max(winners);

       // Create our winner count scale
       var winnerScale = d3.scaleLinear() // linear scale
           .domain([0, maxWinner])        // of a domain
           .range([height, 0])            // ranging from the height down to 0
           .nice();                       // rounding to a nice even number

       // Get the width of the bands from the scale
       var bandwidth = nameScale.bandwidth();

       // Remove the graph if it exists
       chart.selectAll("g").remove();

       // Create a group to hold our graph
       var graph = chart.append("g");

       // Create a group for our bars
       var bars = graph.append("g")
           .classed("bars", true);

           console.log(typeof winners[0])
       // Draw the bars
       bars.selectAll('rect.bar')
           .data(companies)
           .enter()
           .append('rect')
           .classed('bar', true)
           .attr('width', bandwidth)
           .attr('height', function(d) {
               return height - winnerScale(d.winners);
           })
           .attr('x', function(d) {
                return nameScale(d.cnames);
           })
           .style('text-anchor', 'end')
               .attr('dx', '-.8em')
               .attr('dy', '.15em')
           .selectAll("text")
           .attr('transform', 'rotate(-65)')
           .attr('y', function(d) {
               return winnerScale(d.winners);
           });

           ///### Line 90 at the end and outside of the bar.selectAll function but inside the render function

// Create a Y axis on the left side from our winner scale
        // If the largest value is greater than 10 only draw 10 tick marks
        // but if the value is less than 10, e.g. 3, only draw 3 tick marks
        var xAxis = d3.axisBottom(nameScale)
            .tickSizeOuter(0);
        var yAxis = d3.axisLeft(winnerScale)
            .ticks(Math.min(10, maxWinner));

            // Create an X axis on the bottom to show the country names
        var xAxis = d3.axisBottom(nameScale)

        ///so the function looks like this
        graph.append("g")
                    .classed("x axis", true)
                    .call(xAxis)
                    .attr('transform', 'translate(0,' + height + ')');

        graph.append("g")
            .classed("y axis", true)
            .call(yAxis)
            ///### add to the append(g) line 105
            .attr('transform', 'translate(0,' + height + ')');


        // console.log(winners);
    }
  }
