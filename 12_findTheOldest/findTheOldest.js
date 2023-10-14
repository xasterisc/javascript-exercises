const findTheOldest = function (array) {
	return array.reduce((oldestPerson, currentPerson) => {
		const oldestPersonAge = getAge(
			oldestPerson.yearOfDeath,
			oldestPerson.yearOfBirth
		);
		const currentPersonAge = getAge(
			currentPerson.yearOfDeath,
			currentPerson.yearOfBirth
		);
		return oldestPersonAge > currentPersonAge
			? oldestPerson
			: currentPerson;
	});
};

const getAge = function (death, birth) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
