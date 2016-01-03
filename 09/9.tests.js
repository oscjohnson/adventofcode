var _9 = require('./9.js'); 
var expect = require('chai').expect;
var fs = require('fs');

describe('9 December part I', function() {
	it('London -> Dublin -> Belfast = 605', function() {
		var calculateFastestRoute = _9().calculateFastestRoute;
		var input = [
			'London to Dublin = 464',
			'London to Belfast = 518',
			'Dublin to Belfast = 141'
			].join('\n');
		var fastestRoute = calculateFastestRoute(input);

		expect(fastestRoute).to.equal(605);
		
	})

	it('Given adventocode input should recieve correct output', function() {
		var calculateFastestRoute = _9().calculateFastestRoute;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var fastestRoute = calculateFastestRoute(input);

		expect(fastestRoute).to.equal(207);
		
	})
})


describe('9 December part II', function() {
	it('Dublin -> London -> Belfast = 982', function() {
		var calculateLongestRoute = _9().calculateLongestRoute;
		var input = [
			'London to Dublin = 464',
			'London to Belfast = 518',
			'Dublin to Belfast = 141'
			].join('\n');
		var fastestRoute = calculateLongestRoute(input);

		expect(fastestRoute).to.equal(982);
		
	})

	it('Given adventocode input should recieve correct output', function() {
		var calculateLongestRoute = _9().calculateLongestRoute;
		var input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

		var fastestRoute = calculateLongestRoute(input);

		expect(fastestRoute).to.equal(804);
		
	})
})