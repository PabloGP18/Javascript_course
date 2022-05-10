/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// console.dir(document.all) to checkout the entire document//


(function() {

    let source = document.getElementById('source').getAttribute('data-image');
    let target = document.getElementById('target');

    let newImage = document.createElement("img")
    newImage.src = source;

    target.appendChild(newImage);
})();
