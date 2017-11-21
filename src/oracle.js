const	arr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9]

let hexlines = []

// shuffle array and return a number corresponding to 
// an ancient I ching hexagram line
function castLine(arr, hexlines) {
	let count = arr.length
		while (count > 0) {
			let i = Math.floor(Math.random() * count)
			count--
			let tmp = arr[count]
			arr[count] = arr[i]
			arr[i] = tmp
		}
	return (arr[0])
}

// returns all lines in the array provided
function DecimalLines(lines) {
	return `<div>${lines}</div>`
}

// returns a bunch of hex lines wrapped in divs
function HexLines(lines) {
	let retStr = ""
	for (var i = lines.length-1;i>=0;i--) {
		retStr += HexLine(lines[i])
	}
	console.log(retStr)
	return retStr
}
// returns lines as css graphics wrapped up in
// a nice div.
function HexLine(line) {
	return `<div class=${getLineClass(line)}></div>`
}

// takes a hexagram decimal integer and returns
// a css class that draws a shape
function getLineClass(line) {
	switch (line) {
		case 8:
			return 'yin'
		case 7: 
			return 'yang'
		case 6:
			return 'yin'
		case 9:
			return 'yang'
		}
}


function update() {
	document.querySelector('#lines').innerHTML = DecimalLines(hexlines);
	document.querySelector('#hexagram').innerHTML = HexLines(hexlines);
}


