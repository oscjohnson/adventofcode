module.exports = function(options) {
	var options = options || {};
	var isPart2 = options.isPart2 || false;


	function sum(input) {
		var count = 0;
		if(isArray(input)) count += sumArray(input)
		else if (isObject(input)) count += sumObject(input)
		else if(isNumber(input)) count += input;

		return count;
	}

	function sumObject(obj) {
		var count = 0;

		if(isPart2 && isRed(obj)) return count;

		Object.keys(obj).forEach((key) => {
			count += sum(obj[key])
		})

		return count;
	}

	function sumArray(arr) {
		var count = 0;
		arr.forEach((el) => {
			count += sum(el);
		})

		return count;
	}

	function isRed(obj) {
		for (var key in obj) {
			if(obj[key] === 'red') return true;
		}

		return false;
	}

	function isArray(a) {
		return Array.isArray(a);
	}

	function isObject(a) {
		return (a instanceof Object);
	}

	function isNumber(a) {
		return !isNaN(a)
	}

	return {sum: sum}
}