/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const display = document.getElementById("target");
    const api_url = "http://localhost:3000/heroes";
    let templ = document.getElementById('tpl-hero');

    document.getElementById('run').addEventListener('click', function (){
        let inputHeroId = document.getElementById("hero-id").value;
        let inputNr = Number(inputHeroId);

        console.log(templ.content)
        //calling function to link iputnumber to api object
        catchHero(api_url,inputNr)


    })

    async function catchHero(api_url,id){
        let data = await fetch(api_url)
        let response = await data.json();
        let array = await response.filter((hero) => hero.id === id);

        if (array.length !== 0) {
            handleTempl(array[0].name, array[0].alterEgo, array[0].abilities);
        } else {
            alert("Hero was not found. Use a number from 1-5");
        }
        //calling function to link existing template to data (array) object to template with api information
        handleTempl(array)


    }


    function handleTempl(array){
        //how to clone an existing template
        let clone = templ.content.cloneNode(true)
        console.log(array[0])
        // cloning existing tags from template
        let name = clone.querySelector(".name");
        let ego = clone.querySelector('.alter-ego');
        let power = clone.querySelector('.powers');
        console.log(array[0]);
        //putting information of data (array) in to clone of template
        name.textContent = array[0].name;
        ego.textContent = array[0].alterEgo;
        power.textContent = array[0].abilities;

        //displaying clone
        display.appendChild(clone)
    }


})();
