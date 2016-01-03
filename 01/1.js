
var move = function (input) {

	var i = 0;
	var counter = 0;

	while (i < input.length) {
		if (input[i] == '(') counter++;
		if (input[i] == ')') counter--;

		i++;
	}

	return counter;
}


var findBasement = function (input) {
	var level = 0;
	var i = 0;
	while (i < input.length && level != -1) {
		if (input[i] == '(') level++;
		if (input[i] == ')') level--;

		i++;
	}

	return i;
}


module.exports = {
	move: move,
	findBasement: findBasement
}