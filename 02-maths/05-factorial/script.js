/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        var  number = parseFloat(document.getElementById( "number").value);

            if(number == 0 || number ==1)
                return 1;

            for (var i = number - 1; i >= 1; i--){
                number=number*i;
            }
            alert("The factorial is: " + number);
    });


})();


//factoria my understanding is 5! :4:4:3:2:1   anf using for loop