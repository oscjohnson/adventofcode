module.exports = function(options) {
	var options = options || {};
	var wires = options.wires || {};

	function loop(input) {
		var lines = input.split('\n');
		var pending = [];
		var i = 0;

		while(i < lines.length) {
			var line = lines[i];
			if (!execute(line)) pending.push(line);

			i++;
		}
		if(pending.length > 0) return loop(pending.join('\n'))
		return wires;
	}

	function execute(input) {

		var instructions = input.split(' -> ');
		var dest = instructions[1];
		var value;

		var expression = instructions[0].split(' ');

		var op, left, right;

		if (expression.length == 3) {
			op = expression[1];
			var a = expression[0];
			var b = expression[2];
			left = (isNumber(a)) ? toUint16(a) : wires[a];
			right = (isNumber(b)) ? toUint16(b) : wires[b];

			if (left === undefined || right === undefined) return false;
		}
		else if (expression.length == 2) {
			op = expression[0];
			var b = expression[1]
			var right = (isNumber(b)) ? toUint16(b) : wires[b];			
			if(right === undefined) return false;
		}
		else if (expression.length == 1) {
			if (isNumber(expression[0])) {
				value = parseInt(expression[0]);
			}
			else {
				var index = expression[0];
				value = wires[index];
				if (value === undefined) return false;
			}
		}
		else {
			//unhandled case
		}

		if (op == 'AND') value = left & right;
		if (op == 'OR') value = left | right;
		if (op == 'LSHIFT') value = left << right;
		if (op == 'RSHIFT') value = left >> right;
		if (op == 'NOT') value = toUint16( ~ right);

		insert(dest, value);

		return wires;
	}

	function isNumber(i) { return /\d/.test(i); }

	function insert(dest, value) {
		wires[dest] = value;
	}

	function isNumber(input) {
		return /\d/.test(input);
	}

	/* HELPERS */

    function ToInteger(x) {
        x = Number(x);
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    }

    function modulo(a, b) {
        return a - Math.floor(a/b)*b;
    }
    function toUint16(x) {
        return modulo(ToInteger(x), Math.pow(2, 16));
    }

	return {	
		execute: execute,
		loop: loop
	}
}
