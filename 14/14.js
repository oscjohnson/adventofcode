module.exports = function() {

	function parse(input) {
		var reindeers = [];
		var lines = input.split('\n');
		lines.forEach((line) => {
			var arr = line.split(' ')
			var reindeer = {
				name: arr[0],
				speed: parseInt(arr[3], 10),
				duration: parseInt(arr[6], 10),
				rest: parseInt(arr[13]),
				score: 0
			}
			reindeers.push(reindeer);
		})

		return reindeers;
	}

	function race(input, seconds) {
		var reindeers = parse(input);

		reindeers.forEach( (reindeer)=> {
			for (var i = 0; i <= seconds; i++) {
				var rest = i % (reindeer.duration + reindeer.rest);
				if (rest < reindeer.duration) {
					if (!reindeer.distance) reindeer.distance = 0;	
					reindeer.distance += reindeer.speed;
				}
			};
		})
		//console.log(reindeers)
		return sort(reindeers);
	}

	function sort(input) {
		return input.sort(function(a,b){return b.distance-a.distance;});
	}

	function step2(input, seconds) {
		var reindeers = parse(input);

		for (var i = 0; i <= seconds; i++) {
			reindeers.forEach( (reindeer)=> {
				var rest = i % (reindeer.duration + reindeer.rest);
				if (rest < reindeer.duration) {
					if (!reindeer.distance) reindeer.distance = 0;	
					reindeer.distance += reindeer.speed;
				}
			});
			var distance = sort(reindeers)[0].distance;
			reindeers.forEach(function(reindeer) {
				if (reindeer.distance == distance) reindeer.score++;
			})
		};

		return reindeers.sort(function(a,b){return b.score-a.score;});
	}

	return {
		parse: parse,
		race: race,
		step2: step2
	}
}