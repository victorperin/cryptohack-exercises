const fromBigIntToASCII = (bigint) => {
  const hexString = bigint.toString(16)

  return Buffer.from(hexString, 'hex').toString('ascii')
}

const input = 11515195063862318899931685488813747395775516287289682636499965282714637259206269n
Promise.resolve()
  .then(() => input)
  .then(fromBigIntToASCII)
  .then(console.log)