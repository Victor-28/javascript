/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        var points = ["2","4","14","10","90","23","16"];
        alert("this is my array " + points);
           var number = points.sort(function(a, b){return a-b});
            alert("this is my array " + number);




        // your code here

    });


