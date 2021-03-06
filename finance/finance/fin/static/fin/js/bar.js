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
        .attr('height', 450);

    // Get the width and height of the element containing our svg element
    var boundingRect = svgContainer.node().getBoundingClientRect();

    // Add margins so there is room to draw our axis
    var margin = {'left': 75, 'right': 0, 'top': 10, 'bottom': 237.5};

    // Hang on to the width and height values to use when generating the graph
    var width = boundingRect.width - (margin.left + margin.right);
    var height = boundingRect.height - (margin.top + margin.bottom);

// Position the chart with the margin accounted for
    // Position the chart with the margin accounted for
    chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    // Render re-renders the bar chart
    config.bar.render = function () {
        // Get the updated countries data sorted by the number of winners
        var companies = config.data.companies.sort(function(a, b) {
            return d3.descending(a.full_name, parseFloat(b.openning));
        });

// Create lists of country names and the winner counts so we can generate
       // d3 scales from the data.
       // We'll use the country names to create a band scale and the winner
       // counts to create a linear band.
       // https://github.com/d3/d3-scale
       // https://github.com/d3/d3-scale#band-scales
       // https://github.com/d3/d3-scale#linear-scales
       var cnames = companies.map(function(x) {return x.full_name});
       var winners = companies.map(function(x) {return parseFloat(x.openning)});
       console.log(winners);


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
           .range([height, 0]);          // ranging from the height down to 0

       // Get the width of the bands from the scale
       var bandwidth = nameScale.bandwidth();

       // Remove the graph if it exists
       chart.selectAll("g").remove();

       // Create a group to hold our graph
       var graph = chart.append("g");

       var div = d3.select("body").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

       // Create a group for our bars
       var bars = graph.append("g")
           .classed("bars", true)
           .attr('fill', '#7da1b7');
           // https://stackoverflow.com/questions/35038534/d3-js-changing-the-color-of-the-bar-depending-on-the-value

       // Draw the bars
       bars.selectAll('rect.bar')
           .data(companies)
           .enter()
           .append('rect')
           .classed('bar', true)
           .attr('width', bandwidth)
           .attr('height', function(d) {
                return parseFloat(d.openning);
            })
           .attr('x', function(d) {
                return nameScale(d.full_name);
            })
            .attr('y', function(d) {
                return winnerScale(d.openning);
            });

        // Create a Y axis on the left side from our winner scale
        // If the largest value is greater than 10 only draw 10 tick marks
        // but if the value is less than 10, e.g. 3, only draw 3 tick marks
        var xAxis = d3.axisBottom(nameScale)
            .tickSizeOuter(0);
            // .orient("bottom");
        graph.append("g")
            .classed("x axis", true)
            .call(xAxis)
            .attr('transform', 'translate(0,' + height + ')')
            .selectAll("text")
            .attr('transform', 'rotate(-65)')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em');
        var yAxis = d3.axisLeft(winnerScale)
            .ticks(Math.min(10, maxWinner));

        graph.append("g")
            .classed("y axis", true)
            .call(yAxis);
            // .attr('transform', 'translate(0,' + 'height' + ')');

    }
  }
