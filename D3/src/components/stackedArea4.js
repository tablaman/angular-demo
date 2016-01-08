"use strict";

// Stacked Area
var $ = require('jquery');
var d3 = require('d3');

var NSW = "NSW";
var QLD = "QLD";

var data = [{"date":"1-May-12","close":"582.13"},
            {"date":"30-Apr-12","close":"583.98"},
            {"date":"27-Apr-12","close":"603.00"},
            {"date":"26-Apr-12","close":"607.70"},
            {"date":"25-Apr-12","close":"610.00"},
            {"date":"24-Apr-12","close":"560.28"},
            {"date":"23-Apr-12","close":"571.70"},
            {"date":"20-Apr-12","close":"572.98"},
            {"date":"19-Apr-12","close":"587.44"},
            {"date":"18-Apr-12","close":"608.34"},
            {"date":"17-Apr-12","close":"609.70"},
            {"date":"16-Apr-12","close":"580.13"},
            {"date":"13-Apr-12","close":"605.23"},
            {"date":"12-Apr-12","close":"622.77"},
            {"date":"11-Apr-12","close":"626.20"},
            {"date":"10-Apr-12","close":"628.44"},
            {"date":"9-Apr-12","close":"636.23"},
            {"date":"5-Apr-12","close":"633.68"},
            {"date":"4-Apr-12","close":"624.31"},
            {"date":"3-Apr-12","close":"629.32"},
            {"date":"2-Apr-12","close":"618.63"},
            {"date":"30-Mar-12","close":"599.55"},
            {"date":"29-Mar-12","close":"609.86"},
            {"date":"28-Mar-12","close":"617.62"},
            {"date":"27-Mar-12","close":"614.48"},
            {"date":"26-Mar-12","close":"606.98"},
            {"date":"23-Mar-12","close":"596.05"},
            {"date":"22-Mar-12","close":"599.34"},
            {"date":"21-Mar-12","close":"602.50"},
            {"date":"20-Mar-12","close":"605.96"},
            {"date":"19-Mar-12","close":"601.10"},
            {"date":"16-Mar-12","close":"585.57"},
            {"date":"15-Mar-12","close":"585.56"},
            {"date":"14-Mar-12","close":"589.58"},
            {"date":"13-Mar-12","close":"568.10"},
            {"date":"12-Mar-12","close":"552.00"},
            {"date":"9-Mar-12","close":"545.17"},
            {"date":"8-Mar-12","close":"541.99"},
            {"date":"7-Mar-12","close":"530.69"},
            {"date":"6-Mar-12","close":"530.26"},
            {"date":"5-Mar-12","close":"533.16"},
            {"date":"2-Mar-12","close":"545.18"},
            {"date":"1-Mar-12","close":"544.47"},
            {"date":"29-Feb-12","close":"542.44"},
            {"date":"28-Feb-12","close":"535.41"},
            {"date":"27-Feb-12","close":"525.76"},
            {"date":"24-Feb-12","close":"522.41"},
            {"date":"23-Feb-12","close":"516.39"},
            {"date":"22-Feb-12","close":"513.04"}];

var data2 = [{"date":"1-May-12","close":"200.13"},
            {"date":"30-Apr-12","close":"150.98"},
            {"date":"27-Apr-12","close":"300.00"},
            {"date":"26-Apr-12","close":"607.70"},
            {"date":"25-Apr-12","close":"502.00"},
            {"date":"24-Apr-12","close":"560.28"},
            {"date":"23-Apr-12","close":"450.70"},
            {"date":"20-Apr-12","close":"700.98"},
            {"date":"19-Apr-12","close":"100.44"},
            {"date":"18-Apr-12","close":"50.34"},
            {"date":"17-Apr-12","close":"40.70"},
            {"date":"16-Apr-12","close":"30.13"},
            {"date":"13-Apr-12","close":"10.23"},
            {"date":"12-Apr-12","close":"2.77"},
            {"date":"11-Apr-12","close":"26.20"},
            {"date":"10-Apr-12","close":"28.44"},
            {"date":"9-Apr-12","close":"36.23"},
            {"date":"5-Apr-12","close":"133.68"},
            {"date":"4-Apr-12","close":"224.31"},
            {"date":"3-Apr-12","close":"329.32"},
            {"date":"2-Apr-12","close":"118.63"},
            {"date":"30-Mar-12","close":"599.55"},
            {"date":"29-Mar-12","close":"209.86"},
            {"date":"28-Mar-12","close":"17.62"},
            {"date":"27-Mar-12","close":"11.48"},
            {"date":"26-Mar-12","close":"60.98"},
            {"date":"23-Mar-12","close":"292.05"},
            {"date":"22-Mar-12","close":"599"},
            {"date":"21-Mar-12","close":"61.50"},
            {"date":"20-Mar-12","close":"105.96"},
            {"date":"19-Mar-12","close":"101.10"},
            {"date":"16-Mar-12","close":"385.57"},
            {"date":"15-Mar-12","close":"575.56"},
            {"date":"14-Mar-12","close":"590.58"},
            {"date":"13-Mar-12","close":"422.10"},
            {"date":"12-Mar-12","close":"552.00"},
            {"date":"9-Mar-12","close":"345.17"},
            {"date":"8-Mar-12","close":"241.99"},
            {"date":"7-Mar-12","close":"130.69"},
            {"date":"6-Mar-12","close":"330.26"},
            {"date":"5-Mar-12","close":"433.16"},
            {"date":"2-Mar-12","close":"645.18"},
            {"date":"1-Mar-12","close":"544.47"},
            {"date":"29-Feb-12","close":"42.44"},
            {"date":"28-Feb-12","close":"135.41"},
            {"date":"27-Feb-12","close":"25.76"},
            {"date":"24-Feb-12","close":"222.41"},
            {"date":"23-Feb-12","close":"16.39"},
            {"date":"22-Feb-12","close":"313.04"}];

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%d-%b-%y").parse;

data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
  });
data2.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
  });

var x = d3.time.scale()
    .domain(d3.extent(data, function(d) { return d.date; }))
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return d.close; })])
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
  .y1(function(d) { return y(d.close); });

var svg = d3.select("#graph")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



// x.domain(d3.extent(data, function(d){ return d.date }));
// y.domain([0, d3.max(data, function(d) { return d.close })]);
svg
  .selectAll("path.area")
  .data([data,data2])          // !!! here i can pass both arrays in.
  .enter()
  .append("path")
  .attr("fill", "rgba(100,200,0,0.5)")
  // .attr("class", function(d,i) { return [NSW,QLD][i]; })
  .attr("d", area);

// svg.append("path")
//     .datum(data)
//     .attr("class", "area")
//     .attr("d", area);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
