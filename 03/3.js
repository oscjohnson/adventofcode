module.exports = function () {

	var houses = {}
	var santaPosition = {
		x: 0,
		y: 0
	}
	var roboPosition = {
		x: 0,
		y: 0
	}

	// starting location always get one present
	houses[santaPosition.x + ':' + santaPosition.y] = 1;

	//TODO: rename to deliver?
	function moveSanta(input) {
		var i = 0;
		while(i < input.length) {
			//move to house
			if (input[i] == '>') santaPosition.x++;
			if (input[i] == '<') santaPosition.x--;
			if (input[i] == '^') santaPosition.y++;
			if (input[i] == 'v') santaPosition.y--;

			// increase present count
			var x = santaPosition.x;
			var y = santaPosition.y;
			(houses[x + ':' + y]) ? houses[x + ':' + y]++ : houses[x + ':' + y] = 1;
			
			i++;
		}
	}

	function houseAt(_x, _y) {
		return {
			presentCount: houses[_x + ':' + _y]
		}
	}

	function moveBoth(input) {
		var i = 0;
		while(i < input.length) {
			(i % 2 == 0) ? moveSanta(input[i]) : moveRobo(input[i])
			i++;
		}


	}

	function moveRobo(input) {
		var i = 0;
		while(i < input.length) {
			//move to house
			if (input[i] == '>') roboPosition.x++;
			if (input[i] == '<') roboPosition.x--;
			if (input[i] == '^') roboPosition.y++;
			if (input[i] == 'v') roboPosition.y--;

			// increase present count
			var x = roboPosition.x;
			var y = roboPosition.y;
			(houses[x + ':' + y]) ? houses[x + ':' + y]++ : houses[x + ':' + y] = 1;
			
			i++;
		}
	}

	//TODO: onePresentHouseCount
	function oneOrMorePresentsHouseCount() {
		var luckyChildren = 0;

		Object.keys(houses).forEach(function(key) {
			if (houses[key] > 0) luckyChildren++;	
		});

		return luckyChildren;
	}

	return {
		santaPosition: santaPosition,
		roboPosition: roboPosition,
		houseAt: houseAt,
		move: moveSanta,
		moveBoth: moveBoth,
		oneOrMorePresentsHouseCount: oneOrMorePresentsHouseCount
	};
}