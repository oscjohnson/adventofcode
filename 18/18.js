module.exports = function(options) {
	var options = options || {};
	var isPart2 = options.isPart2 || false;

	function step1(input) {
		var data = parse(input);
		for (var i = 0; i < 100; i++) {
			data = animate(data);
		};

		var count = 0;
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[i].length; j++) {
				if(data[i][j]) count++;
			};

		};
		return count;
	}

	function step2(input) {
		isPart2 = true;
		var data = parse(input);
		turnOnCorners(data);

		for (var i = 0; i < 100; i++) {
			data = animate(data);
		};

		var count = 0;
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[i].length; j++) {
				if(data[i][j]) count++;
			};

		};
		return count;	
	}

	function* animatorGenerator(input, steps) {
		var data = input;
		for (var i = 0; i < steps; i++) {
			data = animate(data);
			yield data;
		};
	}

	function animate(lights) {
		var output = copy(lights);
		
		for (var i = 0; i < lights.length; i++) {
			for (var j = 0; j < lights[i].length; j++) {
				if (isPart2) {
					if (isCorner(lights, i,j)) continue;
				}

				var n = neighbors(lights, i, j);
				var sum = n.reduce((a,b) => {
					if(b) return ++a;
					else {
						if (a === true) return 1;
						if (a === false) return 0;
						return a;
					}
				})
				var on = lights[i][j];
				if (on) {
					if (sum !== 2 && sum !== 3) output[i][j] = false;
				}
				else {
					if (sum === 3) output[i][j] = true;

				}
			};
		};

		return output;
	}

	function turnOnCorners(lights) {
		lights[0][0] = true;
		lights[0][lights.length-1] = true;
		lights[lights.length-1][0] = true;
		lights[lights.length-1][lights.length-1] = true;
	}

	function isCorner(lights, i,j) {
		var topLeft = i == 0 && j == 0;
		var topRight = i == 0 && j == lights.length-1;
		var bottomLeft = i == lights.length-1 && j == 0;
		var bottomRight = i == lights.length-1 && j == lights.length-1;
		return  topLeft || topRight || bottomLeft || bottomRight;
	}

	function log(lights) {
		var out = "";
		for (var i = 0; i < lights.length; i++) {
			for (var j = 0; j < lights[i].length; j++) {
				out += (lights[i][j]) ? '#' : '.'
			};
			out += '\n'
		};
		console.log(out)
	}

	function neighbors(lights, x, y) {
		var startX = (x - 1 < 0) ? x : x-1;
		var startY = (y - 1 < 0) ? y : y-1;
		var endX =   (x + 1 > lights.length-1) ? x : x+1;
		var endY =   (y + 1 > lights.length-1) ? y : y+1;

		var n = [];
		for (var i=startX; i<=endX; i++) {
			for (var j=startY; j<=endY; j++) {
				if(i == x && j == y) continue;

				n.push(lights[i][j]);
		    }
		}

		return n;
	}

	function copy(input) {
		return input.map((arr) => {
			return arr.slice()
		})
	}

	function parse(input) {
		var lines = input.split('\n');
		var lights = [];

		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			lights.push([]);
			for (var j = 0; j < line.length; j++) {
				lights[i][j] = (line[j] === '#') ? true : false;
			};
		};

		return lights;
	}


	return {
		parse: parse,
		step1: step1,
		step2: step2,
		animatorGenerator: animatorGenerator,
		log: log,
	}
}