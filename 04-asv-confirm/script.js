/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function getDetail() {

    var age = prompt(" age");
    var gender = prompt("gender");
    var town = prompt("town");
    var r = confirm("the age is" + age + "and gender is" + gender + " and town is " + town);

    if (r == true) {
        alert("Confirmed");
    } else {
        getDetail();
    }

}

    getDetail();
    // your code here


// i define d function getDetail and the use if alert statement and else