/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function Calculator() {



    let performOperation = function(operation) {

        const opOne = parseInt(document.getElementById("op-one").value);
        const opTwo = parseInt(document.getElementById("op-two").value);
        //you can do parseInt here @variables or @ the operation ex: parseInt(opOne)

        console.log(operation)

        switch (operation) {

            case 'addition':
                document.getElementById("target").innerHTML = opOne + opTwo
                //target.innerHTM = opOne + opTwoL... other way to write the case addition
                break;

            case 'subtraction':
                document.getElementById("target").innerHTML = opOne - opTwo;
                break;

            case 'multiplication':
                document.getElementById("target").innerHTML = opOne * opTwo;
                break;

            case 'division':
                document.getElementById("target").innerHTML = opOne / opTwo;
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
