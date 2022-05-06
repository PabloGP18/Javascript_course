/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


const button = document.getElementById('run');

button.addEventListener('click', function calcSpecificDay(){

    let year = document.getElementById('year').value;

    let counter = 0;

    for (i = 1; i <= 12; i++) {

        let dateSpecific = new Date(i + "/13/" + year);

        if (dateSpecific.getDay() == 5) {
            counter++;
        }
    }
    document.getElementById("target").innerHTML = counter;

});
