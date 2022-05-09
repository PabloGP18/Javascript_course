/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function fizzBuzzWithRandomNumber() {

    let num = Math.floor(Math.random() * 100) + 1;

    if(num %3===0 && num %5 ===0)
    {
        console.log("fizzbuzz");
        document.getElementById('target').innerHTML = "fizzbuzz";
    }
    else if(num % 5 ===0)
    {
        console.log("buzz")
        document.getElementById('target').innerHTML = "buzz";
    }
    else if(num % 3===0)
    {
        console.log("fizz")
        document.getElementById('target').innerHTML = "fizz";
    }
    else
    {
        console.log(num);
        document.getElementById('target').innerHTML = num;
    }

})();

(function fizzBuzzWithLoop() {

for (i = 1; i <= 100; i++){

    if(i %3===0 && i %5 ===0)
    {
        console.log("fizzbuzz");
    }
    else if(i % 5 ===0)
    {
        console.log("buzz")
    }
    else if(i % 3===0)
    {
        console.log("fizz")
    }
    else
    {
        console.log(i);
    }
}


})();
