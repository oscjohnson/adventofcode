var combinations = require('../utils/combinations.js')

module.exports = function() {
	function step1(input, total) {
		var containers = input.split('\n').map((a) => {return parseInt(a)});
		var cmb = combinations(containers);

		var res = [];
		cmb.forEach((c) => {
			if(c.reduce((a,b) =>{return a+b}) == total) res.push(c);
		})

		return res;
	}

	function step2(input, tot) {
		var cmbs = step1(input, tot);
		var sorted = cmbs.sort((a,b) => { return a-b;})
		var smallest = sorted[0];

		return sorted.filter((comb) => {
			return (comb.length === smallest.length)
		})

	}

	return {
		step1: step1,
		step2: step2
	}
}