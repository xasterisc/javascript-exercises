const fibonacci = function (number) {
	if (number < 0) return 'OOPS';
	if (number === 0) return 0;

	let first = 1;
	let second = 0;

	for (let i = 2; i <= number; i += 1) {
		let current = first + second;
		second = first;
		first = current;
	}
	return first;
};

// Do not edit below this line
module.exports = fibonacci;
