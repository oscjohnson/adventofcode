module.exports = function(options) {

	function step1(input) {
		var arr = input.split('\n\n');
		var rules = arr[0].split('\n');
		var input = arr[1];

		return calibrate(input, rules).length
	}

	function step2(input) {
		var arr = input.split('\n\n');
		var rules = arr[0].split('\n');
		var molecule = arr[1];

		return fabricate(molecule, rules);
	}
	
	function fabricate(molecule, rules) {
		var replacing = true;
		var steps = 0;
		var lookup = {};
		rules = rules.map((arr) => {
			var a = arr.split(' => ');
			lookup[a[1]] = a[0];

			return a[1];
		})

		var regexp = new RegExp('(' + rules.join('|') + ')', 'g');

		while (replacing) {
			replacing = false;
			molecule = molecule.replace(regexp, (match) => {
				replacing = true;
				steps++;

				return lookup[match];
			})
		}

		return steps;
	}

	function calibrate(molecule, rules) {
		var res = {};

		rules.forEach((rule) => {
			var arr = rule.split(' => ');
			var from = arr[0];
			var to = arr[1];

			var reg = new RegExp(from, 'g')

			var myArray;
			while ((myArray = reg.exec(molecule)) !== null) {
				var index = myArray.index;

				var s = replace({string: molecule, index: index, to: to, from: from});
				res[s] = true;
			}
		})
		
		return Object.keys(res);
	}

	function replace(options) {
		var index = options.index;
		var to = options.to;
		var from = options.from;
		var s = options.string;

		return s.substr(0, index) + to + s.substr(index + from.length);
	}


	return {
		fabricate: fabricate,
		calibrate: calibrate,
		step1: step1,
		step2: step2
	}
}