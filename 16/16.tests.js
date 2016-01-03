var _16 = require('./16.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('16 December part I', function() {
	it('Given adventofcode input should recieve expected output.', function() {

		var parse = _16().parse;
		var find = _16().find;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

		var sue = {
			children: 3,
			cats: 7,
			samoyeds: 2,
			pomeranians: 3,
			akitas: 0,
			vizslas: 0,
			goldfish: 5,
			trees: 3,
			cars: 2,
			perfumes: 1,
		}


		var aunts = parse(input);

		var found = find(sue, aunts);

		var number = parseInt(found.name.split(' ')[1])
		expect(number).to.equal(103);
	});

});

describe('16 December part II', function() {
	it('Given adventofcode input should recieve expected output.', function() {
		var parse = _16().parse;
		var step2 = _16().step2;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
		var sue = {
			children: 3,
			cats: 7,
			samoyeds: 2,
			pomeranians: 3,
			akitas: 0,
			vizslas: 0,
			goldfish: 5,
			trees: 3,
			cars: 2,
			perfumes: 1,
		}
		var aunts = parse(input);

		var found = step2(sue, aunts);
		
		var number = parseInt(found.name.split(' ')[1])
		expect(number).to.equal(405);
	});

});