/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        document.getElementById('run').addEventListener('click',function() {


                const smallest = document.getElementById("min");
                const biggest = document.getElementById("max");
                const total = document.getElementById("sum");
                const average = document.getElementById("average");


                const array =  Array.from({ length: 10 }, () => Math.floor((Math.random() * 100) + 1));

                let number1 = document.getElementById("n-1");
                number1.innerHTML = array[0];
                //number1.textContent = array      This is another way to write innerHTML
                let number2 = document.getElementById("n-2");
                number2.innerHTML = array[1];

                let number3 = document.getElementById("n-3");
                number3.innerHTML = array[2];

                let number4 = document.getElementById("n-4");
                number4.innerHTML = array[3];

                let number5 = document.getElementById("n-5");
                number5.innerHTML = array[4];

                let number6 = document.getElementById("n-6");
                number6.innerHTML = array[5];

                let number7 = document.getElementById("n-7");
                number7.innerHTML = array[6];

                let number8 = document.getElementById("n-8");
                number8.innerHTML = array[7];

                let number9 = document.getElementById("n-9");
                number9.innerHTML = array[8];

                let number10 = document.getElementById("n-10");
                number10.innerHTML = array[9];


                //smallest element of array
                smallest.innerHTML = Math.min(...array);
                //biggest element of array
                biggest.innerHTML = Math.max(...array);
                //sum of array
                const reducer = (accumulator, curr) => accumulator + curr;
                total.innerHTML = (array.reduce(reducer));
                //average of array
                average.innerHTML = array.reduce((a, b) => a + b, 0) / array.length;
        })
})();