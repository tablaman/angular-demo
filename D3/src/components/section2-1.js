"use strict";

// Section 2-1 - creating your own Layouts
var $ = require('jquery');
var d3 = require('d3');

var svg = d3.select('#graph')
            .append("svg")
            .style({
              width: "100%",
              height: 500
            });

var usingLayouts = function (data, x, y) {
  data = data.sort(function(a,b){
    return d3.descending(a.value, b.value);
  });
  var colours = d3.scale.category20c(),
      // pie = d3.layout.pie()
      //       .value(function(d){ return d.value; })
      //       .startAngle(-.5)
      //       .endAngle(-2.5),
      arc = d3.svg.arc(),
          // .outerRadius(150),
      slice = svg.selectAll('.slice')
            .data(data)
            .enter()
            .append("g")
            .attr("transform", "translate(" + x +", "+ y +")");
      slice.append("path")
          .attr({d: arc,
                    fill: function (d,i) {return colours(i);},
                    title: function (d) {return d.data.label + " ("+d.data.value+")";}
                  });
};


var parseTimes = function (data) {
  return data.map(function(d) {
    d.time = Date.parse(d.time);
    return d;
  }).filter(function (d) {
    return !!d.time;
  }).map(function(d) {
    d.time = new Date(d.time);
    return d;
  })
}

d3.json("triangle-ufos.json", function(data) {
  data = parseTimes(data);

  var histogram = d3.layout.histogram()
                  .value(function(d){
                    return d.time.getHours();
                  })
                  .bins(24);

  var binned = histogram(data);

  var radians = d3.scale.linear()
                .domain([0, d3.max(binned.map(function(d){ return d.x; }))])
                .range([0, 2*Math.PI]),

      innerRadius = 20;

  binned = binned.map(function(d){
    d.innerRadius = innerRadius;
    d.outerRadius = d.innerRadius+d.y;
    d.startAngle = radians(d.x)-radians(d.dx/2);
    d.endAngle = radians(d.x)+radians(d.dx/2);

    return d;
  });

  usingLayouts(binned, 300, 200);
  console.log(binned);
});
//

// $("svg path").tooltip({
//   container: "body",
//   placement: "right"
// });
