

	function wrap(l, w, h) {
		return 2*l*w + 2*w*h + 2*h*l;
	}

	function wrapWithExtra(l,w,h) {
		var smallestSide = Math.min.apply(null, [l*w,w*h,h*l]);
		return wrap(l,w,h) + smallestSide;
	}

	function factory(input, fn) {
		var fn = fn || wrapWithExtra;
		var lines = input.split('\n');
		var i = 0;
		var sum = 0;

		while(i < lines.length) {
			var line = lines[i];
			var dim = line.split('x');
			var l = parseInt(dim[0]);
			var w = parseInt(dim[1]);
			var h = parseInt(dim[2]);

			sum += fn(l, w, h);

			i++;
		}
		return sum;
	} 

	function ribbon(l,w,h) {
		var bow = l*w*h;
		var sorted = [l,w,h].sort(function(a,b) {return a-b;})
		var wrap = 2*sorted[0] + 2*sorted[1];
		return bow + wrap;
	}

module.exports = {
	factory: factory,
	wrapWithExtra: wrapWithExtra,
	ribbon: ribbon
};