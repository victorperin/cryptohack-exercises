const convertNumberToAsciiChar = (number) => {
  const asciiChar = String.fromCharCode(number);
  return asciiChar;
}


const convertArrayOsAsciiToString = (array) => {
  const string = array.map(convertNumberToAsciiChar).join('');
  return string;
}

const input = [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]
Promise.resolve()
  .then(() => input)
  .then(convertArrayOsAsciiToString)
  .then(console.log)