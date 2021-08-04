import { readFile } from 'fs/promises'
import { createPublicKey } from 'crypto'


const fileUrl = new URL('2048b-rsa-example-cert.der', import.meta.url)

const fileContent = await readFile(fileUrl)
var prefix = '-----BEGIN CERTIFICATE-----\n';
var contentInBase64 = fileContent.toString('base64').match(/.{0,64}/g).join('\n');
var suffix = '-----END CERTIFICATE-----\n';
var pemText = `${prefix}${contentInBase64}${suffix}`;


const privateKey = createPublicKey({
  'key': pemText,
  'format': 'pem',
  'type': 'pkcs8',
});


const key = privateKey.export({ format: 'jwk' })

const nBuffer = Buffer.from(key.n, 'base64')
const nHex = nBuffer.toString('hex')
const nInt = BigInt('0x' + nHex);
console.log(nInt)