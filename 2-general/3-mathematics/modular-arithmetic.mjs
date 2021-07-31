// a = b mod m
// if we divide the integer a by m, the remainder is b

// Calculate the following integers:
// 11 ≡ a mod 6
// 8146798528947 ≡ b mod 17

// The solution is the smaller of the two integers.

const a = 11 % 6
const b = 8146798528947 % 17

console.log(a, b) // solution is b


// PART 2:

// We'll pick up from the last challenge and imagine we've picked a modulus p,
// and we will restrict ourselves to the case when p is prime.


// Lets say we pick p = 17. Calculate 3^17 mod 17. Now do the same but with 5^17 mod 17.

// What would you expect to get for 7^16 mod 17 ? Try calculating that.

// This interesting fact is known as Fermat's little theorem. We'll be needing this(and its generalisations) when we look at RSA cryptography.

// Now take the prime p = 65537. Calculate 273246787654^65536 mod 65537.

// Did you need a calculator ?

console.log(273246787654n ** 65536n % 65537n) // this, will aways be 1