

export const isPrime = (n: number) => {
    const isPrimeResult: boolean = isPrimeHelper(n);
    return new Promise((resolve, reject) => {
        if (isPrimeResult) resolve({ prime: true });
        reject({ isPrime: false });
    })
};

const isPrimeHelper = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n > 1;
};