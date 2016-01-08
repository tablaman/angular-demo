"use strict";

// Stacked Area
var $ = require('jquery');
var d3 = require('d3');


var dataset = [5, 10, 14, 20, 25, 11, 22, 18, 5, 7, 10, 45, 32, 54],
    w = 400,
    h = 300,
    padding = 2,
    monthlySales = [
      {'x': 10, 'y': 200, date: "01/01/2015"},
      {'x': 20, 'y': 14, date: "12/02/2015"},
      {'x': 30, 'y': 30, date: "7/03/2015"},
      {'x': 40, 'y': 210, date: "6/04/2015"},
      {'x': 50, 'y': 150, date: "21/05/2015"},
      {'x': 60, 'y': 220, date: "3/06/2015"},
      {'x': 70, 'y': 90, date: "14/07/2015"},
      {'x': 80, 'y': 60, date: "15/08/2015"},
      {'x': 90, 'y': 230, date: "21/09/2015"},
      {'x': 100, 'y': 70, date: "2/10/2015"},
      {'x': 110, 'y': 73, date: "5/11/2015"},
      {'x': 120, 'y': 65, date: "8/12/2015"}
    ];

var format = d3.time.format("%m/%d/%y");

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var z = d3.scale.category20c();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(d3.time.days);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var stack = d3.layout.stack()
        .offset("zero")
        .values(function(d) { return d.values; })
        .x(function(d) { return d.date; })
        .y(function(d) { return d.value; });

    var nest = d3.nest()
        .key(function(d) { return d.key; });

    var area = d3.svg.area()
        .interpolate("cardinal")
        .x(function(d) { return x(d.date); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3.select("#graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("monthlySales.json", function(error, data) {
      if (error) throw error;

      data.forEach(function(d) {
        d.date = format.parse(d.date);
        d.value = +d.value;
      });

      var layers = stack(nest.entries(data));

      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

      svg.selectAll(".layer")
          .data(layers)
        .enter().append("path")
          .attr("class", "layer")
          .attr("d", function(d) { return area(d.values); })
          .style("fill", function(d, i) { return z(i); });

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    });
