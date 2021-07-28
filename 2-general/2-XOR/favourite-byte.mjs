// I've hidden my data using XOR with a single byte.
// Don't forget to decode from hex first.
// I've hidden my data using XOR with a single byte.
// Don't forget to decode from hex first.

// 73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d

const allPossibleBytes = [...Array(17).keys()] // 0 to 16 bytes array

const input = '73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d'

const xorByte = (hex, byte) =>
  Buffer.from(hex, 'hex').map(value => value ^ byte).toString('ascii')

const allPossibleCombinations = allPossibleBytes.map(byte => xorByte(input, byte))

console.log(allPossibleCombinations)