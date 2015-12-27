module.exports = function (options) {
	var options = options || {};
	var ruleSet = options.ruleSet || 1;

	function nice(input) {
		if (ruleSet == 1) {
			if (containsIllegalStrings(input)) return false;
			if (!contains3Vowels(input)) return false;
			if (!oneLetterTwice(input)) return false;
		}
		if (ruleSet == 2) {
			if (!containsXYX(input)) return false;
			if (!containsXX(input)) return false;
		}

		return true;
	}

	function count(input) {
		var lines = input.split('\n');
		var counter =0;

		lines.forEach(function(line) {
			if (nice(line)) counter++;
		})

		return counter;
	}

	/* Part II rules */
	// (.).\1
	//
	function containsXYX(input) {
		return /(.).\1/.test(input);
	}

	function containsXX(input) {
		return /(..).*\1/.test(input);
	}

	/* Part I rules */

	function containsIllegalStrings(input) {
		return /(ab|cd|pq|xy)/.test(input);
	}

	function contains3Vowels(input) {
		var counter = 0, i = 0;
		while (i < input.length) {
			if ("aeiou".indexOf(input[i]) != -1) counter++;

			if (counter == 3) return true;
			i++;
		}

		return false;
	}

	function oneLetterTwice(input) {
		return /(.)\1/.test(input);
	}

	return {
		nice: nice,
		count: count
	};
}