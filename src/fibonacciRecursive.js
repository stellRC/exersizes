// FIBBONACCI RECURSIVE

export default function fibRec(n) {
    if (n < 2) return n

    return fibRec(n-1) + fibRec(n-2)
}