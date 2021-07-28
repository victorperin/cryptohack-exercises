// Given the string "label", XOR each character with the integer 13.
// Convert these integers back to a string and submit the flag as crypto{new_string}.

const input = 'label'
const howMuchToXOR = 13

const doXor = (input, quantity) =>
  Buffer.from(input, 'ascii')
    .map(value => value ^ quantity)
    .toString('ascii')

Promise.resolve()
  .then(() => doXor(input, howMuchToXOR))
  .then(console.log)