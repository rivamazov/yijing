'use strict'

// Hexagram Data Structure
function Hex(hexLines = []) {
	let linesArr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9]
	let lines = hexLines
	let primaryLines = []
	let secondaryLines = []
	let name = ""

	function getLines() {
		return lines;
	}

	function setLines(hexArray) {
		if (hexArray.length > 6) return "too many lines"
		lines = hexArray
	}

	const addLine = (hexArray) => {
		return [...hexArray, randomLine()];
	}

	function randomLine() {
	let count = linesArr.length;
	while (count > 0) {
		let i = Math.floor(Math.random() * count)
		count--
		let tmp = linesArr[count]
		linesArr[count] = linesArr[i]
		linesArr[i] = tmp
	}
	return (linesArr[0])
	}

	function complete() {
		if (lines.length == 6) return true
		else return false
	}

	return {
		getLines,
		setLines,
		addLine,
		Hex,
	}
}

export default Hex
