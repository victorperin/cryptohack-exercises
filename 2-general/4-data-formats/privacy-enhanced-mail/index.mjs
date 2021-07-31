import { readFile } from 'fs/promises'
// import asn1js from 'asn1js'

const fileUrl = new URL('privacy_enhanced_mail.pem', import.meta.url)

const fileContent = await readFile(fileUrl, 'ascii')
const rsaHeader = '-----BEGIN RSA PRIVATE KEY-----\n'
const rsaFooter = '\n-----END RSA PRIVATE KEY-----\n'

const base64Content = fileContent
  .replace(rsaHeader, '')
  .replace(rsaFooter, '')

const contentBuffer = Buffer.from(base64Content, 'base64')
const arrayBuffer = new Uint8Array(contentBuffer).buffer;

// const asn1 = asn1js.fromBER(arrayBuffer)
// const asn1Values = asn1.result.toJSON().valueBlock.value



// asn1Values.map(value => {
//   console.log('')
//   console.log('')
//   console.log('')
//   console.log(value.blockName)
//   console.log(value.valueBlock.valueHex)
//   // console.log(value.valueBlock)
// })





import { createPrivateKey } from 'crypto'


const privateKey = createPrivateKey({
  'key': fileContent,
  'format': 'pem',
  'type': 'pkcs8',
});
const key = privateKey.export({ format: 'jwk' })

// console.log(privateKey.type)
const dInBuffer = Buffer.from(key.d, 'base64')
const dInHex = dInBuffer.toString('hex')
console.log(dInHex)

// you must convert it to decimal, i have no time and idea on how to do it in js
// 15682700288056331364787171045819973654991149949197959929860861228180021707316851924456205543665565810892674190059831330231436970914474774562714945620519144389785158908994181951348846017432506464163564960993784254153395406799101314760033445065193429592512349952020982932218524462341002102063435489318813316464511621736943938440710470694912336237680219746204595128959161800595216366237538296447335375818871952520026993102148328897083547184286493241191505953601668858941129790966909236941127851370202421135897091086763569884760099112291072056970636380417349019579768748054760104838790424708988260443926906673795975104689


