export default function catchError() {
    const input = document.querySelector('[data-input]')
    const output = document.querySelector('[data-output]')
    output.innerText = 'input 1-9'
    input.value = '';
}