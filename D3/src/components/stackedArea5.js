"use strict";

// Stacked Area
var $ = require('jquery');
var d3 = require('d3');


var NSW = "NSW";
var QLD = "QLD";

var width = 900;
var height = 400;

var years = [1,2,3,4,5,6,7,8,9,10];

var data = years.map(function(){ return [Math.random(),Math.random()]; });   // generate bogus data
var nsw = data.map(function(d) { return d[0];}); // extract new south wales data
var qld = data.map(function(d) { return d[1];}); // extract queensland data

var chart = d3.select("#graph").append("svg").attr("width", width).attr("height", height).append("g");
var x = d3.scale.linear().domain([0, years.length]).range([0, width]);
var y = d3.scale.linear().domain([0, d3.max(data, function(d){ return Math.max(d[0], d[1]); })]).range([height,0]);
var area = d3.svg.area().x(function(d,i) { return x(i); }).y0(height).y1(function(d, i) { return y(d); });

console.log([nsw,qld])

chart
  .selectAll("path.area")
  .data([nsw,qld])          // !!! here i can pass both arrays in.
  .enter()
  .append("path")
  .attr("fill", "rgba(0,0,0,0.5)")
  .attr("class", function(d,i) { return [NSW,QLD][i]; })
  .attr("d", area);

chart.on("click", function() {
  data = years.map(function(){return [ Math.random(),Math.random()];}); // switch in some new random data

  var nsw = data.map(function(d) { return d[0];})
  var qld = data.map(function(d) { return d[1];})

  y.domain([0, d3.max(data, function(d){ return Math.max(d[0], d[1]); })]).range([height, 0]);

  chart
  .selectAll("path")
  .data([nsw,qld])
  .transition()
  .duration(900)
  .attr("d", function(d) { return area(d); });
});
