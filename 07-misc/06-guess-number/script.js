/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    var UserNumber=100;
    var RandomNumber=Math.floor(Math.random()* UserNumber )+ 1;
    console.log(RandomNumber);
    var MaxTries = 5;
    var counter = 0;


        while(Attempt !== RandomNumber) {
            var Attempt = prompt("Pick a number between 1 and " + UserNumber);
            counter += 1;
            console.log(counter);

            if (counter > MaxTries) {
                alert("you have no more tries");
                break
            }

            if (Attempt === RandomNumber) {
                alert("congratulations");
                alert("The Random Number was" + RandomNumber);
                alert("It pick you"+counter+"Attempt To Have The Correct Number");
            }


        }














































    // your code here

