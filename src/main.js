import Hex from './hexagram.js'
import Draw from './draw.js'
import css from './main.css'

var hex = Hex()
var draw = Draw()

var hexarr = []
var result
var secondary
var link
var link2

// takes in an integer array of hexagram codes that the Hex library will operate on
export function update(arr, reset=false) {
	document.querySelector('#hexagram').innerHTML = draw.linesAsCss(arr);
	if (hex.isComplete(arr) || reset==true) {
		document.getElementById('reset').classList.add('fade')
		result = hex.lookup(hex.primary(arr))
		document.querySelector('#result').innerHTML = result
		link = 'http://www.jamesdekorne.com/GBCh/hex' + result + '.htm'
		if (result !== hex.lookup(hex.secondary(arr))) {
			document.getElementById('secondary').classList.add('fade')
			secondary = hex.lookup(hex.secondary(arr))
			document.querySelector('#result').innerHTML = result + " → " + secondary
			document.querySelector('#secondary').innerHTML = draw.linesAsCss(hex.secondary(arr))
			link2 = 'http://www.jamesdekorne.com/GBCh/hex' + secondary + '.htm'
		}
		if (reset==true) {
			document.getElementById('secondary').classList.remove('fade')
			document.getElementById('reset').classList.remove('fade')
			document.getElementById('hexagram').classList.remove('fade')
			hexarr = []
			document.getElementById('result').innerHTML = ''
		}
	}
}

window.addEventListener('load',
	function() {
		let cast = document.querySelector('.cast')
		let reset = document.getElementById('reset')
		let hexagram = document.getElementById('hexagram')
		let secondary = document.getElementById('secondary')

		cast.onclick = function() {
			hexarr = hex.addLine(hexarr)
			document.getElementById('hexagram').classList.add('fade')
			update(hexarr)
		}

		reset.onclick = function() {
			update(hexarr, true)
		}

		hexagram.onclick = function() {
			window.open(link)
		}

		secondary.onclick = function() {
			window.open(link2)
		}
	}
)

