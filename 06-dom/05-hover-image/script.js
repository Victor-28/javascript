/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




var image = document.getElementById("hover-example");
image.onmouseover = function() {  image.src = "../../family.jpg"; }
image.onmouseout = function() {  image.src = "../../Dishes.jpeg"; }



// hover not working yet
// this another code not working yet