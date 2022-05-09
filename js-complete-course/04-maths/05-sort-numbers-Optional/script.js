/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function sortArray() {

    document.getElementById("run").addEventListener("click", function () {
        let inputNum = document.getElementById("numbers").value;

        let arrNum = inputNum.split(",").map((str) => {
            return Number(str);
        });

        let resultArr = arrNum.sort((a, b) => a - b);
        console.log(resultArr)
        alert(resultArr);
    });
})();
