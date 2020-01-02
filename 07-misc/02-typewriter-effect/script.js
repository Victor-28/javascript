/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var i=0;
var text = document.getElementById("target").innerHTML;
console.log(text);

function typing () {
    if (i <text.length)
    {
        document.getElementById("material").innerHTML += text.charAt(i);
        i++;
        SetTimeout(typing,70);

    }
}

typing();









// your code here