/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // your code here
    document.getElementById("pass-one").addEventListener("input",function() {
        var input = document.getElementById("pass-one").value;
        var len = document.getElementById("pass-one").value.length;
        var pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8}$");
        if ( !pattern.test(input)){
            console.log("Must be 8 characters and minimum of 2 numbers");
        }
        else {
            document.getElementById("validity").innerHTML = "ok";
            console.log("Correct password");
        }

    });


