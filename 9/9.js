//https://en.wikipedia.org/wiki/Travelling_salesman_problem
// O(n^2*2^n, n =28, = 210453397504 
// https://www.youtube.com/watch?v=AJYP34ror6M
module.exports = function () {

	function calculateFastestRoute(input) {
		var cities = getCities(input);

		var bestLength = 99999999;
		var perms = permutations(Object.keys(cities));

		for (route of perms) {
			var length = 0;

			for (var i = 0; i < route.length; i++) {
				if(i+1==route.length) break;
				var from = route[i];
				var to = route[i+1];
				length += cities[from][to];
			}

			if (length < bestLength) bestLength = length;
		}

		return bestLength;
	}

	function calculateLongestRoute(input) {
		var cities = getCities(input);

		var bestLength = 0;
		var perms = permutations(Object.keys(cities));

		for (route of perms) {
			var length = 0;

			for (var i = 0; i < route.length; i++) {
				if(i+1==route.length) break;
				var from = route[i];
				var to = route[i+1];
				length += cities[from][to];
			}

			if (length > bestLength) bestLength = length;
		}

		return bestLength;		
	}

	function getCities(input) {
		var lines = input.split('\n')
		var cities = {};
		for (line of lines) {
			var o = parse(line);

			if (!(o.from in cities)) cities[o.from] = {}
			if (!(o.to in cities)) cities[o.to] = {}

			if (!(o.to in cities[o.from])) {
				cities[o.from][o.to] = o.distance;
			}

			if (!(o.from in cities[o.to])) {
				cities[o.to][o.from] = o.distance;
			}
		}
		return cities;
	}
	
	function permutations(inputArr) {
		var results = [];

		function permute(arr, memo) {
			var cur, memo = memo || [];

			for (var i = 0; i < arr.length; i++) {
				cur = arr.splice(i, 1);
				if (arr.length === 0) {
					results.push(memo.concat(cur));
				}
				permute(arr.slice(), memo.concat(cur));
				arr.splice(i, 0, cur[0]);
			}

			return results;
		}

		 return permute(inputArr);
	}

	function parse(input) {
		var matches = input.match(/(\w*)\sto\s(\w*)\s=\s(\d*)/);

		return {
			from: matches[1], to: matches[2], distance: parseInt(matches[3])
		}
	}

	return {
		calculateFastestRoute: calculateFastestRoute,
		calculateLongestRoute: calculateLongestRoute
	}
}
