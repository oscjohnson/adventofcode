var _17 = require('./17.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('17 December part I', function() {
	it('Given adventofcode input should recieve expected output.', function() {
		var step1 = _17().step1;
		var input = [
			'20',
			'15',
			'10',
			'5',
			'5'
		].join('\n');

		var res = step1(input, 25);

		expect(res).to.deep.equal([ [ 15, 10 ], [ 20, 5 ], [ 20, 5 ], [ 15, 5, 5 ] ]);
	});

	it('Given adventofcode input should recieve expected output.', function() {
		var step1 = _17().step1;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var res = step1(input, 150);

		expect(res.length).to.equal(654);
	});
});

describe('17 December part II', function() {
	it('Given adventofcode input should recieve expected output.', function() {
		var step2 = _17().step2;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var res = step2(input, 150);

		expect(res.length).to.equal(57);
	});

});
