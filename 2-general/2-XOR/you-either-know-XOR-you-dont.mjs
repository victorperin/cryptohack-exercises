// I've encrypted the flag with my secret key, you'll never be able to guess it.

// Remember the flag format and how it might help you in this challenge!

// 0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104


const encrypted = '0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104'
const flagFormat = 'crypto{'


// try to get part of private key from encrypted XOR flagFormat
const encryptedBuffer = Buffer.from(encrypted, 'hex')
const flagFormatBuffer = Buffer.from(flagFormat, 'ascii')

const partlyXorgedBuffer = encryptedBuffer.map((byte, index) => byte ^ flagFormatBuffer[index])
const partlyXorged = partlyXorgedBuffer.toString('ascii')

console.log(partlyXorged)


// i think i got the key => myXORkey
const privateKey = 'myXORkey'
const repeatingPrivateKey = privateKey.repeat(10)

const privateKeyBuffer = Buffer.from(repeatingPrivateKey, 'ascii')

const unencryptedBuffer = encryptedBuffer.map((byte, index) => byte ^ privateKeyBuffer[index])
const unencrypted = unencryptedBuffer.toString('ascii')

console.log(unencrypted)