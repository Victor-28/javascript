/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function decideCake() {
    var greeting ="";
    var cake=prompt("Do you want cake?");

    if (cake == "yes") {
        greeting = "congratulations";
    } else {
        greeting = "More cake for me then";
    }
    alert(greeting);
}



  // your code here
decideCake();

// getting how if statement works and i define my function function decideCake