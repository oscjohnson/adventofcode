module.exports = function() {

	function step2(input) {
		return step(input, 50);
	}
	function step1(input) {
		return step(input, 40);
	}

	function step(input, steps) {
		var a = input;
		for (var i = 0; i < steps; i++) {
			a = counter(a);
		};

		return a.length;
	}

	function* gen(input) {
		yield counter(input)
	}

	function counter(input) {
		var count=0;
		var out ="";
		var i = 0;

		while (i < input.length) {
			var curr = input[i];
			var next = (i+1 !== input.length) ? input[i+1] : "";

			if (curr != next) {
				count++;
				out += count +""+ curr;
				count = 0;
			}
			else {
				count++;		
			}

			i++;
		}

		return out;
	}

	return {
		step1: step1,
		step2: step2,
		counter: counter,
		gen: gen
	};
}
