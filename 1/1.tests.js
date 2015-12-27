var elevator = require('./1.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('1 December part I', function() {
	var move = elevator.move;
	it('Given ((() should be on floor 2', function() {
		expect(move('((()')).to.equal(2)
	});

	it('Given adventofcode input should be at floor 74', function() {
		var fs = require('fs');
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

		expect(move(input)).to.equal(74)
	});
});

describe('1 December part II', function() {
	var findBasement = elevator.findBasement;
	it('Given ((()))) should be in basement at counter 7', function() {
		expect(findBasement('((())))')).to.equal(7)
	});

	it('Given adventofcode input should be in basement at counter 1795', function() {
		var fs = require('fs');
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

		expect(findBasement(input)).to.equal(1795)
	});

});