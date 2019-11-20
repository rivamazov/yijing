import Hex from './hexagram.js'
import Draw from './draw.js'
import css from './main.css'

var hex = Hex()
var draw = Draw()

var hexarr = []

// takes in an array called hex that the Hex library will operate on
export function update(arr) {
	document.querySelector('#lines').innerHTML = draw.linesAsDecimal(arr)
	document.querySelector('#hexagram').innerHTML = draw.linesAsCss(arr);
	document.querySelector('#result').innerHTML = '';
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
			update(hexarr)
		}

	})

window.addEventListener('load',
	function() {

	}
)