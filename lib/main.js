'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.update = update;

var _hexagram = require('./hexagram.js');

var _draw = require('./draw.js');

var hex = (0, _hexagram.createHexagram)([6, 7, 8, 9, 9, 9]);
var css = (0, _draw.draw)();

function update(hexLines) {
	document.querySelector('#lines').innerHTML = hexLines;
	document.querySelector('#hexagram').innerHTML = css.hexagram(hex.getLines());
	document.querySelector('#result').innerHTML = '';
}

window.onload = function () {

	update(hex.getLines());
	var el = document.getElementById('cast');
	debugger;
	el.addEventListener('click', alert('hey'));
};

// document.getElementById('reset').onclick = alert('hey')