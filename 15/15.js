module.exports = function(options) {
	var options = options || {};
	var isPart2 = options.isPart2 || false;
	
	var ingredients;

	function parse(input) {
		var ingredients = {};
		var lines = input.split('\n');
		lines.forEach((line) => {
			var values = line.split(' ');
			var name = values[0].toLowerCase().replace(':', '');
			var ingredient = {
				name: name,
				capacity: parseInt(values[2]),
				durability: parseInt(values[4]),
				flavor: parseInt(values[6]),
				texture: parseInt(values[8]),
				calories: parseInt(values[10])
			}
			ingredients[name] = ingredient;
		})

		return ingredients;
	}

	function bake(ingredients, distributions) {
		if (isPart2) return step2(ingredients,distributions);

		var score = {
			capacity: 0,
			durability: 0,
			flavor: 0,
			texture: 0
		};

		Object.keys(score).forEach((key) => {
			var val = 0;
			distributions.forEach((distribution) => {
				var ingredient = ingredients[distribution.name];
				val += ingredient[key] * distribution.teaspoons;
			})
			score[key] += (val > 0) ? val : 0;
		})

		var values = [];
		Object.keys(score).forEach((key) => {
		    values.push(score[key]);
		})
		
		var tasty = values.reduce((a, b) => { return a*b;});

		return tasty;
	}

	function step2(ingredients, distributions) {
		var score = {
			capacity: 0,
			durability: 0,
			flavor: 0,
			texture: 0
		};

		var calories = 0;
		distributions.forEach((distribution) => {
			var ingredient = ingredients[distribution.name];
			calories += ingredient['calories'] * distribution.teaspoons;
		})

		Object.keys(score).forEach((key) => {
			var val = 0;
			distributions.forEach((distribution) => {
				var ingredient = ingredients[distribution.name];
				val += ingredient[key] * distribution.teaspoons;
			})
			score[key] += (val > 0) ? val : 0;
		})

		var values = [];
		Object.keys(score).forEach((key) => {
		    values.push(score[key]);
		})
		
		var tasty = values.reduce((a, b) => { return a*b;});

		return (calories === 500) ? tasty : 0;
	}

	function find(input) {
		ingredients = parse(input);

		var bestCake = 0;

		for (var i = 0; i <= 100; i++) {
			for (var j = 0; j <= 100; j++) {
				for (var k = 0; k <= 100; k++) {
					for (var l = 0; l <= 100; l++) {
						if (i+j+k+l == 100) {
								var keys = Object.keys(ingredients);
								var distributions = [
									{
										name: keys[0],
										teaspoons: i
									},
									{
										name: keys[1],
										teaspoons: j
									},
									{
										name: keys[2],
										teaspoons: k
									},
									{
										name: keys[3],
										teaspoons: l
									}
									]
							var cake = bake(ingredients, distributions)
							if (cake > bestCake) bestCake = cake;
						}
					};
				};
			};

		};
		return bestCake;
	}

	return {
		parse: parse,
		bake: bake,
		step2: step2,
		find: find
	};
}