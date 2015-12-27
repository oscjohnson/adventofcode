module.exports = function() {

	function validator(password) {
		return /[^oil]/.test(password) && hasDouble(password) && risingLetters(password);
	}	

	function hasDouble(input) {
		// TODO: better check (this is not deterministic)
		var arr =  input.match(/(.)\1/g);
		return (arr && arr.length >= 2 && arr[0] !== arr[1]);
	}

	function risingLetters(input) {
		for (var i = 1; i < input.length - 1; i++) {
			var prev = input.charCodeAt(i-1);
			var curr = input.charCodeAt(i);
			var next = input.charCodeAt(i+1);

			if ((prev + 1) == curr && (next-1) == curr) return true;
		};

		return false;
	}

	function increase(input) {
		var chars = input.split('');
		for (var i = chars.length - 1; i >= 0; i--) {
			if (chars[i] == 'z') {
				chars[i] = 'a';
			}
			else {
				var c = chars[i].codePointAt(0);
				c++;
				chars[i] = String.fromCharCode(c);
				break;
			}


		};

		return chars.join('');
	}

	function nextPassword(input) {
		var pw = input;
		pw = increase(pw);
		
		while (!validator(pw)) {
			pw = increase(pw);
		}
		return pw;
	}

	return {
		validator: validator,
		increase: increase,
		nextPassword: nextPassword
	};
}
