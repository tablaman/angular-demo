"use strict";

var $ = require('jquery');
// $ = jQuery;
var d3 = require('d3');


var svg = d3.select('#graph')
            .append("svg")
            .style({
              width: "100%",
              height: 500
            });

var manually = function (data, x, y) {
  var colours = d3.scale.category20c(),
      total = d3.sum(data.map(function(d) { return d.value; })),
      offset = function(d, i) {
        return d3.sum(data.slice(0, i).map(function (d) {
          return 2*Math.PI*(d.value/total);
        }));
      },
      arc = d3.svg.arc()
          .outerRadius(150)
          .startAngle(offset)
          .endAngle(function(d,i){
            return offset(d, i)+2*Math.PI*(d.value/total);
          }),
      slice = svg.selectAll('.slice')
            .data(data)
            .enter()
            .append("g")
            .attr("transform", "translate(" + x +", "+ y +")");
      slice.append("path")
          .attr({d: arc,
                    fill: function (d,i) {return colours(i);},
                    title: function (d) {return d.label + " ("+d.value+")";}
                  });
};

d3.json("ufo-types.json", function(data) {
  manually(data, 300, 250);
});
