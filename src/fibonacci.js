// FIBBONACCI

export default function fib(n) {
    if ( n <= 0) return 0
    let prev = 1;
    let current = 0;
    let arr = [];

    for (let i = 0; i < n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
        arr.push(next);
    }

    return arr
}


