var _18 = require('./18.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('18 December part I', function() {
	it('Given adventofcode input should recieve expected output.', function() {
		var parse = _18().parse;
		var animator = _18().animatorGenerator;
		var log = _18().log;
		var input = [
			'.#.#.#',
			'...##.',
			'#....#',
			'..#...',
			'#.#..#',
			'####..'
		].join('\n');

		var expected1 = [
			'..##..',
			'..##.#',
			'...##.',
			'......',
			'#.....',
			'#.##..'
		].join('\n')
		var expected2 = [
			'..###.',
			'......',
			'..###.',
			'......',
			'.#....',
			'.#....'
		].join('\n')
		var expected3 = [
			'...#..',
			'......',
			'...#..',
			'..##..',
			'......',
			'......'
		].join('\n')
		var expected4 = [
			'......',
			'......',
			'..##..',
			'..##..',
			'......',
			'......'
		].join('\n')
		var config = parse(input);
		var animate = animator(config, 5)
		var step1 = animate.next();
		var step2 = animate.next();
		var step3 = animate.next();
		var step4 = animate.next();

		expect(step1.value).to.deep.equal(parse(expected1));
		expect(step2.value).to.deep.equal(parse(expected2));
		expect(step3.value).to.deep.equal(parse(expected3));
		expect(step4.value).to.deep.equal(parse(expected4));

	});
	
	it('Given adventofcode input should recieve expected output.', function() {
		var step1 = _18().step1;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		var res = step1(input);

		expect(res).to.equal(814);
		
	});

});


describe('18 December part II', function() {
	it('Given adventofcode input should recieve expected output.', function(done) {
		var step2 = _18().step2;

		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})
		var res = step2(input);

		expect(res).to.equal(924);
		done()
	});
});
