"use strict";

// Line 1
var $ = require('jquery');
var d3 = require('d3');


var dataset = [5, 10, 14, 20, 25, 11, 22, 18, 5, 7, 10, 45, 32, 54],
    w = 200,
    h = 100,
    padding = 2,
    monthlySales = [
      {'month': 10, 'sales': 200},
      {'month': 20, 'sales': 14},
      {'month': 30, 'sales': 30},
      {'month': 40, 'sales': 210},
      {'month': 50, 'sales': 150},
      {'month': 60, 'sales': 220},
      {'month': 70, 'sales': 90},
      {'month': 80, 'sales': 60},
      {'month': 90, 'sales': 230},
      {'month': 100, 'sales': 70},
    ];

var lineFun = d3.svg.line()
              .x(function(d) { return d.month*3;})
              .y(function(d) { return d.sales;})
              .interpolate('linear');


var svg = d3.select("#graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

function colorPicker(v) {
  if (v <= 20) { return "#666"; }
  else if (v > 20) { return "#FF0033"; }
}

var viz = svg.append('path')
              .attr({
                d: lineFun(monthlySales),
                'stroke': 'purple',
                'stroke-width': 2,
                'fill': 'none'
              });

// add labels
var lables = svg.selectAll('text')
              .data(monthlySales)
              .enter()
              .append('text')
              .text(function(d){ return d.sales; })
              .attr({
                x: function(d) { return d.month*3-25; },
                y: function(d) { return h-d.sales;},
                'font-size': '12px',
                'font-family': 'sans-serif',
                'fill': '#666',
                'text-anchor': 'start',
                'dy': '.35em',
                'font-weight': function(d,i) {
                  if (i===0 || i==(monthlySales.length-1)) {
                    return 'bold'
                  }
                  else return 'normal';
                }
              });
