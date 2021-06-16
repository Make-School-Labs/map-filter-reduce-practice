
// Map turn these numbers into strings

function convertToPrices(nums) {
	return nums.map(n => `$${n.toFixed(2)}`)
}

// export {
// 	convertToPrices
// }

module.exports = {
	convertToPrices
}