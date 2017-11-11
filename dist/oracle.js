'use strict';

var arr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9];

var hexlines = [];

// shuffle array and return a number corresponding to 
// an ancient I ching hexagram line
function castLine(arr, hexlines) {
	var count = arr.length;
	while (count > 0) {
		var i = Math.floor(Math.random() * count);
		count--;
		var tmp = arr[count];
		arr[count] = arr[i];
		arr[i] = tmp;
	}
	return arr[0];
}

function HexLines(lines) {
	console.log(lines);
	return '<div>' + lines + '</div>';
}

function update(hexlines) {
	if (hexlines.length > 6) return;
	document.querySelector('#lines').innerHTML = HexLines(hexlines);
}

//TODO find a better way to clear this
function clearSelector(selector) {
	document.querySelector(selector).innerHTML = '<div></div>';
}