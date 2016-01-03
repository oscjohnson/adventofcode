var _4 = require('./4.js');
var assert = require('assert');
var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;


describe('4 December star I', function () {
	this.timeout(15000);
	it('If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.', function(done) {
		var mine = _4.mineLowest;
		var key = 'abcdef';
		expect(mine(key)).to.equal(609043)
		done();
	});

	it('If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....', function(done) {
		var mine = _4.mineLowest;
		var key = 'pqrstuv';
		expect(mine(key)).to.equal(1048970)
		done();
	});

	it('Given adventofcode input should recive correct output', function(done) {
		var mine = _4.mineLowest;
		var key = 'ckczppom';
		expect(mine(key)).to.equal(117946)
		done();
	});
	
});

describe('4 December star II', function () {
	this.timeout(25000);
	it('Given adventofcode input should recive correct output', function(done) {
		var mine = _4.mineLowest;
		var key = 'ckczppom';
		expect(mine(key, 6)).to.equal(3938038)
		done();
	});
})