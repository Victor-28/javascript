/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var slotOne = 460;
var slotTwo = "00";
var slotThree = "00";
var slotFour = "00";

//Generating random number
function genRandomNumbersSlotOne() {
    slotOne = Math.floor(Math.random() * ((499 - 460) + 1) + 460);
    document.getElementById("part-one").setAttribute("value", slotOne);
};

function genRandomNumbersSlotTwo() {
    slotTwo = Math.floor(Math.random() * 100);
    document.getElementById("part-two").setAttribute("value", slotTwo);
};

function genRandomNumbersSlotThree() {
    slotThree = Math.floor(Math.random() * 100);
    document.getElementById("part-three").setAttribute("value", slotThree);
};

function genRandomNumbersSlotFour() {
    slotFour = Math.floor(Math.random() * 100);
    document.getElementById("part-four").setAttribute("value", slotFour);
};

//Interval for generating number
var intervalOne = setInterval(genRandomNumbersSlotOne, 100);
var intervalTwo = setInterval(genRandomNumbersSlotTwo, 100);
var intervalThree = setInterval(genRandomNumbersSlotThree, 100);
var intervalFour = setInterval(genRandomNumbersSlotFour, 100);

//Let stop button listen.
document.getElementById("fix-part-one").addEventListener("click", function() {
    clearInterval(intervalOne);
    slotOne = document.getElementById("part-one").getAttribute("value");
    document.getElementById("target").innerHTML = "+0" + slotOne + "000000";
});

document.getElementById("fix-part-two").addEventListener("click", function() {
    clearInterval(intervalTwo);
    if (slotTwo < "10"){
        slotTwo = "0" + slotTwo;
    }
    slotTwo = document.getElementById("part-two").getAttribute("value");
    document.getElementById("target").innerHTML = "+0" + slotOne + slotTwo + "0000";
});

document.getElementById("fix-part-three").addEventListener("click", function() {
    clearInterval(intervalThree);
    if (slotThree < "10"){
        slotThree = "0" + slotThree;
    }
    slotThree = document.getElementById("part-three").getAttribute("value");
    document.getElementById("target").innerHTML = "+0" + slotOne + slotTwo + slotThree + "00";
});

document.getElementById("fix-part-four").addEventListener("click", function() {
    clearInterval(intervalFour);
    if (slotFour < "10"){
        slotFour = "0" + slotFour;
    }
    slotFour = document.getElementById("part-four").getAttribute("value");
    document.getElementById("target").innerHTML = "+0" + slotOne + slotTwo + slotThree + slotFour;
});

//making 4 variables for each boxes
//generating random numbers