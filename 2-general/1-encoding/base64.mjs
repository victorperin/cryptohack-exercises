const hexStringToBase64 = (hexString) => {
  return Buffer.from(hexString, 'hex').toString('base64');
}

const input = '72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf'
Promise.resolve()
  .then(() => input)
  .then(hexStringToBase64)
  .then(console.log)