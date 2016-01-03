var _21 = require('./21.js');
var fs = require('fs');
var expect = require('chai').expect;

describe('21 December part I', function() {
	it('Expect given certain input that player wins.', function() {
		var fight = _21().fight;
		var boss = {
			hp: 12,
			damage: 7,
			armor: 2
		};
		var player = {
			hp: 8,
			damage: 5,
			armor: 5
		};

		var win = fight(player, boss);

		expect(win).to.equal(true);
	});

	it('Given adventofcode input should recieve correct output.', function() {
		var step1 = _21().step1;

		var res = step1();

		expect(res).to.equal(111);
	});	
});

describe('21 December part II', function() {

	it('Given adventofcode input should recieve correct output.', function() {
		var step2 = _21().step2;

		var res = step2();

		expect(res).to.equal(188);
	});	
});

