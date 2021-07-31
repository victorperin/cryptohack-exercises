// I've hidden two cool images by XOR with the same secret key so you can't see them!

// lemur.png
// flag.png


// the files seems to be encrypted, but they still an PNG image,
// so, i think he encrypted each pixel value.
// also I noticed each image seems to have coincident bytes.
// I think I can use that to reverse the private key

import fs from 'fs/promises'
import fsNonPromise from 'fs'
import { PNG } from 'pngjs'
import { Readable } from 'stream'

// pngjs doesn't use promises :(
const readPng = (buffer) => new Promise((resolve, reject) =>
  (new PNG()).parse(buffer, (error, data) => {
    if (error) return reject(error)

    return resolve(data)
  })
)


const flagPath = new URL('flag.png', import.meta.url)
const flagFileBuffer = await fs.readFile(flagPath)
const flagPng = await readPng(flagFileBuffer)
const flagPngBuffer = flagPng.data


const lemurPath = new URL('lemur.png', import.meta.url)
const lemurFileBuffer = await fs.readFile(lemurPath)
const lemurPng = await readPng(lemurFileBuffer)
const lemurPngBuffer = lemurPng.data

const xorgedBuffer = flagPngBuffer.map((byte, index) => byte ^ lemurPngBuffer[index])

fsNonPromise.createReadStream(flagPath)
  .pipe(new PNG())
  .on("parsed", function () {
    for (let x = 0; x < this.data.length; x = 4 + x) {
      this.data[x] = xorgedBuffer[x]
      this.data[x + 1] = xorgedBuffer[x + 1]
      this.data[x + 2] = xorgedBuffer[x + 2]
      this.data[x + 3] = 255
    }
    const unencryptedLemurPath = new URL('unencrypted-lemur.png', import.meta.url)

    this.pack().pipe(fsNonPromise.createWriteStream(unencryptedLemurPath));
  });