// KEY1 = a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313
// KEY2 ^ KEY1 = 37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e
// KEY2 ^ KEY3 = c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1
// FLAG ^ KEY1 ^ KEY3 ^ KEY2 = 04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf


const xorString = (first, second) => {
  const firstBuffer = Buffer.from(first, 'hex')
  const secondBuffer = Buffer.from(second, 'hex')

  return firstBuffer.map((value, index) => value ^ secondBuffer[index]).toString('hex')
}

const xorStrings = (...strings) =>
  strings.reduce(xorString)


const hexToASCII = hex => Buffer.from(hex, 'hex').toString('ascii')

const key1 = 'a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313'
const key2 = xorStrings('37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e', key1)
const key3 = xorStrings('c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1', key2)
const FLAG = xorStrings('04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf', key1, key3, key2)
const flagAscii = hexToASCII(FLAG)

console.log(key1)
console.log(key2)
console.log(key3)
console.log(FLAG)
console.log(flagAscii)