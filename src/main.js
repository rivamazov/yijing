import Hex from './hexagram.js'
import Draw from './draw.js'
import css from './main.css'

var hex = Hex()
var draw = Draw()

var hexarr = []

// takes in an array called hex that the Hex library will operate on
export function update(arr, reset=false) {
	// document.querySelector('#lines').innerHTML = draw.linesAsDecimal(arr)
	document.querySelector('#hexagram').innerHTML = draw.linesAsCss(arr);

	if (hex.isComplete(arr) || reset==true) {
		document.querySelector('#result').innerHTML = hex.lookup(hex.primary(arr));
		if (hexarr.toString() !== hex.secondary(hexarr).toString() || reset==true) {
			console.log('conditional is ' + (hexarr.toString() == hex.secondary(hexarr).toString()))
			console.log('hexarrsec' + hex.secondary(hexarr))
			console.log(reset)
			document.querySelector('#primary').innerHTML = draw.linesAsCss(hex.primary(arr));
			document.querySelector('#secondary').innerHTML = draw.linesAsCss(hex.secondary(arr));
			document.querySelector('#primary-result').innerHTML = hex.lookup(hex.primary(arr))
			document.querySelector('#secondary-result').innerHTML = hex.lookup(hex.secondary(arr))
		}
	}
}

window.addEventListener('load',
	function() {
		let cast = document.getElementById('cast');
		let reset = document.getElementById('reset');
		let hexagram = document.getElementById('hexagram');
		let result = document.getElementById('result');

		cast.onclick = function() {
			hexarr = hex.addLine(hexarr)
			update(hexarr)
		}

		reset.onclick = function() {
			hexarr = []
			update(hexarr, true)
		}
	})