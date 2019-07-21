'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createHexagram() {
	var hexLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	var linesArr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9];
	var lines = hexLines;
	var primaryLines = [];
	var secondaryLines = [];
	var name = "";

	function getLines() {
		return lines;
	}

	function setLines(hexArray) {
		if (hexArray.length > 6) return "too many lines";
		lines = hexArray;
	}

	var addLine = function addLine(hexArray) {
		return [].concat(_toConsumableArray(hexArray), [randomLine()]);
	};

	function randomLine() {
		var count = linesArr.length;
		while (count > 0) {
			var i = Math.floor(Math.random() * count);
			count--;
			var tmp = linesArr[count];
			linesArr[count] = linesArr[i];
			linesArr[i] = tmp;
		}
		return linesArr[0];
	}

	function complete() {
		if (lines.length == 6) return true;else return false;
	}

	return {
		getLines: getLines,
		setLines: setLines,
		addLine: addLine,
		createHexagram: createHexagram
	};
}

exports.default = createHexagram();
module.exports = exports["default"];