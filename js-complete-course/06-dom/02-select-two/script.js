/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // all 3 way work for selecting element without getElementById

    document.querySelector("#target").innerHTML = "owned";
    document.querySelector("#target").textContent = "owned";
    document.querySelector("#target").innerText = "owned";

})();
