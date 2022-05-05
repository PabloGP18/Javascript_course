/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function getValue() {

    let age = prompt("Enter your age here: ","Your age here");
    let gender = prompt("Enter your gender here: ","Your gender here");
    let town = prompt("Enter your town here: ","Your town here");

    let anwsers = confirm(`Your age is ${age}, your gender is ${gender} and you live in ${town}`);

    if (anwsers == true){
        alert("Bye bye")
    }else{
        getValue();
    }

})();
