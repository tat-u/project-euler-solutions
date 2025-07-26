def NoM(b, k):
    """Number of multiples of k in [1, b)"""
    return (b - 1) // k


def Sn(a1, an, n):
    """Sum of arithmetic series"""
    return (a1 + an) * n // 2


def BM(n, k):
    """Biggest multiple of k below n"""
    return (n - 1) - (n - 1) % k


A = Sn(3, BM(1000, 3), NoM(1000, 3))
B = Sn(5, BM(1000, 5), NoM(1000, 5))
C = Sn(15, BM(1000, 15), NoM(1000, 15))

print(A + B - C)
