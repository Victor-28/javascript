/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function(){
var a,b ;


    a = document.getElementById("op-one").value;
    b =document.getElementById("op-two").value;
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
       var Result= Number(a)+Number(b);
        alert("The sum is equal to"+ Result);
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var Result= a-b;
        alert("The sum is equal to" + Result);
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var Result= a*b;
        alert("The sum is equal to" + Result);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
       var Result =a/b;
        alert("the sum is equal to" + Result);
        // perform an division
    });




})();
