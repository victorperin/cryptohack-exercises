const a = 26513
const b = 32321


const mdcRecursive = (a, b) => {
  if (b == 0) return a;
  return mdcRecursive(b, a % b);
}

console.log(a, b, mdcRecursive(a, b))