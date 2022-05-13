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
        catchHero(api_url,inputNr)

       // let clone = array.content.cloneNode(true);
       // document.getElementById('tpl-hero').appendChild(clone);

    })

    async function catchHero(api_url,id){
        let data = await fetch(api_url)
        let response = await data.json();
        let array = await response.filter((hero) => hero.id === id);

        handleTempl(array)
    }


    function handleTempl(array){
        let clone = templ.content.cloneNode(true)
        console.log(array[0])
        let name = clone.querySelector(".name");
        let ego = clone.querySelector('.alter-ego');
        let power = clone.querySelector('.powers');
        console.log(array[0]);
        name.textContent = array[0].name;
        ego.textContent = array[0].alterEgo;
        power.textContent = array[0].abilities;
        display.appendChild(clone)
    }


})();
