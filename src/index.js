import _ from 'lodash';
import mergeSort from './mergeSort.js'
import fibRec from './fibonacciRecursive.js'
import fib from './fibonacci.js'
import catchError from './catchError.js'

const input = document.querySelector('[data-input]')
const output = document.querySelector('[data-output]')
const btns = document.querySelectorAll('[data-btn]')


btns.forEach(btn => btn.addEventListener('click', (e) => {
    console.log('cat')
    let n = [...input.value];
    if (e.target.innerHTML === 'Recursive Merge Sort') {
        if (n.length <= 1) {
            output.innerText = 'input an array of numbers'
        } else {
            output.innerText = mergeSort(n).join('')
        }
          
    } else if (e.target.innerHTML === 'Recursive Fibbonacci') {
        if (n.length > 2) {
           catchError()
        } else {
            output.innerText = fibRec(n)
        }
    } else {
        if (n.length > 2) {
            catchError()
        } else {
            output.innerHTML = fib(n).join('')
        }
    }
    
}))