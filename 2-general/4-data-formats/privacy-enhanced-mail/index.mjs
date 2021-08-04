import { readFile } from 'fs/promises'
import { createPrivateKey } from 'crypto'

const fileUrl = new URL('privacy_enhanced_mail.pem', import.meta.url)

const fileContent = await readFile(fileUrl, 'ascii')

const privateKey = createPrivateKey({
  'key': fileContent,
  'format': 'pem',
  'type': 'pkcs8',
});
const key = privateKey.export({ format: 'jwk' })

const dInBuffer = Buffer.from(key.d, 'base64')
const dInHex = dInBuffer.toString('hex')
const dInt = BigInt('0x' + dInHex);
console.log(dInt)
