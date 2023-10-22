const palindromes = function (string) {
	const processedString = string.toUpperCase().replace(/[^A-Z0-9]/g, '');
	return processedString.split('').reverse().join('') === processedString;
};

// Do not edit below this line
module.exports = palindromes;
