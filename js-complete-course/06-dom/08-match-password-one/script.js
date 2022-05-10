/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run');addEventListener('click', function (){


    const pass1 = document.getElementById('pass-one');
    const pass2 = document.getElementById('pass-two');

        if(pass1.value !== pass2.value ){
            target.innerHTML = 'Passwords are not the same';
            pass1.style.border = '1px solid red';
            pass2.style.border = '1px solid red';
        }else{
            target.innerHTML = 'Passwords are  the same';
            pass1.style.border = '1px solid black';
            pass2.style.border = '1px solid black';
        }

       /* the first way i solved the code (longer way)
        let inputOne = pass1.value;
        let inputTwo = pass2.value;

        if (inputOne !== inputTwo || !inputOne || !inputTwo )
        {
            target.innerHTML = 'Passwords are not the same';
            pass1.style.border = " 1px solid red";
            pass2.style.border = " 1px solid red";
        }
        else{
            target.innerHTML = 'Passwords are the same';
            pass1.style.border = " 1px solid black";
            pass2.style.border = " 1px solid black";
        }*/
    })
})();
