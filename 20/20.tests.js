var _20 = require('./20.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('20 December part I', function() {
	it('The algoritm should increase in expected pattern.', function() {
		var example1 = _20().example1;

		var res = example1();

		var expected = [10,30,40,70,60,120,80,150,130];
		expect(res).to.deep.equal(expected);
	});

	it('Given adventofcode input should recieve correct output.', function(done) {
		var step1 = _20().step1;

		var res = step1(29000000);

		expect(res).to.equal(665280);
		done()
	});
});



describe('20 December part II', function() {
	it('Given adventofcode input should recieve correct output.', function(done) {
		var step2 = _20().step2;

		var res = step2(29000000);

		expect(res).to.equal(705600);
		done()
	});
});