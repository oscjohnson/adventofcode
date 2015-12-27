var _10 = require('./10.js');
var expect = require('chai').expect;

describe('10 December part I', function(){
	it('1 becomes 11 (1 copy of digit 1).', function(){
		var counter = _10().counter;

		var result = counter('1');

		expect(result).to.equal('11')
	})
	
	it('11 becomes 21 (2 copies of digit 1).', function(){
		var counter = _10().counter;

		var result = counter('11');

		expect(result).to.equal('21')
	})
	
	it('21 is read off as "one 2, then one 1" or 1211.', function(){
		var counter = _10().counter;

		var result = counter('21');

		expect(result).to.equal('1211')
	})

	it('1211 becomes 111221 (one 1, one 2, and two 1s).', function(){
		var counter = _10().counter;

		var result = counter('1211');

		expect(result).to.equal('111221')
	})

	it('111221 becomes 312211 (three 1s, two 2s, and one 1).', function(){
		var counter = _10().counter;

		var result = counter('111221');

		expect(result).to.equal('312211')
	})

	it('Given adventofcode input should recieve correct output', function(){
		var step1 = _10().step1;

		var result = step1('1113222113');

		expect(result).to.equal(252594)
	})
})

describe('10 December part II', function(){
	it('Given adventofcode input should recieve correct output', function(done){
		var step2 = _10().step2;

		var result = step2('1113222113');

		expect(result).to.equal(3579328)
		done();
	})
})
