def Fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a


s = 0
k = 0
fk = Fib(k)

while fk <= 4_000_000:
    if fk % 2 == 0:
        s += fk

    k += 1
    fk = Fib(k)

print(s)
