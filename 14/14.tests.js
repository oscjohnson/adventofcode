var _14 = require('./14.js');
var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;

describe('14 December part I', function() {
	it('Comet should win if the race was 1000 seconds, with a distance of 1120', function() {
		var race = _14().race;

		var input = [
				'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.',
				'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.'
				].join('\n');

		var reindeers = race(input, 1000);
		var winner = reindeers[0];
		var second = reindeers[1];

		expect(winner.distance).to.equal(1120)
		expect(winner.name).to.equal('Comet')

		expect(second.distance).to.equal(1056)
		expect(second.name).to.equal('Dancer')
	});

	it('Given adventofcode input should recieve correct output.', function() {
		var race = _14().race;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var reindeers = race(input, 2503);
		var winner = reindeers[0];
		expect(winner.distance).to.equal(2640)
		expect(winner.name).to.equal('Rudolph')
	});
});

describe('14 December part II', function() {
	it('Dancer should win if the race was 1000 seconds, with a score of 689', function() {
		var step2 = _14().step2;

		var input = [
				'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.',
				'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.'
				].join('\n');

		var reindeers = step2(input, 1000);
		var winner = reindeers[0];
		var second = reindeers[1];
		expect(winner.score).to.equal(689)
		expect(winner.name).to.equal('Dancer')

		//TODO: off by one error
		expect(second.score).to.equal(312)
		expect(second.name).to.equal('Comet')
	});

	it('Given adventofcode input should recieve correct output.', function() {
		var step2 = _14().step2;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var reindeers = step2(input, 2503);
		var winner = reindeers[0];
		expect(winner.score).to.equal(1102)
		expect(winner.name).to.equal('Donner')
	});
});