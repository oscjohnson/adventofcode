var _11 = require('./11.js');
var expect = require('chai').expect;

describe('11 December part I', function(){
	it('Passwords may not contain the letters i, o, or l, as these letters can be mistaken for other characters and are therefore confusing.', function(){
		var validator = _11().validator;

		var res1 = validator('i');
		var res2 = validator('o');
		var res3 = validator('l');

		expect(res1).to.equal(false);
		expect(res2).to.equal(false);
		expect(res3).to.equal(false);
	})
	it('Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.', function(){
		var validator = _11().validator;
	
		var res1 = validator('zzaaabc');
		var res2 = validator('zzaa');

		expect(res1).to.equal(true);
		expect(res2).to.equal(false);
	})
	
	it('Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz. They cannot skip letters; abd doesn\'t count.', function(){
		var validator = _11().validator;
	
		var res = validator('zzccabc');

		expect(res).to.equal(true);
	})

	it('The string "az" should increase to "ba" ', function(){
		var increase = _11().increase;
	
		var res = increase('az');

		expect(res).to.equal('ba');
	})

	it('Given adventofcode input should recieve the correct output', function(){
		var nextPassword = _11().nextPassword;
	
		var res = nextPassword('hepxcrrq');

		expect(res).to.equal('hepxxyzz');
	})
	
})

describe('11 December part I', function(){
	it('Given adventofcode input should recieve the correct output', function(){
		var nextPassword = _11().nextPassword;
	
		var res = nextPassword('hepxxyzz');

		expect(res).to.equal('heqaabcc');
	})
})
