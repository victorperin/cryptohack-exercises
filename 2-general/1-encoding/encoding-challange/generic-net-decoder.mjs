import net from 'net'
import genericDecode from './generic-decoder.mjs'

const connectionOptions = { host: 'socket.cryptohack.org', port: 13377 }

const connectedCallback = () => {
  console.log('connected')
}

const onData = (data) => {
  const parsedData = JSON.parse(data.toString())
  console.log('input', parsedData)

  if (parsedData.flag) {
    console.log(`RECEIVED FLAG: ${parsedData.flag}`)
    return
  }

  const decoded = genericDecode(parsedData)
  const payload = JSON.stringify({ decoded })

  console.log('output', payload, '\n\n')
  client.write(payload);
}



const onEnd = () => {
  console.log('disconnected from server');
}

const client = net.createConnection(connectionOptions, connectedCallback)
client.on('data', onData)
client.on('end', onEnd);