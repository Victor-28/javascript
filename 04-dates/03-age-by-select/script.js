/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here


document.getElementById("run").addEventListener("click", function() {
    //Stored values of input in variables
    var birthDay = parseInt(document.getElementById("dob-day").value);
    var birthMonth = parseInt(document.getElementById("dob-month").value);
    var birthYear = (parseInt(document.getElementById("dob-year").value) - 1);
    var currentDate = new Date();
    //Calculating age
    var age = (currentDate.getFullYear() - birthYear);
    var month = (currentDate.getMonth() + 1);

    if ( month - birthMonth  ||  month == birthMonth && currentDate.getDate() < birthDay) {
        age--;
    }
    alert("Your age is " + age);
})


// this 4.3 was really scary so i asked help of other colleges,
