"use strict";

// Using Layouts
var $ = require('jquery');
var d3 = require('d3');


var dataset = [5, 10, 14, 20, 25, 11, 22, 18, 5, 7, 10, 45, 32, 54],
    w = 300,
    h = 100,
    padding = 2;
var svg = d3.select("#graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
//
// svg.selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//       .attr('x', function (d, i){
//         return i * (w/dataset.length);
//       })
//       .attr('y', function(d){
//         return h - (d);
//       })
//       .attr("width", w/dataset.length - padding)
//       .attr("height", function (d) {
//         return d * 4;
//       })
//       .attr('fill',function (d) {
//         return 'rgb(0, ' + (d*10) + ',0)';
//       });


function colorPicker(v) {
  if (v <= 20) { return "#666"; }
  else if (v > 20) { return "#FF0033"; }
}
// Better way of Writing this out
// Add rect
svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
      .attr({
        x: function (d, i){ return i * (w/dataset.length);},
        y: function(d){ return h - (d);},
        width: w/dataset.length - padding,
        height: function(d) { return d * 4 },
        // fill: function(d) {return 'rgb(0, ' + (d*10) + ',0)';}
        fill: function(d) {return colorPicker(d);}
      });

// Add text
svg.selectAll('text')
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) { return d;})
  .attr({
    "text-anchor": "middle",
    x: function(d,i) {return i* (w/dataset.length) + (w / dataset.length - padding)/2;},
    y: function(d) { return h - (d*4)+14;},
    "font-family": "sans-serif",
    "font-size": 12
  });
