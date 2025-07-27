import math

"""Get the largest prime factor of a odd natural number N"""

N = 600851475143

n = N
end = math.floor(math.sqrt(n))
k = 3

while k <= end:
    if n % k == 0:
        n = n // k
        end = math.floor(math.sqrt(n))
    k += 2  # skip even numbers

print(n)
