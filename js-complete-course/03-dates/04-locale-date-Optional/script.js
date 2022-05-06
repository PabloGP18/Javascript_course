/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function changingTextByDate () {

    const date = new Date();
    /*
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    //const day = date.getDate() //;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    //const seconds = date.getSeconds();//


    const monthsWritten = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayWritten = ["Monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    const time = (`${hour}h${minutes}`)

    const dateWithSlashes = [monthsWritten[date.getMonth()], month + 1, dayWritten [date.getDay() - 1] ,year , time].join(' ');
    */
    document.getElementById("target").innerHTML = date;

})();
