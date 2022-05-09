/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function () {

    fruits.splice(0,1,'banana');
    fruits.splice(9,1,'kiwi')
        console.log(fruits);

    });

})();

(function() {

    let fruitsTwo = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function () {


        //Other way to remove first and last element of array
        fruitsTwo.shift();
        fruitsTwo.pop();

        //Other way to replace first and last element of array
        fruitsTwo.unshift("banana");
        fruitsTwo.push("kiwi");
        console.log(fruitsTwo);
        alert(`${fruitsTwo}`);
    });

})();
