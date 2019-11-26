'use strict'

function Hex(hexLines = []) {
	// array to allow probabilities from the yarrow stalk method.
	// 1/16 3/16 5/16 7/16 for 6, 9, 7, 8 respectively.
	let linesArr = [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9]

	const addLine = (hexArray) => {
		if (isComplete(hexArray)) {
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

	const primary = (hexArray) => {
		return hexArray.map(function(x) {
		  	if (x == 6) return x+=2
		    if (x == 9) return x-=2
		    return x;
		})
	}

	const secondary = (hexArray) => {
		return hexArray.map(function(x) {
		  	if (x == 6) return x+=1
		    if (x == 9) return x-=1
		    return x;
		})
	}
	
	const lookup = (hexArray) => {
		let strArray = hexArray.toString().replace(/,/g,'')
		if (hexArray.length == 0) return ''
		else  {
			for (let hex in HEXAGRAMS) {
				if (HEXAGRAMS[hex] == strArray) {
					return hex
				}
			}
		}
	}

	const getLink = (hexNumber) => {
		return 'http://www.jamesdekorne.com/GBCh/hex' + hexNumber + '.htm'
	}


const HEXAGRAMS = {
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
	14:	'777787',
	15:	'887888',
	16:	'888788',
	17:	'788778',
	18:	'877887',
	19:	'778888',
	20:	'888877',
	21:	'788787',
	22:	'787887',
	23:	'888887',
	24:	'788888',
	25:	'788777',
	26:	'777887',
	27:	'788887',
	28:	'877778',
	29:	'878878',
	30:	'787787',
	31:	'887778',
	32:	'877788',
	33:	'887777',
	34:	'777788',
	35:	'888787',
	36:	'787888',
	37:	'787877',
	38:	'778787',
	39:	'887878',
	40:	'878788',
	41:	'778887',
	42:	'788877',
	43:	'777778',
	44:	'877777',
	45:	'888778',
	46:	'877888',
	47:	'878778',
	48:	'877878',
	49:	'787778',
	50:	'877787',
	51:	'788788',
	52:	'887887',
	53:	'887877',
	54:	'778788',
	55:	'787788',
	56:	'887787',
	57:	'877877',
	58:	'778778',
	59:	'878877',
	60:	'778878',
	61:	'778877',
	62:	'887788',
	63:	'787878',
	64:	'878787',
};

	return {
		addLine,
		isComplete,
		primary,
		secondary,
		lookup,
		getLink
	}
}

export default Hex
