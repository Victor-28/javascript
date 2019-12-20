/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function() {
    var fruits = [
        "apple",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cherry"
    ];

        fruits.pop();
        fruits.shift();
        fruits.push("Kiwi");
        fruits.unshift("banana");
    console.log(fruits);




});

// using pop, shift,push and unshiftS