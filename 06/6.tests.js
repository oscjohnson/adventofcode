var _6 = require('./6.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('6 December star I', function() {
	it('turn on 0,0 through 2,2 in a 3x3 grid would turn on 4 lights.', function() {
		var input = 'turn on 0,0 through 1,1';
		var instance = _6({gridSize: 3});
		instance.executeInstructions(input);

		expect(instance.getCount()).to.equal(4);
	});
	
	it('turn on 0,0 through 999,999 would turn on (or leave on) every light.', function() {
		var input = 'turn on 0,0 through 999,999';
		var instance = _6({gridSize: 1000});
		instance.executeInstructions(input);
		expect(instance.getCount()).to.equal(1000 * 1000);

	});

	it('Given adventofcode input should get correct result', function() {
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
		var instance = _6({gridSize: 1000});
		instance.loop(input);
		expect(instance.getCount()).to.equal(400410);

	});
});

describe('6 December star II', function() {
	it('Given adventofcode input should get correct result', function() {

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
		var instance = _6({gridSize: 1000, part2: true});

		instance.loop(input);

		expect(instance.getCount()).to.equal(15343601);
	});

});