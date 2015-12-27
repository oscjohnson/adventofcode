var _8 = require('./8.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('8 December star I', function(){
	it('Should handle the string: "vcqc" as input.', function(){
 		var execute = _8().execute;
 		var input = '"vcqc"';

 		var length = execute(input);

 		expect(length.memory).to.equal(4);
 		expect(length.code).to.equal(6);

	})

	it('Should handle the string: "aaa\\"aaa" as input.', function(){
 		var execute = _8().execute;
 		var input = String.raw`"aaa\"aaa"`;

 		var length = execute(input);

 		expect(length.memory).to.equal(7);
 		expect(length.code).to.equal(10);

	})

	it('Should handle strings: "mkno\\x43pcfdukmemycp" as input.', function(){
 		var execute = _8().execute;
 		var input = String.raw`"mkno\x43pcfdukmemycp"`;
 		var length = execute(input);

 		expect(length.memory).to.equal(16+1);
 		expect(length.code).to.equal(22);

	})

	it('Should handle strings: "mkno\\\\" as input.', function(){
 		var execute = _8().execute;
 		var input = String.raw`"mkno\\"`;
 		var length = execute(input);

 		expect(length.memory).to.equal(5);
 		expect(length.code).to.equal(8);

	})

	it('Should handle adventofcode input', function(){
 		var loop = _8().loop;
 		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
 		var res = loop(input);

 		expect(res).to.equal(1333);


	})
})

describe('8 December star I', function(){
	
	it.skip('"" encodes to "\\"\\"", an increase from 2 characters to 6.', function(){
 		var part2 = _8().part2;
 		var input = '""'
 		var res = part2(input);

 		expect(input.length).to.equal(2);
 		expect(res).to.equal('"\\\"\\\""');
 		expect(res.length).to.equal(6);


	})

	it('Should handle adventofcode input', function(){
 		var part2 = _8().part2;
 		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
 		var res = part2(input);

 		expect(res).to.equal(2046);


	})
})

