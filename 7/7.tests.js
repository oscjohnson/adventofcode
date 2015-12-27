var _7 = require('./7.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('6 December star I', function() {
	it('Should insert to a value in a destination', function() {
		var execute = _7().execute;
		
		var res = execute('123 -> x');

		expect(res.x).equal(123);
	})

	it('Should handle AND operation', function() {
		var execute = _7({wires: {x: 123, y: 456}}).execute;
		
		var res = execute('x AND y -> d');

		expect(res.d).equal(72);
	})

	it('Should handle OR operation', function() {
		var execute = _7({wires: {x: 123, y: 456}}).execute;
		
		var res = execute('x OR y -> e');

		expect(res.e).equal(507);
	})

	it('Should handle LSHIFT operation', function() {
		var execute = _7({wires: {x: 123, y: 456}}).execute;
		
		var res = execute('x LSHIFT 2 -> f');

		expect(res.f).equal(492);
	})

	it('Should handle RSHIFT operation', function() {
		var execute = _7({wires: {x: 123, y: 456}}).execute;
		
		var res = execute('y RSHIFT 2 -> g');

		expect(res.g).equal(114);
	})

	it('Should handle NOT operation', function() {
		var execute = _7({wires: {x: 123, y: 456}}).execute;
		
		var res = execute('NOT x -> h');

		expect(res.h).equal(65412);
	})
	
	it('Should handle NOT operation', function() {
		var execute = _7({wires: {x: 123, y: 456}}).execute;
		
		var res = execute('NOT y -> i');

		expect(res.i).equal(65079);
	})

	it('Should handle digit assignment to wire', function() {
		var execute = _7().execute;
		
		var res = execute('1674 -> b');

		expect(res.b).equal(1674);
	})

	it('Should handle AND operator with digit (instead of wire)', function() {
		var execute = _7({wires: {ke: 123}}).execute;
		
		var res = execute('1 AND ke -> kf');

		expect(res.kf).equal(1);
	})

	it('Should handle out of order processed wires', function() {
		var loop = _7().loop;
		var input = [
		'123 -> x',
		'456 -> y',
		'x AND y -> d',
		'f OR y -> e',
		'x LSHIFT 2 -> f'
		].join('\n')
		var res = loop(input);

		expect(res).deep.equal({
			x: 123,
			y: 456,
			d: 72,
			f: 492,
			e: 492
		});
	})
	it('When given adventofcode input should recieve correct result', function() {
		var loop = _7().loop;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
		var res = loop(input);

		expect(res.a).equal(46065);
	});
})

describe('6 December star II', function() {
	it('When given adventofcode input should recieve correct result', function() {
		var loop = _7().loop;
		var input = fs.readFileSync('./input2.txt', {encoding: 'utf-8'});
		var res = loop(input);

		expect(res.a).equal(14134);
	});
});











