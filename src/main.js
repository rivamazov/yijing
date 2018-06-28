import { createHexagram } from './hexagram.js'
import { draw } from './draw.js'

let hex = createHexagram([6,7,8,9,9,9]);
let css = draw();



export function update(hexLines) {
	document.querySelector('#lines').innerHTML = hexLines;
	document.querySelector('#hexagram').innerHTML = css.hexagram(hex.getLines());
	document.querySelector('#result').innerHTML = '';
}

window.onload = function() {
	update(hex.getLines());
	document.getElementById('cast').onClick = function () {
		console.log('u clicked cast')
	}

	document.getElementById('reset').onClick = function () {
		console.log('u clicked reset')
	}
}
