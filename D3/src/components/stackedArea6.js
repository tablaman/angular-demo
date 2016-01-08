"use strict";

// Stacked Area
var $ = require('jquery');
var d3 = require('d3');
var d3tip = require('d3-tip');


var NSW = "NSW";
var QLD = "QLD";

var data = [{"date":"1-May-12","bandwidth":"80.13"},
            {"date":"30-Apr-12","bandwidth":"24.98"},
            {"date":"27-Apr-12","bandwidth":"100.00"},
            {"date":"26-Apr-12","bandwidth":"55.70"},
            {"date":"25-Apr-12","bandwidth":"90.00"},
            {"date":"24-Apr-12","bandwidth":"88.28"},
            {"date":"23-Apr-12","bandwidth":"57.70"},
            {"date":"20-Apr-12","bandwidth":"54.98"},
            {"date":"19-Apr-12","bandwidth":"35.44"},
            {"date":"18-Apr-12","bandwidth":"60.34"},
            {"date":"17-Apr-12","bandwidth":"69.70"},
            {"date":"16-Apr-12","bandwidth":"58.13"},
            {"date":"13-Apr-12","bandwidth":"60.23"},
            {"date":"12-Apr-12","bandwidth":"62.77"},
            {"date":"11-Apr-12","bandwidth":"52.20"},
            {"date":"10-Apr-12","bandwidth":"61.44"},
            {"date":"9-Apr-12","bandwidth":"63.23"},
            {"date":"5-Apr-12","bandwidth":"67.68"},
            {"date":"4-Apr-12","bandwidth":"62.31"},
            {"date":"3-Apr-12","bandwidth":"35.32"},
            {"date":"2-Apr-12","bandwidth":"61.63"},
            {"date":"30-Mar-12","bandwidth":"59.55"},
            {"date":"29-Mar-12","bandwidth":"60.86"},
            {"date":"28-Mar-12","bandwidth":"61.62"},
            {"date":"27-Mar-12","bandwidth":"63.48"},
            {"date":"26-Mar-12","bandwidth":"60.98"},
            {"date":"23-Mar-12","bandwidth":"59.05"},
            {"date":"22-Mar-12","bandwidth":"79.34"},
            {"date":"21-Mar-12","bandwidth":"25.50"},
            {"date":"20-Mar-12","bandwidth":"68.96"},
            {"date":"19-Mar-12","bandwidth":"71.10"},
            {"date":"16-Mar-12","bandwidth":"77.57"},
            {"date":"15-Mar-12","bandwidth":"85.56"},
            {"date":"14-Mar-12","bandwidth":"108.00"},
            {"date":"13-Mar-12","bandwidth":"99.10"},
            {"date":"12-Mar-12","bandwidth":"77.00"},
            {"date":"9-Mar-12","bandwidth":"54.17"},
            {"date":"8-Mar-12","bandwidth":"54.99"},
            {"date":"7-Mar-12","bandwidth":"53.69"},
            {"date":"6-Mar-12","bandwidth":"88.26"},
            {"date":"5-Mar-12","bandwidth":"98.16"},
            {"date":"2-Mar-12","bandwidth":"56.18"},
            {"date":"1-Mar-12","bandwidth":"51.47"},
            {"date":"29-Feb-12","bandwidth":"57.44"},
            {"date":"28-Feb-12","bandwidth":"88.41"},
            {"date":"27-Feb-12","bandwidth":"35.76"},
            {"date":"24-Feb-12","bandwidth":"52.41"},
            {"date":"23-Feb-12","bandwidth":"77.39"},
            {"date":"22-Feb-12","bandwidth":"95"}];

var data2 = [{"date":"1-May-12","bandwidth":"20.13"},
            {"date":"30-Apr-12","bandwidth":"15.98"},
            {"date":"27-Apr-12","bandwidth":"30.00"},
            {"date":"26-Apr-12","bandwidth":"60.70"},
            {"date":"25-Apr-12","bandwidth":"50.00"},
            {"date":"24-Apr-12","bandwidth":"56.28"},
            {"date":"23-Apr-12","bandwidth":"45.70"},
            {"date":"20-Apr-12","bandwidth":"70.98"},
            {"date":"19-Apr-12","bandwidth":"100.44"},
            {"date":"18-Apr-12","bandwidth":"50.34"},
            {"date":"17-Apr-12","bandwidth":"45.70"},
            {"date":"16-Apr-12","bandwidth":"35.13"},
            {"date":"13-Apr-12","bandwidth":"55.23"},
            {"date":"12-Apr-12","bandwidth":"88.77"},
            {"date":"11-Apr-12","bandwidth":"90.20"},
            {"date":"10-Apr-12","bandwidth":"56.44"},
            {"date":"9-Apr-12","bandwidth":"65.23"},
            {"date":"5-Apr-12","bandwidth":"77.68"},
            {"date":"4-Apr-12","bandwidth":"65.31"},
            {"date":"3-Apr-12","bandwidth":"37.32"},
            {"date":"2-Apr-12","bandwidth":"55.63"},
            {"date":"30-Mar-12","bandwidth":"100.55"},
            {"date":"29-Mar-12","bandwidth":"105.86"},
            {"date":"28-Mar-12","bandwidth":"108"},
            {"date":"27-Mar-12","bandwidth":"87.48"},
            {"date":"26-Mar-12","bandwidth":"89.98"},
            {"date":"23-Mar-12","bandwidth":"92.05"},
            {"date":"22-Mar-12","bandwidth":"99"},
            {"date":"21-Mar-12","bandwidth":"61.50"},
            {"date":"20-Mar-12","bandwidth":"105.96"},
            {"date":"19-Mar-12","bandwidth":"101.10"},
            {"date":"16-Mar-12","bandwidth":"57.57"},
            {"date":"15-Mar-12","bandwidth":"65.56"},
            {"date":"14-Mar-12","bandwidth":"59.58"},
            {"date":"13-Mar-12","bandwidth":"42.10"},
            {"date":"12-Mar-12","bandwidth":"55.00"},
            {"date":"9-Mar-12","bandwidth":"34.17"},
            {"date":"8-Mar-12","bandwidth":"24.99"},
            {"date":"7-Mar-12","bandwidth":"100.69"},
            {"date":"6-Mar-12","bandwidth":"99.26"},
            {"date":"5-Mar-12","bandwidth":"43.16"},
            {"date":"2-Mar-12","bandwidth":"65.18"},
            {"date":"1-Mar-12","bandwidth":"54.47"},
            {"date":"29-Feb-12","bandwidth":"42.44"},
            {"date":"28-Feb-12","bandwidth":"35.41"},
            {"date":"27-Feb-12","bandwidth":"25.76"},
            {"date":"24-Feb-12","bandwidth":"22.41"},
            {"date":"23-Feb-12","bandwidth":"16.39"},
            {"date":"22-Feb-12","bandwidth":"13.04"}];

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 180 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.bandwidth = +d.bandwidth;
  });
data2.forEach(function(d) {
    d.date = parseDate(d.date);
    d.bandwidth = +d.bandwidth;
  });

var x = d3.time.scale()
    .domain(d3.extent(data, function(d) { return d.date; }))
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.bandwidth; })])
    .range([height, 0]);


var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');
var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

var area = d3.svg.area()
  .x(function(d) { return x(d.date); })
  .y0(height)
  .y1(function(d) { return y(d.bandwidth); });

// var tip = d3tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(function(d) {
//     return "<strong>Frequency:</strong> <span style='color:red'>" + d.bandwidth + "</span>";
// });



var svg = d3.select("#graph")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  // Prep the tooltip bits, initial display is hidden
    var tooltip = svg.append("g")
      .attr("class", "tooltip")
      .style("opacity", 1.0)
      .style("display", "none");

    tooltip.append("rect")
      .attr("width", 120)
      .attr("height", 20)
      .attr("fill", "white")
      .style("opacity", 1.0);

    tooltip.append("text")
      .attr("x", 60)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");
// x.domain(d3.extent(data, function(d){ return d.date }));
// y.domain([0, d3.max(data, function(d) { return d.bandwidth })]);

svg
  .selectAll("path.area")
  .data([data,data2])          // !!! here i can pass both arrays in.
  .enter()
  .append("path")
  // .attr("fill", "rgba(100,200,0,0.5)")
  .attr("fill", "rgba(247,142,88,0.5)")
  .attr("class", function(d,i) { return [NSW,QLD][i]; })
  .attr("d", area)
  .on("mouseover", function() {
    tooltip.style("display", null);
   })
  .on("mouseout", function() {
    tooltip.style("display", "none");
  })
  .on("mousemove", function(d) {
    var xPosition = d3.mouse(this)[0] - 15;
    var yPosition = d3.mouse(this)[1] - 25;
    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
    var x0 = x.invert(d3.mouse(this)[0]);
    var y0 = y.invert(d3.mouse(this)[1]);
    tooltip.select("text").text(d3.time.format('%Y/%m/%d')(x0)+ " " +Math.round(y0));
  });


svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

// svg.append("g")
//     .attr("class", "y axis")
//     .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Price ($)");
