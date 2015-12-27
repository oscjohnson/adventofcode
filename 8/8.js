module.exports = function() {

	function execute(original) {
		var memory = original
						.replace(/\"(.*)\"/, '$1')
						.replace(/\\\"/g,'"')
						.replace(/\\x([0-9a-f]{2})/g, (x, a) => { 
							return String.fromCodePoint(parseInt(a, 16)); 
						})
						.replace(/\\\\/g,'\\')

		return {
			code: original.length,
			memory: memory.length
		}
	}

	function loop(input) {
		var lines = input.split('\n');

		var sum = 0;

		lines.map((line) => {
			var length = execute(String.raw`${line}`);
			sum += length.code - length.memory;
		});

		return sum;
	}

	function part2(input) {
		var lines = input.split('\n');

		var sum = 0;

		lines.map((line) => {
			var i = String.raw`${line}`;
			sum += JSON.stringify(i).length - i.length;
		});

		return sum;

	}

	return {
		execute: execute,
		loop: loop,
		part2: part2
	}
}