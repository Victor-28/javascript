/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var html = "<table>";
    for (var i = 1; i < 11; i++) {
        html+="<tr>";
        for (var j = 1; j < 11; j++) {
            var multiplication = i * j;
            html += "<td>" + multiplication + "</td>";
        }
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("target").innerHTML = html;

})();
