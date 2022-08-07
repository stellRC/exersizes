
// MERGE SORT


export default function mergeSort(A) {
    const half = A.length / 2

    if (A.length < 2) return A

    const firstHalf = A.splice(0, half)
    return merge(mergeSort(firstHalf), mergeSort(A))
}


    function merge(firstHalf, secondHalf) {
        let arr = []
         
        while (firstHalf.length && secondHalf.length) {
            if (firstHalf[0] < secondHalf[0]) {
                arr.push(firstHalf.shift())
            } else {
                arr.push(secondHalf.shift())
            }
        }
    
        return [...arr, ...firstHalf, ...secondHalf]
    }
    
    



