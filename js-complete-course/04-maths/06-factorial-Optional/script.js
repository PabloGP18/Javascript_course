/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function factorial () {

    document.getElementById("run").addEventListener("click", function () {

        const input = document.getElementById('number').value;
        // Or  if (number == 0 || number == 1)
        if (isNaN(input)) {
            console.log('Please provide a number!')
        } else {
            console.log(input + ' Is a number')

            let fact = 1;
            for (i = 1; i <= input; i++) {
                fact = fact * i;
                console.log(fact * i)
            }
            console.log(`The factorial for: ${input} is: ${fact}`)
        }

    });

})();
