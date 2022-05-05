/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let btnRed = document.getElementById('red')
let btnYellow = document.getElementById('yellow')
let btnGreen = document.getElementById('green')
let btnBlue = document.getElementById('blue')

btnRed.addEventListener('click', function onClick(event ) {
    document.body.style.backgroundColor = 'red'
})
btnYellow.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'yellow'
})
btnGreen.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'green'
})
btnBlue.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'blue'
})

