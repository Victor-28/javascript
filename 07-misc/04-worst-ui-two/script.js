/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// your code here

var x=460
document.getElementById("slider").addEventListener("change", function () {

    x++;
    if (x>499){
        x=460;
    }
};

    var t=00
document.getElementById("slider").addEventListener("change", function () {

    t++;
    if (x>99)
        t = 00;
};

    var y=00
document.getElementById("slider").addEventListener("change", function () {

        y++;
     if (x>99)
         y=00;
};

    var z=00
document.getElementById("slider").addEventListener("change", function () {

        z++;
       if(z>99)
        z=00;
};


