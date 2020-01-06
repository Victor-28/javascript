/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = parseInt(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("target").innerHTML = "You have clicked the button " + localStorage.clickcount;
    }
}
document.getElementById("increment").addEventListener("click", clickCounter);

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
    // your code here



// unsing getElemnetById to fetch the id in the html page
// eventListener in the process of clicking
//
