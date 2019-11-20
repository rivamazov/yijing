function Draw() {

	const linesAsDecimal = (hexArray) => `<div>${hexArray}</div>`

	// returns css representation of hex lines separated by divs
	const linesAsCss = (hexArray) => {
		let retStr = ""
		for (var i = hexArray.length-1;i>=0;i--) {
			retStr += hexLineAsCss(hexArray[i])
		}
		return retStr
	}

	// returns line number as css
	const hexLineAsCss = (line) => {
		return `<div class="${getLineClass(line)}"></div>`
	}

	// takes a hexagram decimal integer and returns
	// a css class that draws a shape
	const getLineClass = (line) => {
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
		linesAsDecimal,
		linesAsCss
	}

}

export default Draw
