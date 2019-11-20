'use strict'

function Hex(hexLines = []) {
	let linesArr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9]
	let primaryLines = []
	let secondaryLines = []
	let name = ""

	const addLine = (hexArray) => {
		if (isComplete(hexArray)) {
			console.log('hex is already full')
			return hexArray
		}
		return [...hexArray, randomLine()];
	}

	const randomLine = (hexArray) => {
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

	const isComplete = (hexArray) => {
		if (hexArray.length == 6) return true
		else return false
	}

	return {
		addLine,
		isComplete,
	}
}

export default Hex
