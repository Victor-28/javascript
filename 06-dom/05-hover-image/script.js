/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




document.getElementById("kick").addEventListener("mouseover", mouseOver);
document.getElementById("kick").addEventListener("mouseout", mouseOut);
var image = document.getElementById("kick");
var source= image.getAttribute("src");
var hover= image.getAttribute("data-hover");

function mouseOver(){
    image.setAttribute("src",hover);
}
function mouseOut(){
    image.setAttribute("src",source);
}


//