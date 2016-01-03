var _3 = require('./3.js');
var assert = require('assert');
var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;

describe('3 December part I', function() {
	it('When moving to right should increase present count to 1 at both prev location and new location', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var move = three.move;
		move('>');

		expect(houseAt(0,0).presentCount).to.equal(1);
		expect(houseAt(1,0).presentCount).to.equal(1);
	});

	it('When moving in circle should get correct count at each house', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var move = three.move;
		
		move('^>v<');

		expect(houseAt(0,0).presentCount).to.equal(2);
		expect(houseAt(0,1).presentCount).to.equal(1);
		expect(houseAt(1,1).presentCount).to.equal(1);
		expect(houseAt(1,0).presentCount).to.equal(1);
	});

	it('When moving up and down should only deliver to 2 housess', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var move = three.move;
		
		move('^v^v^v^v^v');

		expect(houseAt(0,0).presentCount).to.equal(6);
		expect(houseAt(0,1).presentCount).to.equal(5);

	});

	it('When moving in adventofcode input should get how many houses gets one present or more', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var move = three.move;
		var count = three.oneOrMorePresentsHouseCount;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

		move(input);

		expect(count()).to.equal(2565);

	});



});


describe('3 December part II', function() {


	it('When moving up and down should only deliver to 3 houses', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var count = three.oneOrMorePresentsHouseCount;
		var move = three.moveBoth;
		
		move('^v');

		expect(count()).to.equal(3);

	});

	it('^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var count = three.oneOrMorePresentsHouseCount;
		var move = three.moveBoth;
		
		move('^>v<');

		expect(count()).to.equal(3);

		expect(three.santaPosition).to.deep.equal({x:0, y: 0});
		expect(three.roboPosition).to.deep.equal({x:0, y: 0});
	});

	it('^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var count = three.oneOrMorePresentsHouseCount;
		var move = three.moveBoth;
		
		move('^v^v^v^v^v');

		expect(count()).to.equal(11);


	});

	it('When santa and robo-santa deliver presents, how many houses receive at least one present?', function() {
		var three = _3();
		var houseAt = three.houseAt;
		var count = three.oneOrMorePresentsHouseCount;
		var move = three.moveBoth;
		
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
		move(input);

		expect(count()).to.equal(2639);


	});

});

