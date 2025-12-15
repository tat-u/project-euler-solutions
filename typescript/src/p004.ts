/* 

[I]
111111 = 3 * 7 * 11 * 13 * 37 = 231 * 481
-> At least, the answer must be greater than 111111.

[II]
999 * 999 < 1000 * 1000 = 1_000_000
-> The answer must be a 6-digit number.

[III]
abccba = 100001a + 10010b + 1100c
       = 11 * (9091a + 910b + 100c)
-> 6-digit palindromes are divisible by 11.

[IV]
p = 11m * n (where 11m is 3-digit number)
-> m must be an integer from 10 to 90 (11m will be 110 to 990).

[V]
p / 11 = m * n
-> If p / 11 has factor within 10 to 90, and the corresponding n is 3-digit number,
  then p is "palindrome made from the product of two 3-digit numbers".

*/

const solve = () => {
  for (let i = 999; i >= 111; i--) {
    /** Palindromic number */
    const p =
      i * 1000 +
      (Math.floor(i / 100) % 10) * 1 +
      (Math.floor(i / 10) % 10) * 10 +
      (Math.floor(i / 1) % 10) * 100;

    const t = p / 11;

    for (let m = 90; m >= 10; m--) {
      if (t % m === 0) {
        if (t / m >= 100 && t / m <= 999) {
          console.log(p);
          return;
        }
      }
    }
  }
};

solve();
