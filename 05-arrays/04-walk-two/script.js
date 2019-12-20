/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    document.getElementById("run").addEventListener("click", function() {
    var value = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise"
    ];
    var text = "";
    var i;
    for (i = 0; i < value.length; i++) {
        text += (i +" ");
    }


    console.log(text);
    // your code here

});
