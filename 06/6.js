module.exports = function(options) {

	var grid = initGrid([options.gridSize, options.gridSize]);
	var part2 = options.part2 || false;
	
	function initGrid(dimensions) {
	    var array = [];

	    for (var i = 0; i < dimensions[0]; ++i) {
	        array.push(dimensions.length == 1 ? 0 : initGrid(dimensions.slice(1)));
	    }

	    return array;
	}

	function loop(input) {
		var lines = input.split('\n');
		var i = 0;
		while (i < lines.length) {
			var line = lines[i];
			executeInstructions(line)
			i++;
		}

	}

	function executeInstructions(input) {
		var options = parse(input);
		var range = options.range;
		var instruction = options.instruction;

		if (instruction == 'turn on') turnOn(range); 
		if (instruction == 'turn off') turnOff(range); 
		if (instruction == 'toggle') toggle(range); 

		return grid;
	}

	function turnOn(range) {
		for (var i = range.start.x; i <= range.stop.x; i++) {
			for (var j = range.start.y; j <= range.stop.y; j++) {
				if (part2) {
					grid[i][j]++;
				}
				else {
					grid[i][j] = 1;
				}
			};
		};
	}

	function turnOff(range) {
		for (var i = range.start.x; i <= range.stop.x; i++) {
			for (var j = range.start.y; j <= range.stop.y; j++) {
				if (part2) {
					if (grid[i][j] > 0) grid[i][j]--;
				}
				else {
					grid[i][j] = 0;
				}
			};
		};
	}

	function toggle(range) {
		for (var i = range.start.x; i <= range.stop.x; i++) {
			for (var j = range.start.y; j <= range.stop.y; j++) {
				if (part2) {
					grid[i][j] += 2;
				}
				else {
					grid[i][j] = (grid[i][j] == 1) ? 0 : 1;
				}
			};
		};
	}

	function parse(input) {
		var instructions = ['turn on', 'turn off', 'toggle'];
		
		var instruction = instructions.find(function(instruction) {
			return (input.indexOf(instruction) != -1);
		});

		input = input.substr((instruction + " ").length);
		var ranges = input.split('through');

		var start = {}, stop = {};
		start.x = parseInt(ranges[0].split(',')[0], 10);
		start.y = parseInt(ranges[0].split(',')[1], 10);
		stop.x = parseInt(ranges[1].split(',')[0], 10);
		stop.y = parseInt(ranges[1].split(',')[1], 10);

		return {
			instruction: instruction,
			range: {start: start, stop: stop}
		}
	}

	function getCount () {
		var counter = 0;

		for (var i = 0; i < grid.length; i++) {
			for (var j = 0; j < grid[i].length; j++) {
				if (part2) {
					counter += grid[i][j];
				}
				else {
					if (grid[i][j] == 1) counter++;
				}
			};
		};

		return counter;
	}

	return {
		executeInstructions: executeInstructions,
		getCount: getCount,
		loop: loop
	}
};
