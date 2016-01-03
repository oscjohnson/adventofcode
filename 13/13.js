var permutations = require('../utils/permutations.js')

module.exports = function(options) {
	var options = options || {};
	var isPart2 = options.isPart2 || false;
	var people;

	function parse(input) {
		var people = {}
		
		var lines = input.split('\n');
		lines.forEach((line) => {
			var arr = line.split(/ would | happiness units by sitting next to |\s/)
			var person = arr[0];
			var sign = arr[1] == 'gain' ? 1 : -1;
			var happiness = arr[2];
			var neighbor = arr[3].replace('.', '');

			people[person] = people[person] || {};

			people[person][neighbor] = sign * happiness;
		})

		if (isPart2) addMe(people);

		return people;
	}

	function addMe(people) {
		people['Me'] = {}
		Object.keys(people).forEach((person) => {
			people['Me'][person] = 0;
			people[person]['Me'] = 0;
		})
	}

	function seatArrangement(input) {
		people = parse(input);
		
		var seatArrangements = permutations(Object.keys(people));
		var mostHappiness = 0;
		seatArrangements.forEach((arrangment) => {
			var happiness = getHappiness(arrangment);
			
			if (happiness > mostHappiness) mostHappiness = happiness; 
		})

		return mostHappiness;
	}

	function getHappiness(arrangment) {
		var happiness = 0;
		for (var i = 0; i < arrangment.length; i++) {
			var prev = arrangment[(i == 0) ? arrangment.length-1 : i-1];
			var next = arrangment[(i == arrangment.length-1) ? 0 : i+1];
			var person = arrangment[i];
			happiness += people[person][prev] + people[person][next];
		};

		return happiness;
	}

	return {
		parse: parse,
		seatArrangement: seatArrangement
	}
}