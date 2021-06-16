
// import { convertToPrices } from './challenges'
const { convertToPrices } = require('./challenges')

const prices = [1,2,3]

describe('Map Problems', () => {
	test('Test numbers to prices', () => {
		expect(convertToPrices(prices)).toEqual(['$1.00', '$2.00', '$3.00'])
	})

	test.skip('Test numbers to strings', () => {
		expect(convertToPrices(prices)).toEqual(['$1.00', '$2.00', '$3.00'])
	})
})