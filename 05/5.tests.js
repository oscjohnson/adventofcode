var _5 = require('./5.js');
var expect= require('chai').expect;
var fs = require('fs');

describe('5 December star I', function() {
	this.timeout(0)
	var nice, count;

	before(function() {
		var instance = _5();
		nice = instance.nice;
		count = instance.count;
	})

	it('ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.', function() {
		
		expect(nice('ugknbfddgicrmopn')).to.equal(true);
	});

	it('aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.', function() {
		
		expect(nice('aaa')).to.equal(true);
	});

	it('jchzalrnumimnmhp is naughty because it has no double letter', function() {
		
		expect(nice('jchzalrnumimnmhp')).to.equal(false);
	});

	it('haegwjzuvuyypxyu is naughty because it contains the string xy.', function() {
		
		expect(nice('haegwjzuvuyypxyu')).to.equal(false);
	});

	it('dvszwmarrgswjxmb is naughty because it contains only one vowel.', function() {
		
		expect(nice('dvszwmarrgswjxmb')).to.equal(false);
	});

	it('Given 3 nice and 2 naughty strings should get a count of 3', function() {
		var input = [
			"ugknbfddgicrmopn",
			"aaiuiui",
			"iuiuii",
			"dvszwmarrgswjxmb",
			"haegwjzuvuyypxyu",
		].join('\n');

		expect(count(input)).to.equal(3);
	});

	it('Given adventofcode input should recive correct output', function() {
		var input = fs.readFileSync('./input.txt', {encoding: "utf-8"});

		expect(count(input)).to.equal(236);
	});
});


describe('5 December star II', function() {
	this.timeout(0)
	var nice, count;

	before(function() {
		var instance = _5({ruleSet: 2});
		nice = instance.nice;
		count = instance.count;
	})

	it('qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).', function() {
		expect(nice('qjhvhtzxzqqjkmpb')).to.equal(true);
	});

	it('xxyxx is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.', function() {
		expect(nice('xxyxx')).to.equal(true);
	});
	
	it('uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat with a single letter between them.', function() {
		expect(nice('uurcxstgmygtbstg')).to.equal(false);
	});
	
	it('ieodomkazucvgmuy is naughty because it has a repeating letter with one between (odo), but no pair that appears twice.', function() {
		expect(nice('ieodomkazucvgmuy')).to.equal(false);
	});

	it('Given adventofcode input should recive correct output', function() {
		var input = fs.readFileSync('./input.txt', {encoding: "utf-8"});

		expect(count(input)).to.equal(51);
	});
});

