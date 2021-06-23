// import { convertToPrices } from './challenges'
const {
  convertNumbersToPrices,
  transformBalancetoCurrency,
  filterOddNumbers,
  filterUnregisteredPeople,
  filterUnregisteredAndUnactivePeople,
  sumNumbers,
  totalAge,
  highestBalanceHolder,
  countInstancesofEyeColor,
} = require("./challenges");



const numbers = [1, 2, 3, 4, 5];
const people = require("./people");

describe("Map Problems", () => {
  test("Test numbers to prices", () => {
    expect(convertNumbersToPrices(numbers)).toEqual([
      "$1.00",
      "$2.00",
      "$3.00",
      "$4.00",
      "$5.00",
    ]);
  });

  test("Test transform balance to currency ", () => {
    let indexZero = transformBalancetoCurrency(people)[0];
    let indexEleven = transformBalancetoCurrency(people)[11];
    expect(indexZero).toEqual("$2489.10");
    expect(indexEleven).toEqual("$1859.68");
  });
});

describe("Filter Problems", () => {
  test("Test filter out odd numbers ", () => {
    expect(filterOddNumbers(numbers)).toEqual([2, 4]);
  });

  test("Test filter people by registeration", () => {
    expect(filterUnregisteredPeople(people).length).toEqual(10);
  });
  test("Test registered people who are active", () => {
    expect(filterUnregisteredAndUnactivePeople(people).length).toEqual(5);
	expect(filterUnregisteredAndUnactivePeople(people)[2]).toEqual({
		"index": 14,
		"isActive": true,
		"balance": 2757.82,
		"age": 40,
		"eyeColor": "blue",
		"name": "Susana Goodwin",
		"sex": "female",
		"address": "759 Otsego Street, Jeff, New Mexico, 6299",
		"registered": true
	  })
  });
});

describe('Reduce Problems', () => {
	test('Test sum of array of numbers', () => {
		expect(sumNumbers(numbers)).toEqual(15)
	})
	test('Test the sum of the ages of every person in the people data set', () => {
		expect(totalAge(people)).toEqual(571);
	})

	test('Test the highest balance holder', () => {
		expect(highestBalanceHolder(people)).toContainEqual({
			name: "Dixie Harrell",
			balance: 3763.72
		})
	})
	
	test('Test the count for instances of eyeColor', () => {
		expect(countInstancesofEyeColor(people)).toContainEqual({
			blue: 8,
			brown: 4,
			green: 7
		})
	})
	
	
	
})

