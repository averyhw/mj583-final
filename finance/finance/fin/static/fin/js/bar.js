//
// function initBar(config) {
//     var svgContainer = d3.select("#fin-bar");
//     window.fin = {
//       params: {}
//     };
//     config.bar = {};
//     var svg = svgContainer.append("svg");
//     svg.attr('width', '100%')
//       .attr('height', 200);
//     var boundingRect = svgContainer.node().getBoundingClientRect();
//
//     var width = boundingRect.width;
//     var height = boundingRect.height;
//     var chart = svg.append("g");
//
//     config.bar.render = function () {
//         var companies = config.data.companies.sort(function(a, b) {
//             return d3.descending(a.company, b.company);
//         });
//
//        var cnames = comapnies.map(function(x) {return x.name});
//        var companies_openning = companies.map(function(x) {return x.openning});
//
//        var nameScale = d3.scaleBand()
//            .domain(cnames)
//            .range([0, width])
//            .paddingInner(0.1);
//
//        var maxWinner = d3.max(companies_openning);
//
//        var winnerScale = d3.scaleLinear()
//            .domain([0, maxWinner])
//            .range([height, 0])
//            .nice();
//
//        var bandwidth = nameScale.bandwidth();
//
//        chart.selectAll("g").remove();
//
//        var graph = chart.append("g");
//
//        var bars = graph.append("g")
//            .classed("bars", true);
//
//        bars.selectAll('rect.bar')
//            .data(countries)
//            .enter()
//            .append('rect')
//            .classed('bar', true)
//            .attr('width', bandwidth)
//            .attr('height', function(d) {
//                return height - winnerScale(d.openning);
//            })
//            .attr('x', function(d) {
//                return nameScale(d.name);
//            })
//            .attr('y', function(d) {
//                return winnerScale(d.oppening);
//            });
//
// }}








// TRY 2



// function initBar(config) {
//     var svgContainer = d3.select("#fin-bar");
//
//     // Create an object to export our methods on the config
//     config.bar = {};
//
//     // Start building our svg bar chart
//     var svg = svgContainer.append("svg");
//     var chart = svg.append("g");
//
//     // Configure our SVG element to be the full width and 200px tall
//     svg.attr('width', '100%')
//         .attr('height', 200);
//
//     // Get the width and height of the element containing our svg element
//     var boundingRect = svgContainer.node().getBoundingClientRect();
//
//     // Add margins so there is room to draw our axis
//     var margin = {'left': 40, 'right': 0, 'top': 10, 'bottom': 40};
//
//     // Hang on to the width and height values to use when generating the graph
//     var width = boundingRect.width - (margin.left + margin.right);
//     var height = boundingRect.height - (margin.top + margin.bottom);
//
//     // Position the chart with the margin accounted for
//     chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
//
//     // Render re-renders the bar chart
//     config.bar.render = function () {
//         // Get the updated countries data sorted by the number of winners
//         var companies = config.data.companies.sort(function(a, b) {
//             return d3.descending(a.winners, b.winners);
//         });

        // Create lists of country names and the winner counts so we can generate
        // d3 scales from the data.
        // We'll use the country names to create a band scale and the winner
        // counts to create a linear band.
        // https://github.com/d3/d3-scale
        // https://github.com/d3/d3-scale#band-scales
        // https://github.com/d3/d3-scale#linear-scales
        // var cnames = companies.map(function(x) {return x.alpha_code});
        // var winners = companies.map(function(x) {return x.winners});
        //
        // // Create our country name scale
        // var nameScale = d3.scaleBand() // band scale
        //     .domain(cnames)            // of country names
        //     .range([0, width])         // ranging from 0 to the width of our container
        //     .paddingInner(0.1);        // with padding between the bands

        // Get the highest value from the winners data
        // var maxWinner = d3.max(winners);

        // Create our winner count scale
        // var winnerScale = d3.scaleLinear() // linear scale
        //     .domain([0, maxWinner])        // of a domain
        //     .range([height, 0])            // ranging from the height down to 0
        //     .nice();                       // rounding to a nice even number

        // Get the width of the bands from the scale
        // var bandwidth = nameScale.bandwidth();

        // // Remove the graph if it exists
        // chart.selectAll("g").remove();

        // Create a group to hold our graph
        // var graph = chart.append("g");

        // Create a group for our bars
        // var bars = graph.append("g")
        //     .classed("bars", true);

        // Draw the bars
        // bars.selectAll('rect.bar')
        //     .data(countries)
        //     .enter()
        //     .append('rect')
        //     .classed('bar', true)
        //     .attr('width', bandwidth)
        //     .attr('height', function(d) {
        //         return height - winnerScale(d.winners);
        //     })
        //     .attr('x', function(d) {
        //         return nameScale(d.alpha_code);
        //     })
        //     .attr('y', function(d) {
        //         return winnerScale(d.winners);
        //     });

        // Create a Y axis on the left side from our winner scale
        // If the largest value is greater than 10 only draw 10 tick marks
        // but if the value is less than 10, e.g. 3, only draw 3 tick marks
        // var yAxis = d3.axisLeft(winnerScale)
        //     .ticks(Math.min(10, maxWinner));
        //
        // graph.append("g")
        //     .classed("y axis", true)
        //     .call(yAxis);

        // Create an X axis on the bottom to show the country names
//         var xAxis = d3.axisBottom(nameScale)
//             .tickSizeOuter(0);
//
//         graph.append("g")
//             .classed("x axis", true)
//             .call(xAxis)
//             .attr('transform', 'translate(0,' + height + ')')
//             .selectAll("text")
//             .attr('transform', 'rotate(-65)')
//             .style('text-anchor', 'end')
//             .attr('dx', '-.8em')
//             .attr('dy', '.15em');
//     }
// }




// TRY 3

// var data;


// $( document ).ready(function() {
//     console.log( "ready!" );
//     initBar();
// });

// function fetchData(data) {
//
//     $.get("/api/?" + $.param(window.Company.params))
//
//         .done(function(data) {
//             $('#fin-bar').text(JSON.stringify(data, null, '  '));
//             // Add data to global container
//             window.Company.data = data;
//             // Re-render the bar chart
//             window.Company.bar.render();
//             initBar();
//         })
//         .fail(function(){
//             console.log("Could not load data");
//             alert("Could not load data");
//         });
//
// }

//
// function initBar(data) {
//     var svgContainer = d3.select("#fin-bar");
//
//     // Create an object to export our methods on the config
//     data.bar = {};
//
//     // Start building our svg bar chart
//     var svg = svgContainer.append("svg");
//     var chart = svg.append("g");
//     svg.attr('width', '100%')
//       .attr('height', 200);
//
//     // Get the width and height of the element containing our svg element
//     var boundingRect = svgContainer.node().getBoundingClientRect();
//
//     // Hang on to the width and height values to use when generating the graph
//     var width = boundingRect.width;
//     var height = boundingRect.height;
//
//     // Render re-renders the bar chart
//     data.bar.render = function () {
//         // Get the updated countries data sorted by the number of winners
//         var companies_var = config.data.Company.sort(function(a, b) {
//             return d3.descending(a.Company, b.Company);
//         });
//
//         console.log(companies_var);
//     }
// }
// window.Company = {
//   params: {}
// };






// TRY 4

//
function initBar(config) {
    var svgContainer = d3.select("#fin-bar");


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

    // Add margins so there is room to draw our axis
    var margin = {'left': 40, 'right': 0, 'top': 10, 'bottom': 40};

    // Hang on to the width and height values to use when generating the graph
    var width = boundingRect.width - (margin.left + margin.right);
    var height = boundingRect.height - (margin.top + margin.bottom);

    // Position the chart with the margin accounted for
    chart.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Render re-renders the bar chart
    config.bar.render = function () {
      console.log("here");
        // Get the updated countries data sorted by the number of winners
        // var companies = config.data.Company.sort(function(a) {
        //     return d3.descending(a.openning);
        //     console.log(companies);
        // });


        // Create lists of country names and the winner counts so we can generate
        // d3 scales from the data.
        // We'll use the country names to create a band scale and the winner
        // counts to create a linear band.
        // https://github.com/d3/d3-scale
        // https://github.com/d3/d3-scale#band-scales
        // https://github.com/d3/d3-scale#linear-scales
        var cnames = Company.map(function(x) {return x.full_name});
        var openning = Company.map(function(x) {return x.openning});

        // Create our country name scale
        var nameScale = d3.scaleBand() // band scale
            .domain(cnames)            // of country names
            .range([0, width])         // ranging from 0 to the width of our container
            .paddingInner(0.1);        // with padding between the bands

        // Get the highest value from the winners data
        var maxWinner = d3.max(companies);

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

        // Draw the bars
        bars.selectAll('rect.bar')
            .data(companies)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('width', bandwidth)
            .attr('height', function(d) {
                return height - winnerScale(d.companies);
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
        var yAxis = d3.axisLeft(winnerScale)
            .ticks(Math.min(10, maxWinner));

        graph.append("g")
            .classed("y axis", true)
            .call(yAxis);

        // Create an X axis on the bottom to show the country names
        var xAxis = d3.axisBottom(nameScale)
            .tickSizeOuter(0);

        graph.append("g")
            .classed("x axis", true)
            .call(xAxis)
            .attr('transform', 'translate(0,' + height + ')')
            .selectAll("text")
            .attr('transform', 'rotate(-65)')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em');
    }
}



// TRY 5

// function initBar () {
//   var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;
//
// // Parse the date / time
// var	parseDate = d3.time.format("%Y-%m").parse;
//
// var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
//
// var y = d3.scale.linear().range([height, 0]);
//
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
//     .tickFormat(d3.time.format("%Y-%m"));
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(10);
//
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
// d3.csv("final.json", function(error, data) {
//
//     data.forEach(function(d) {
//         d.name = parseDate(d.name);
//         d.Open = parseDate(d.Open);
//     });
//
//   x.domain(data.map(function(d) { return d.name; }));
//   y.domain([0, d3.max(data, function(d) { return d.Open; })]);
//
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" );
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Value ($)");
//
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .style("fill", "steelblue")
//       .attr("x", function(d) { return x(d.name); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.Open); })
//       .attr("height", function(d) { return height - y(d.Open); });
//
// });
// }
