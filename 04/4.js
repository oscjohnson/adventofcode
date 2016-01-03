var crypto = require('crypto');

function hasher(input) {
	return crypto.createHash('md5').update(input).digest("hex");
}

function mineLowest(key, zeroes) {
	var zeroes = zeroes || 5;
	var fiveZeroesFound = false;
	var counter = 0;
	var md5;
	var hex;
	while (!fiveZeroesFound) {
		counter++;

		md5 = (hasher(key + counter));

		var match = md5.match(new RegExp("^[0]{" + zeroes + "}.*", "m"));
		if (match) break;
	}

	return counter;
}


module.exports = {
	mineLowest: mineLowest
};