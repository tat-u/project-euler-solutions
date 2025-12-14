const N = 600851475143;

/** Get largest prime factor of n */
function LPF(n: number): number {
  let end = Math.sqrt(n);
  let k = 3;

  while (k <= end) {
    if (n % k === 0) {
      n /= k; // devise if k is a factor
      end = Math.sqrt(n); // recalculate end
    }
    k += 2; // increment k, skip even numbers
  }

  return n;
}

console.log(LPF(N));
