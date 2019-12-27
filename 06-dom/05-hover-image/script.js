/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




    document.getElementById("image").addEventListener("mouseover", mouseOver);
    document.getElementById("image").addEventListener("mouseout", mouseOut);

    var imageTag = document.getElementById("image");
    var dataHover = imageTag.getAttribute("src");
    var dataHover = imageTag.getAttribute("data-hover");


    function mouseOver() {
        imageTag.setAttribute("src", dataHover);
    }

    function mouseOut(){
        imageTag.setAttribute("src", source);
    }

    // your code here

};
// hover not working yet