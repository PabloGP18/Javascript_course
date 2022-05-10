/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const hoverOn = document.getElementById("image").getAttribute("data-hover");
    const hoverOff = document.getElementById("image").src;

    const image = document.getElementById("image");

    image.addEventListener("mouseover", () => {
        image.src = hoverOn;
    });

    image.addEventListener("mouseout", () => {
        image.src = hoverOff;
    });
})();
