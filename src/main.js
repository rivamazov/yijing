import createHexagram from './hexagram.js'
import draw from './draw.js'
import css from './main.css'

let hex = createHexagram([6,7,8,9,9,9]);
let drawcss = draw();

export function update(hexLines) {
	document.querySelector('#lines').innerHTML = hexLines;
	document.querySelector('#hexagram').innerHTML = drawcss.hexagram(hex.getLines());
	document.querySelector('#result').innerHTML = '';
}

window.onload = function() {

	update(hex.getLines());
	var el = document.getElementById('cast');
	el.onclick = function () {
		console.log('hello');
		alert('hey');
	}
	console.log(el);
}
