const decodeBase64 = (base64String) =>
  Buffer.from(base64String, 'base64').toString('ascii')

const decodeHex = (hexString) =>
  Buffer.from(hexString, 'hex').toString('ascii')

const decodeBitInt = (bitIntString) => {
  const bigInt = BigInt(bitIntString)

  const numberInHexString = bigInt.toString(16)
  return decodeHex(numberInHexString)
}

const decodeUtf8Array = (utf8Array) =>
  Buffer.from(utf8Array).toString('utf-8')


// rot13 simple implementation, for more: https://w.wiki/3gmB
const decodeRot13 = (rot13) =>
  rot13.replace(/[A-Z]/gi, char =>
    "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(char)])


const types = {
  'base64': decodeBase64,
  'hex': decodeHex,
  'bigint': decodeBitInt,
  'utf-8': decodeUtf8Array,
  'rot13': decodeRot13,
}

const cantDecode = (type) => {
  throw new Error(`can't decode ${type}`)
}

export default ({ type, encoded }) => {
  const functionToCall = types[type] || cantDecode(type)
  return functionToCall(encoded)
}