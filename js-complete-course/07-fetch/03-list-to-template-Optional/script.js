/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const api_url = "http://localhost:3000/heroes";
    const display = document.getElementById("target")
    const template = document.getElementById("tpl-hero").content;

    document.getElementById("run").addEventListener('click', function (){
        displayHeroes(api_url);
        rewrite(display);
    })

    async function displayHeroes(api_url){
        let data = await fetch(api_url);

        if (!data.ok){

            throw 'Error';
        }

        let response = await data.json();

        response.forEach((resp) => handleTempl(resp));

    }


    function handleTempl(response){
        //how to clone an existing template
        let clone = template.cloneNode(true)
        console.log(response)
        // cloning existing tags from template
        let name = clone.querySelector(".name");
        let ego = clone.querySelector('.alter-ego');
        let power = clone.querySelector('.powers');
        //putting information of data  in to clone of template
        name.textContent = response.name;
        ego.textContent = response.alterEgo;
        power.textContent = response.abilities;

        //displaying clone
        display.appendChild(clone)
    }

    function rewrite(node){
        while (node.firstChild){
            node.removeChild(node.lastChild)
        }
    }

})();
