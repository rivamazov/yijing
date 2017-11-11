// data structure to create I Ching hexagrams
var hexagram = {
	lines: [],
	primary: [],
	secondary: [],
	primaryStr: "",
	secondaryStr: "",
	text: "",
	arr: [6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9],
	ischanging: false,

	// shuffle array and insert a hexagram line up to a
	// maximum of six lines.
	// TODO: make this create two 
	cast() {
		let count = this.arr.length;
		while (count > 0) {
			let i = Math.floor(Math.random() * count);
			count--;
			let tmp = this.arr[count];
			this.arr[count] = this.arr[i];
			this.arr[i] = tmp;
		}
		  this.lines.push(this.arr[0]);
	}, 
	// creates primary and secondary hexagram arrays
	// (if there are changing lines)hh
	dochanging() {
		for (line in this.lines) {
			if (this.lines[line] == 6) {
				this.primary.push(8);
				this.secondary.push(7);
			}
			else if (this.lines[line] == 9) {
				this.primary.push(7);
				this.secondary.push(8);
			}
			else {
				(this.primary.push(this.lines[line]));
				(this.secondary.push(this.lines[line]));
			}
		}
	},
	// returns boolean of whether or not there
	// are changing lines
	checkchanging() {
		for (line in this.lines) {
			if (this.lines[line] == 6 || this.lines[line] == 9) {
				this.ischanging = true;
				return;
			}
		}
	},

	decipher(hex) {
		tmp = "";
		for (line in hex) {
			tmp += this.arr[line];
		}
		console.log(tmp);
	},

	dict: {
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
		64:	'878787'
	}
}




