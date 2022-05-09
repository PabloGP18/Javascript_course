/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// function for root numbers
(function squareRootNumbers() {



    document.getElementById("run").addEventListener("click", function() {

        for (let i = 1; i <= 21; i++)
        {

            if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
                console.log(i + " ");
        }

    });

})();

// function for square numbers
(function squareNumbers() {



    document.getElementById("run").addEventListener("click", function() {
        let msg = " ";
        for (let i = 1; i <= 21; i++)
        {
            result = i * i;
            msg = msg + " " + i + " * "+ i + " = " + result + "\n";
        }
        alert(msg)
        console.log(msg)
        document.getElementById('target').innerHTML= msg;
    });

})();