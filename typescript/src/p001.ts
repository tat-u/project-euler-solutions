const NoM = (b: number, k: number) => {
  return Math.floor((b - 1) / k);
};

const Sn = (a1: number, an: number, n: number) => {
  return ((a1 + an) * n) / 2;
};

const BM = (n: number, k: number) => {
  return n - 1 - ((n - 1) % k);
};

const MAX = 1000;

const A = Sn(3, BM(MAX, 3), NoM(MAX, 3));
const B = Sn(5, BM(MAX, 5), NoM(MAX, 5));
const C = Sn(15, BM(MAX, 15), NoM(MAX, 15));

console.log(A + B - C);
