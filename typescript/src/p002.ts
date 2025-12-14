/** Fibonacci number at position n
 * @param n - Position in the Fibonacci sequence
 * `0(n=0), 1(n=1), 1(n=2), 2(n=3), 3(n=4), 5(n=5), ...`
 *
 * @returns The n-th Fibonacci number
 */
const Fib = (n: number) => {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
};

/** Sum of even Fibonacci numbers less than 4 million */
let sum = 0;
/** Current index in the Fibonacci sequence */
let k = 1;
/** Current Fibonacci number */
let fk = Fib(k);

// Loop while the current Fibonacci number is not exceeding 4 million
while (fk <= 4_000_000) {
  if (fk % 2 === 0) sum += fk; // Add to sum if even

  k++;
  fk = Fib(k);
}

console.log(sum);
