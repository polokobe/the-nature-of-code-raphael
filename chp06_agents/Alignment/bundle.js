(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global utils,PVector,Path,Vehicle */
(function () {
  var paper = utils.setup();
  var width = paper.width;
  var height = paper.height;

  var vehicles = [];

  for (var i = 0; i < 100; i++) {
    vehicles.push(new Vehicle(utils.random(width), utils.random(height), 3, 0.2, paper));
  }

  utils.draw(60, function () {
    vehicles.forEach(function (v) {
      v.align(vehicles)
        .run();
    });
  });

  var click = false;
  paper.canvas.onmousedown = function () {
    click = true;
  };

  paper.canvas.onmouseup = function () {
    click = false;
  };

  paper.canvas.onmousemove = function (e) {
    click && vehicles.push(new Vehicle(e.layerX, e.layerY, 3, 0.2, paper));
  };

  paper.text(120, height - 16, 'Drag the mouse to generate new boids.');
})();

},{}]},{},[1])