/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function calculator(){

    document.getElementById("addition").addEventListener("click", function addition() {

        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;

        document.getElementById("target").innerHTML = parseInt(opOne) + parseInt(opTwo);
    });

    document.getElementById("substraction").addEventListener("click", function substraction() {

        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;

        document.getElementById("target").innerHTML = parseInt(opOne) - parseInt(opTwo);

    });

    document.getElementById("multiplication").addEventListener("click", function multiplication() {

        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;

        document.getElementById("target").innerHTML = parseInt(opOne) * parseInt(opTwo);
    });

    document.getElementById("division").addEventListener("click", function division() {

        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;

        document.getElementById("target").innerHTML = parseInt(opOne) / parseInt(opTwo);
    });
})();
