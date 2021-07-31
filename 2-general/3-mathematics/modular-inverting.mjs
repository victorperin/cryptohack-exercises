// As we've seen, we can work within a finite field Fp, adding and multiplying elements,
// and always obtain another element of the field.

// For all elements g in the field, there exists a unique integer d
// such that g * d ≡ 1 mod p.

// This is the multiplicative inverse of g.

//   Example: 7 * 8 = 56 ≡ 1 mod 11

// What is the inverse element: 3 * d ≡ 1 mod 13 ?


// g * d ≡ 1 mod p
const g = 3
const p = 13
const d = (g ** (p - 2)) % p

console.log(d)

