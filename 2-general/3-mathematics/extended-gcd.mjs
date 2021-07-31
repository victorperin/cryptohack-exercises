const extendedEuclides = (a, b) => {
  let [
    r,
    r1,
    u,
    v,
    u1,
    v1,
  ] = [a, b, 1, 0, 0, 1]

  // variáveis auxiliares para efetuar trocas
  let rs, us, vs, q;

  while (r1 != 0) {
    q = parseInt(r / r1); // pega apenas a parte inteira
    rs = r;
    us = u;
    vs = v;
    r = r1;
    u = u1;
    v = v1;
    r1 = rs - q * r1;
    u1 = us - q * u;
    v1 = vs - q * v1;
  }

  return { r, u, v }; // tais que a*u + b*v = r et r = pgcd (a, b)
}

const p = 26513
const q = 32321
const { u, v } = extendedEuclides(p, q)

console.log(`crypto{${u},${v}}`)