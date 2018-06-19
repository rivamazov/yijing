"use strict";

var arr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9];
var hexlines = [];

// shuffle array and return a number corresponding to 
// an ancient I ching hexagram line
function castLine(arr) {
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

// returns all decimal lines in the array provided
function DecimalLines(lines) {
	return "<div>" + lines + "</div>";
}

// returns hex lines separated by divs
function Hexagram(lines) {
	var retStr = "";
	for (var i = lines.length - 1; i >= 0; i--) {
		retStr += HexLine(lines[i]);
	}
	console.log(retStr);
	return retStr;
}
// returns line number as css
function HexLine(line) {
	return "<div class=\"" + getLineClass(line) + "\"></div>";
}

// takes a hexagram decimal integer and returns
// a css class that draws a shape
function getLineClass(line) {
	switch (line) {
		case 8:
			return "yin";
		case 7:
			return 'yang';
		case 6:
			return 'yin changing';
		case 9:
			return "yang changing";
	}
}

function Result(primary) {
	return "";
}

function lookupHexagram(hexlines) {}

function update() {
	document.querySelector('#lines').innerHTML = DecimalLines(hexlines);
	document.querySelector('#hexagram').innerHTML = Hexagram(hexlines);
	document.querySelector('#result').innerHTML = Result(hexlines);
}

var hexdict = {
	1: '777777',
	2: '888888',
	3: '788878',
	4: '878887',
	5: '777878',
	6: '878777',
	7: '878888',
	8: '888878',
	9: '777877',
	10: '778777',
	11: '777888',
	12: '888777',
	13: '787777',
	14: '777787',
	15: '887888',
	16: '888788',
	17: '788778',
	18: '877887',
	19: '778888',
	20: '888877',
	21: '788787',
	22: '787887',
	23: '888887',
	24: '788888',
	25: '788777',
	26: '777887',
	27: '788887',
	28: '877778',
	29: '878878',
	30: '787787',
	31: '887778',
	32: '877788',
	33: '887777',
	34: '777788',
	35: '888787',
	36: '787888',
	37: '787877',
	38: '778787',
	39: '887878',
	40: '878788',
	41: '778887',
	42: '788877',
	43: '777778',
	44: '877777',
	45: '888778',
	46: '877888',
	47: '878778',
	48: '877878',
	49: '787778',
	50: '877787',
	51: '788788',
	52: '887887',
	53: '887877',
	54: '778788',
	55: '787788',
	56: '887787',
	57: '877877',
	58: '778778',
	59: '878877',
	60: '778878',
	61: '778877',
	62: '887788',
	63: '787878',
	64: '878787'
};