var fs = require('fs');
var expect = require('chai').expect;
var _12 = require('./12.js');

describe('12 December part I', function () {
	it('[1,2,3] and {"a":2,"b":4} both have a sum of 6.', function () {
		var sum = _12().sum;

		var res1 = sum([1,2,3]);
		var res2 = sum({a: 2, b:4});

		expect(res1).to.equal(6);
		expect(res2).to.equal(6);
	})

	it('[[[3]]] and {"a":{"b":4},"c":-1} both have a sum of 3.', function () {
		var sum = _12().sum;

		var res1 = sum([[[3]]]);
		var res2 = sum({"a":{"b":4},"c":-1});

		expect(res1).to.equal(3);
		expect(res2).to.equal(3);
	})

	it('{"a":[-1,1]} and [-1,{"a":1}] both have a sum of 0.', function () {
		var sum = _12().sum;

		var res1 = sum({a:[-1,1]});
		var res2 = sum([-1,{a:1}] );

		expect(res1).to.equal(0);
		expect(res2).to.equal(0);
	})

	it('[] and {} both have a sum of 0.', function () {
		var sum = _12().sum;

		var res1 = sum([]);
		var res2 = sum({});

		expect(res1).to.equal(0);
		expect(res2).to.equal(0);
	})

	it('Given adventofcode input should recieve correct output', function () {
		var sum = _12().sum;
		var file = fs.readFileSync('./input.json', {encoding: 'utf-8'})
		var input = JSON.parse(file);
		var res = sum(input)

		expect(res).to.equal(156366);
	})
})


describe('12 December part II', function () {
	it('[1,{"c":"red","b":2},3] now has a sum of 4, because the middle object is ignored.', function () {
		var sum = _12({isPart2: true}).sum;

		var res = sum([1, {c: "red", b: 2}, 3]);

		expect(res).to.equal(4);
	})

	it('{"d":"red","e":[1,2,3,4],"f":5} now has a sum of 0, because the entire structure is ignored.', function () {
		var sum = _12({isPart2: true}).sum;

		var res = sum({d:"red", e:[1,2,3,4], f:5});

		expect(res).to.equal(0);
	})

	it('[1,"red",5] has a sum of 6, because "red" in an array has no effect.', function () {
		var sum = _12({isPart2: true}).sum;

		var res = sum([1, "red", 5]);

		expect(res).to.equal(6);
	})

	it('Given adventofcode input should recieve correct output', function () {
		var sum = _12({isPart2: true}).sum;
		var file = fs.readFileSync('./input.json', {encoding: 'utf-8'})
		var input = JSON.parse(file);
		var res = sum(input)

		expect(res).to.equal(96852);
	})	
})
