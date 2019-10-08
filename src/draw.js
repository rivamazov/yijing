function draw() {
	function decimalLines(lines) {
		return `<div>${lines}</div>`
	}

	// returns css representation of hex lines separated by divs
	function hexagram(hexLines) {
		let retStr = ""
		for (var i = hexLines.length-1;i>=0;i--) {
			retStr += hexLineAsCSS(hexLines[i])
		}
		console.log(retStr)
		return retStr
	}
	// returns line number as css
	function hexLineAsCSS(line) {
		return `<div class="${getLineClass(line)}"></div>`
	}

	// takes a hexagram decimal integer and returns
	// a css class that draws a shape
	function getLineClass(line) {
		switch (line) {
			case 8:
				return "yin"
			case 7: 
				return 'yang'
			case 6:
				return 'yin changing'
			case 9:
				return "yang changing"
			}
	}

	return {
		draw,
		hexagram
	}

}

export default draw
