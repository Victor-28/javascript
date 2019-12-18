/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.





function Calculation(victor) {
    var n1 = parseFloat(document.getElementById("op-one").value);
    var n2 = parseFloat(document.getElementById("op-two").value);

    var result;

    switch (victor) {

        case 'addition':
            result = n1+n2;
            break;
        case 'substraction':
            result = n1-n2;
            break;
        case 'multiplication':
            result = n1*n2;
            break;
        case 'division':
            result = n1/n2;
            break;

    }
            alert("the result is " + result);
}

(function() {
    return true;
})();
