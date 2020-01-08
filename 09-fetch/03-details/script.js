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

    document.getElementById("run").addEventListener("click", function(){

        fetch("http://localhost:63342/javascript/09-fetch/03-details/api.json")
            .then(function(response){
                return response.json();
            })
            .then(function(data){

                var temp = document.getElementById("tpl-hero").content.cloneNode(true);
                var i = document.getElementById("hero-id").value;
                temp.querySelector(".name").innerHTML = data.heroes[i-1].name;
                temp.querySelector(".alter-ego").innerHTML = data.heroes[i-1].alterEgo;
                temp.querySelector(".powers").innerHTML = data.heroes[i-1].abilities;

                document.getElementById("target").appendChild(temp);
})
})
})();
