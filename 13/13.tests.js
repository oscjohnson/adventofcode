var _13 = require('./13.js');
var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;

describe('13 December part I', function() {
	it('Test data should yield a seating arrangement with 330 in happiness.', function() {
		var seatArrangement = _13().seatArrangement;

		var input = fs.readFileSync('./test_input.txt', {encoding: 'utf-8'})
		var res = seatArrangement(input);

		expect(res).to.equal(330);
	});

	it('Given adventofcode input should recieve expected output.', function() {
		var seatArrangement = _13().seatArrangement;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		var res = seatArrangement(input);

		expect(res).to.equal(664);
	});
});

describe('13 December part II', function() {
	it('Given adventofcode input should recieve expected output.', function(done) {
		var seatArrangement = _13({isPart2: true}).seatArrangement;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		var res = seatArrangement(input);

		expect(res).to.equal(640);
		done();
	});
});