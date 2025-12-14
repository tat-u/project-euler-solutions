use std::u32;

fn nom(b: u32, k: u32) -> u32 {
    (b - 1) / k
}

fn sn(a1: u32, an: u32, n: u32) -> u32 {
    (a1 + an) * n / 2
}

fn bm(n: u32, k: u32) -> u32 {
    (n - 1) - (n - 1) % k
}

fn main() {
    const MAX: u32 = 1000;

    let a = sn(3, bm(MAX, 3), nom(MAX, 3));
    let b = sn(5, bm(MAX, 5), nom(MAX, 5));
    let c = sn(15, bm(MAX, 15), nom(MAX, 15));

    println!("{}", a + b - c);
}
