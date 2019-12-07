import Hex from './hexagram.js'
import Draw from './draw.js'
import css from './main.css'

var hex = Hex()
var draw = Draw()

var hexarr = []

// takes in an integer array of hexagram codes that the Hex library will operate on
export function update(arr) {
	primary.innerHTML = draw.linesAsCss(arr);
	if (hex.isComplete(arr)) {
		result.innerHTML = hex.lookup(hex.primary(arr))
		// if there are changing lines
		if (hexarr.includes(6) || hexarr.includes(9)) {
			result.innerHTML += " → " + hex.lookup(hex.secondary(arr))
			secondary.innerHTML = draw.linesAsCss(hex.secondary(arr))
			secondary.classList.remove('hide-display')
			secondary.classList.add('fade')
		}

	cast.classList.add('hide-display')
	reset.classList.remove('hide-display')
	}
}

window.addEventListener('load',
	function() {
		let cast = document.getElementById('cast')
		let primary = document.getElementById('primary')
		let secondary = document.getElementById('secondary')
		let reset = document.getElementById('reset')
		let result = document.getElementById('result')

		cast.onclick = function() {
			hexarr = hex.addLine(hexarr)
			primary.classList.add('fade')
			update(hexarr)
		}

		primary.onclick = function() {
			window.open(hex.getLink(hex.lookup(hex.primary(hexarr))))
		}

		secondary.onclick = function() {
			window.open(hex.getLink(hex.lookup(hex.secondary(hexarr))))
		}

		reset.onclick = function() {
			//secondary.classList.toggle('fade')
			//reset.classList.toggle('fade')
			//primary.classList.toggle('fade')
			hexarr = []
			result.innerHTML = ''
			primary.innerHTML = ''
			secondary.classList.add('hide-display')
			reset.classList.add('hide-display')
			cast.classList.remove('hide-display')
		}
	}
)


