import Hex from './hexagram.js'
import Draw from './draw.js'
import css from './main.css'

var hex = Hex()
var draw = Draw()

var hexarr = []

// takes in an integer array of hexagram codes that the Hex library will operate on
export function update(arr, reset=false) {
	document.querySelector('#hexagram').innerHTML = draw.linesAsCss(arr);
	if (hex.isComplete(arr) || reset==true) {
		document.querySelector('#result').innerHTML = hex.lookup(hex.primary(arr))
		if (hexarr.toString() !== hex.secondary(hexarr).toString() || reset==true) {
			document.querySelector('#primary').innerHTML = draw.linesAsCss(hex.primary(arr))
			document.querySelector('#secondary').innerHTML = draw.linesAsCss(hex.secondary(arr))
			document.querySelector('#primary-result').innerHTML = hex.lookup(hex.primary(arr))
			document.querySelector('#secondary-result').innerHTML = hex.lookup(hex.secondary(arr))
			document.querySelector('#changingvisual').style.visibility = 'visible'
			if (reset==true) {
				document.querySelector('#changingvisual').style.visibility = 'hidden'
			}

		}
	}
}

window.addEventListener('load',
	function() {
		let cast = document.getElementById('cast')
		let reset = document.getElementById('reset')
		let hexagram = document.getElementById('hexagram')
		let help = document.getElementById('help')
		let mainvisual = document.getElementById('mainvisual')

		mainvisual.onclick = function() {
			if (hex.isComplete(hexarr)) {
				let alertmsg = document.createElement('div');
				alertmsg.className = "alert alert-warning"
				alertmsg.innerHTML = `<button type="button" class="close" data-dismiss="alert"`
										+ `aria-label="Close"><span aria-hidden="true">&times;</span></button>`
				//document.getElementById('alert').insertAdjacentElement('beforebegin', alertmsg)
				setTimeout(() => alertmsg.remove(), 1000);
			}
			hexarr = hex.addLine(hexarr)
			update(hexarr)
		}

		reset.onclick = function() {
			hexarr = []
			update(hexarr, true)
		}

		hexagram.onclick = function() {
		}
	}
)

document.addEventListener( 'dblclick', function(event) {  
    //alert("Double-click disabled!");  
    event.preventDefault();  
    event.stopPropagation(); 
  },  true //capturing phase!!
);
