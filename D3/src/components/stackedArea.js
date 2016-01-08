"use strict";

// Stacked Area
var $ = require('jquery');
var d3 = require('d3');


var dataset = [5, 10, 14, 20, 25, 11, 22, 18, 5, 7, 10, 45, 32, 54],
    w = 400,
    h = 300,
    padding = 2,
    monthlySales = [
      {'x': 10, 'y': 200},
      {'x': 20, 'y': 14},
      {'x': 30, 'y': 30},
      {'x': 40, 'y': 210},
      {'x': 50, 'y': 150},
      {'x': 60, 'y': 220},
      {'x': 70, 'y': 90},
      {'x': 80, 'y': 60},
      {'x': 90, 'y': 230},
      {'x': 100, 'y': 70},
      {'x': 110, 'y': 73},
      {'x': 120, 'y': 65},
      {'x': 130, 'y': 99}
    ],
    monthlySales2 = [
      {'x': 5, 'y': 10},
      {'x': 10, 'y': 140},
      {'x': 30, 'y': 22},
      {'x': 40, 'y': 21},
      {'x': 50, 'y': 120},
      {'x': 60, 'y': 120},
      {'x': 70, 'y': 60},
      {'x': 80, 'y': 80},
      {'x': 90, 'y': 30},
      {'x': 100, 'y': 70},
      {'x': 110, 'y': 74},
      {'x': 120, 'y': 55},
      {'x': 130, 'y': 110}
    ];
var n = 2, // number of layers
    m = 150, // number of samples per layer
    stack = d3.layout.stack().offset("wiggle"),
    layers0 = stack(d3.range(n).map(function() { return monthlySales2 })),
    layers1 = stack(d3.range(n).map(function() { return monthlySales }));

var width = 960,
    height = 500;

var x = d3.scale.linear()
    .domain([0, m - 1])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, d3.max(layers0.concat(layers1), function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); })])
    .range([height, 0]);

var color = d3.scale.linear()
    .range(["#aad", "#556"]);

var area = d3.svg.area()
    .x(function(d) { return x(d.x); })
    .y0(function(d) { return y(d.y0); })
    .y1(function(d) { return y(d.y0 + d.y); });


var svg = d3.select("#graph")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

            svg.selectAll("path")
                .data(layers0)
              .enter().append("path")
                .attr("d", area)
                .style("fill", function() { return color(Math.random()); });

            function transition() {
              d3.selectAll("path")
                  .data(function() {
                    var d = layers1;
                    layers1 = layers0;
                    return layers0 = d;
                  })
                .transition()
                  .duration(2500)
                  .attr("d", area);
            }

            // Inspired by Lee Byron's test data generator.
            function bumpLayer(n) {

              function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < n; i++) {
                  var w = (i / n - y) * z;
                  a[i] += x * Math.exp(-w * w);
                }
              }

              var a = [], i;
              for (i = 0; i < n; ++i) a[i] = 0;
              for (i = 0; i < 5; ++i) bump(a);
              return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
            }
