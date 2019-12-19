/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        var greeting;
        var hour = new Date().getHours();
    if (hour < 18) {
        greeting = "Good day";
    }
        else {
            greeting = "Good evening";
        }

        document.getElementById("target").innerHTML = greeting;





    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"



:: making var greeting en time, and if else statement







    // your code here
    // reading stuff

})();
