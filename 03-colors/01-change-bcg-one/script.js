/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    function changeBackground(color) {
        document.body.style.background = color;
    }

    window.addEventListener("click", changeBackground());


    function changeBackground(color) {
        document.body.style.background = color;
    }

    window.addEventListener("click",function() { changeBackground('green') });

    function changeBackground(color) {
        document.body.style.background = color;
    }

    window.addEventListener("click",function() { changeBackground('yellow') });
    function changeBackground(color) {
        document.body.style.background = color;
    }

    window.addEventListener("click",function() { changeBackground('blue') });
    // your code here


