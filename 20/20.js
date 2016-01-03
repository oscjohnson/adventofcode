module.exports = function(options) {

		var houses = {}

	function example1(input) {
		var nEleves = 10, nHouses = 9;
		for (var house = 1; house <= nHouses; house++) {
			for (var elf = 1; elf <= nEleves; elf++) {
				if (!houses[house]) houses[house] = 0;
				if(house % elf == 0) {
					houses[house] += elf * 10;
				}
			};
		};

		return Object.keys(houses).map((house) => {
			return houses[house];
		}) 
	}

	function step1(input) {
		var presents = [];

		for (var elf = 1; elf < input / 10; elf++) {
			for (var house = elf; house < input / 10; house = house + elf) {
				if (!presents[house]) presents[house] = 0;
				
				presents[house] += elf * 10;
			};
		};

		for (var i = 0; i < presents.length; i++) {
			if (presents[i] >= input) return i;
		};
	}

	function step2(input) {
		var presents = [];
		for (var elf = 1; elf < input / 10; elf++) {
			var visits = 0;
			for (var house = elf; house < input / 10; house += elf) {
				if(visits > 50) continue;
				
				if (!presents[house]) presents[house] = 11;
				presents[house] += elf * 11;

				visits++;
			};
		};

		for (var i = 0; i < presents.length; i++) {
			if (presents[i] >= input) return i;
		};
	}

	return {
		example1: example1,
		step1: step1,
		step2: step2
	}
}