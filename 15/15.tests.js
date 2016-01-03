var _15 = require('./15.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('15 December part I', function() {
	it('When moving to right should increase present count to 1 at both prev location and new location', function() {
		var bake = _15().bake;
		var parse = _15().parse;

		var input = [
		'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
		'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
		].join('\n');

		var distributions = [
			{
				name: 'butterscotch',
				teaspoons: 44
			},
			{
				name: 'cinnamon',
				teaspoons: 56
			}
		]

		var res = bake(parse(input), distributions);

		expect(res).to.equal(62842880);
	});
	
	it('Given adventofcode input should recieve expected output.', function() {
		var find = _15().find;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var res = find(input);

		expect(res).to.equal(222870);
	});
});

describe('15 December part II', function() {
	it('Given 40 teaspoons of butterscotch and 60 teaspoons of cinnamon should receive expected output', function() {

		var bake = _15().bake;
		var parse = _15().parse;
		var input = [
		'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
		'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
		].join('\n');

		var distributions = [
			{
				name: 'butterscotch',
				teaspoons: 40
			},
			{
				name: 'cinnamon',
				teaspoons: 60
			}
		]
		var res = bake(parse(input), distributions);

		expect(res).to.equal(57600000);
	});
	
	it('Given adventofcode input should recieve expected output.', function() {
		var find = _15({isPart2: true}).find;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var res = find(input);

		expect(res).to.equal(117936);
	});
});

