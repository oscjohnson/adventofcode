module.exports = function() {

	function parse(input){
		var aunts = [];
		var lines = input.split('\n');
		lines.forEach((line) => {
			var arr = line.split(/: |, /g);

			var aunt = {}
			aunt.name = arr[0];
			for (var i = 1; i < arr.length; i+=2) {
				var key = arr[i];
				var val = parseInt(arr[i+1]);
				aunt[key] = val;
			};
			aunts.push(aunt);
		})

		return aunts;
	}

	function find(sue, aunts) {
		for (var i = 0; i < aunts.length; i++) {
			var aunt = aunts[i];
			var keys = Object.keys(aunt);
			var found = true;

			for (var j = 0; j < keys.length; j++) {
				var key = keys[j];
				if (key === 'name') continue;

				if(aunt[key] !== sue[key]) found = false;
			};

			if(found) return aunt;
		};
	}

	function step2(sue, aunts) {
		for (var i = 0; i < aunts.length; i++) {
			var aunt = aunts[i];
			var keys = Object.keys(aunt);
			var found = true;

			for (var j = 0; j < keys.length; j++) {
				var key = keys[j];
				if (key === 'name') continue;

				if (key === 'cats' || key === 'trees') {
					if(aunt[key] <= sue[key]) found = false;	
				}
				else if (key === 'pomeranians' || key === 'goldfish') {
					if(aunt[key] >= sue[key]) found = false;	
				}

				else if(aunt[key] !== sue[key]) found = false;
			};

			if(found) return aunt;
		};
	}
	return {
		parse: parse,
		step2: step2,
		find: find
	};
}