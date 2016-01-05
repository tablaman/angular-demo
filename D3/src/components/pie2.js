"use strict";

// Using Layouts
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
      pie = d3.layout.pie()
            .value(function(d){ return d.value; })
            .startAngle(-.5)
            .endAngle(-2.5),
      arc = d3.svg.arc()
          .outerRadius(150),
      slice = svg.selectAll('.slice')
            .data(pie(data))
            .enter()
            .append("g")
            .attr("transform", "translate(" + x +", "+ y +")");
      slice.append("path")
          .attr({d: arc,
                    fill: function (d,i) {return colours(i);},
                    title: function (d) {return d.data.label + " ("+d.data.value+")";}
                  });
};

d3.json("ufo-types.json", function(data) {
  usingLayouts(data, 200, 200);


});

// $("svg path").tooltip({
//   container: "body",
//   placement: "right"
// });
