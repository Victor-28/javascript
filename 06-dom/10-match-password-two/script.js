/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    document.getElementById("run").addEventListener("click", function() {

        var input1 = document.getElementById("pass-one").value;
        var input2 = document.getElementById("pass-two").value;
        if (input1 !== input2){
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
        }






        // your code here

});

//  exactly like number 9 but with error instead o fred
