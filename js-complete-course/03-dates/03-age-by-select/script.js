/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


const button = document.getElementById('run').addEventListener('click', calcAge);

function calcAge(){

    let day = document.getElementById('dob-day').value;
    let month = document.getElementById('dob-month').value;
    let year = document.getElementById('dob-year').value;

    let dateInput = new Date(year, month, day)

    let dateNow = new Date();

    let calcYear = dateNow.getFullYear() - dateInput.getFullYear();
    let calcMonth = dateNow.getMonth() - dateInput.getMonth() +1;
    let calcDay = dateNow.getDay() - dateInput.getDay() + 1;
    //this shows your age in a pop up//
    //tried to do also months and days but it doesn't work 100%//
    //alert(`You are: ${calcYear} years, ${calcMonth} months and ${calcDay} days old`);//
    //this pop up only shows years//
    alert(`You are: ${calcYear} years old`);
    //this is a way to show your age in the HTML//
    document.getElementById('target').innerHTML = calcYear;
};
