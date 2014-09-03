// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./templates
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require bootstrap-sprockets
//= require_tree .
//= require_tree ./../stylesheets

App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {},
  Globals: {}
};

$(function(){
  App.router = new App.Router();
  Backbone.history.start();
});

function drawBars(userEvents) {
  var svgDisplay = $('.svg_display')
  var chart = $('<div>').addClass('chart');
  svgDisplay.append(chart);
  var data = [];
  for (var i =0; i< userEvents.length; i++) {
    data.push(userEvents[i].weeks);
  }
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);
  d3.select(".chart")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", function(d) { return (x(d) * 2.5) + "px"; })
      .text(function(d) { return d; });
}

function drawBubbles(userEvents){
  var data = [];
  for (var i =0; i< userEvents.length; i++) {
    var tempValue = {
      value: userEvents[i].weeks, x: (((i+1)*1.5) * 15), y: (i*Math.random()*5), r: (Math.sqrt(userEvents[i].weeks) * 3.97), title: userEvents[i].title
    }
    data.push(tempValue)
  }
  var width = 900;
  var height = 500;
  var canvas = d3.select('.svg_display').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
      .attr('transform', "translate(100, 250)");
  var pack = d3.layout.pack()
    .size([width, height - 50 ])
    .padding(10);
  var drawNodes = function(data) {
    console.log(data);
    var node = canvas.selectAll('.node')
      .data(data)
      .enter()
      .append('g')
        .attr('class', 'node')
        .attr('transform', function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        .on('mouseover', bounce);
    node.append('circle')
      .attr('r', function (d) { return d.r; })
      .attr('fill', 'red')
      .attr('opacity', 0.25)
      .attr('stroke', 'ADADAD')
      .attr('stroke-width', '2');
    node.append("text")
    .attr("dx", 12)
    .attr("dy", ".35em")
    .text(function(d) { return d.title; });
  };
  drawNodes(data);
}

function bounce(){
  d3.select(this) //selecting the element to be bounced
  .transition()
  // 'transform', function(d) { return "translate(" + d.x + "," + d.y + ")"; }
  .attr("transform", "translate(" + Math.random() * (Math.random() * 900) + "," + Math.random() * 40 + ")")
  .duration(1000)
  .ease('bounce')
}

function dance(){
  d3.select(this) //selecting the element to be bounced
  .transition()
  .attr("r", Math.random() * 100)
  .duration(1000)
  .ease('')
  .each('end', bounce);
}
