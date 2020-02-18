var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = "<tr><td colspan=\"11\" align=\"center\">Multiplication</td></tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>";
for (var _i = 0, numberList_1 = numberList; _i < numberList_1.length; _i++) {
    var i = numberList_1[_i];
    result += "<tr><td><strong>" + i + "</strong></td>";
    for (var _a = 0, numberList_2 = numberList; _a < numberList_2.length; _a++) {
        var y = numberList_2[_a];
        result += ("<td>" + y + " x " + i + " = " + (y * i) + "</td>");
        console.log(i + " i");
        console.log(y + " y");
    }
    result += "</tr>";
}
;
document.getElementById("multipli").innerHTML = result;
