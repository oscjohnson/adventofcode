var _19 = require('./19.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('19 December part I', function() {
	it('With input HOH and 3 rules should have 4 unique molecules', function() {
		var calibrate = _19().calibrate;
		var rules = [
			'H => HO',
			'H => OH',
			'O => HH'
		]
		var input = 'HOH'
		var res = calibrate(input, rules);
		
		var expected = [
			'HOOH',
			'HOHO',
			'OHOH',
			'HHHH',
		];
		expect(res).to.include.members(expected);
		expect(res.length).to.equal(expected.length);
	});

	it('With input HOHOHO and 3 rules should have 7 unique molecules', function() {
		var calibrate = _19().calibrate;
		var rules = [
			'H => HO',
			'H => OH',
			'O => HH'
		]
		var input = 'HOHOHO'
		var res = calibrate(input, rules);
		
		expect(res.length).to.equal(7);
	});

	it('Given adventofcode input should recieve correct output.', function() {
		var step1 = _19().step1;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		var res = step1(input);
		
		expect(res).to.equal(576);
	});
});

describe('19 December part II', function() {
	it('If you\'d like to make HOH it should take three steps', function() {
		var fabricate = _19().fabricate;
		var rules = [
		'e => H',
		'e => O',
		'H => HO',
		'H => OH',
		'O => HH',
		];
		var wanted = 'HOH';
		var res = fabricate(wanted, rules);
		expect(res).to.equal(3);
	});

	it('If you\'d like to make HOHOHO it should take six steps', function() {
		var fabricate = _19().fabricate;
		var rules = [
		'e => H',
		'e => O',
		'H => HO',
		'H => OH',
		'O => HH',
		];
		var wanted = 'HOHOHO';
		var res = fabricate(wanted, rules);
		expect(res).to.equal(6);
	});

	it('Given adventofcode input should recieve correct output.', function() {
		var step2 = _19().step2;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		var res = step2(input);
		
		expect(res).to.equal(207);
	});
});
