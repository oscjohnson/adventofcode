var giftwrap = require('./giftwrap.js');
var assert = require('assert');
var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;

describe('2 December part I', function() {
	var getWrap = giftwrap.wrapWithExtra;
	it('Given 2x3x4 should get a result of 58', function() {
		expect(getWrap(2,3,4)).to.equal(58)
	});

	it('Given 1x1x10 should get a result of 43', function() {
		expect(getWrap(1,1,10)).to.equal(43)
	});

	it('Given input in textfile format should deliver correct wrap size', function() {
		var factory = giftwrap.factory;
		var input = "1x1x3\n2x2x3";
		expect(factory(input)).to.equal(51)
	});

	it('Given input from adventofcode should deliver correct wrap size: 1588178', function() {
		var factory = giftwrap.factory;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		expect(factory(input)).to.equal(1588178)
	});

});

describe('2 December part II', function() {
	var ribbon = giftwrap.ribbon;
	it('Given 2x3x4 should get a ribbon of length 34', function() {
		expect(ribbon(2,3,4)).to.equal(34)
	});

	it('Given 1x1x10 should get a ribbon of length 14', function() {
		expect(ribbon(1,1,10)).to.equal(14)
	});

	it('Given input from adventofcode should deliver correct ribbon length', function() {
		var factory = giftwrap.factory;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		expect(factory(input, ribbon)).to.equal(3783758)
	});

});
