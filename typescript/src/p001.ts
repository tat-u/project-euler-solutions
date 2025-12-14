const MAX = 1000;

/** Number of multiples of k in [1, m) */
const NoM = (k: number, m: number = MAX) => {
  return Math.floor((m - 1) / k);
};

/** Sum of an arithmetic series */
const Sn = (a1: number, an: number, n: number) => {
  return ((a1 + an) / 2) * n;
};

/** Biggest multiple of k below m */
const BM = (k: number, m: number = MAX) => {
  return m - 1 - ((m - 1) % k);
};

const A = Sn(3, BM(3), NoM(3));
const B = Sn(5, BM(5), NoM(5));
const C = Sn(15, BM(15), NoM(15));

console.log(A + B - C);
