/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here

document.getElementById("slider").addEventListener("change", function () {
    var valueSlider=document.getElementById("slider").value;
    document.getElementById("target").innerHTML= "0" + valueSlider;

});



// displaying the value for target beginning with 0