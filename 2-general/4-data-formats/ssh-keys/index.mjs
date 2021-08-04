import { readFile } from 'fs/promises'

const fileUrl = new URL('bruce_rsa.pub', import.meta.url)
const fileContent = await readFile(fileUrl, 'utf8')
// console.log(fileContent)

// extract the public key from the file and transform to buffer
const [_, key] = fileContent.split(' ')
const keyBuffer = Buffer.from(key, 'base64')
// console.log(keyBuffer)

// using the sequence to get details of the public key
// more: https://www.thedigitalcatonline.com/blog/2018/04/25/rsa-keys/
// 4 bytes to specify length


const headLengthBytes = keyBuffer.slice(0, 4) // this is the length of the header (00 00 00 04)
const headLength = headLengthBytes.readUInt32BE()
// console.log(headLengthBytes, headLength)
const [headStart, headEnd] = [4, headLength + 4]
const head = keyBuffer.slice(headStart, headEnd) // this outputs ssh-rsa
// console.log(head.toString('ascii'))

const [rsaExpoentHeaderStart, rsaExpoentHeaderEnd] = [headEnd, headEnd + 4]
const rsaExpoentHeader = keyBuffer.slice(rsaExpoentHeaderStart, rsaExpoentHeaderEnd) // 00 00 00 03
const rsaExpoentHeaderLength = rsaExpoentHeader.readUInt32BE()
const [rsaExpoentStart, rsaExpoentEnd] = [rsaExpoentHeaderEnd, rsaExpoentHeaderEnd + rsaExpoentHeaderLength]

// https://www.dinamonetworks.com/manualpocket/aquitetura_rsa.htm
// fixed expoent for rsa keys: 01 00 01 => 2^16 + 1 = 65537
const rsaExpoent = keyBuffer.slice(rsaExpoentStart, rsaExpoentEnd)

const [keyModulusHeaderStart, keyModulusHeaderEnd] = [rsaExpoentEnd, rsaExpoentEnd + 4]
const keyModulusHeader = keyBuffer.slice(keyModulusHeaderStart, keyModulusHeaderEnd)
const keyModulusLength = keyModulusHeader.readUInt32BE() // the modulus is 385 bytes

const keyModulusBuffer = keyBuffer.slice(keyModulusHeaderEnd, keyModulusHeaderEnd + keyModulusLength)

const keyModulusHex = keyModulusBuffer.toString('hex')
const keyModulusInt = BigInt('0x' + keyModulusHex);
console.log(keyModulusInt)