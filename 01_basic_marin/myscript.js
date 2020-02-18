var numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var results = "<tr><td colspan=\"11\" align=\"center\"><strong>Multiplication</strong></td></tr>\n<tr><td align=\"center\">&nbsp;</td><td align=\"center\"><strong>1</strong></td><td align=\"center\"><strong>2</strong></td><td align=\"center\"><strong>3</strong></td><td align=\"center\"><strong>4</strong></td><td align=\"center\"><strong>5</strong></td><td align=\"center\"><strong>6</strong></td><td align=\"center\"><strong>7</strong></td><td align=\"center\"><strong>8</strong></td><td align=\"center\"><strong>9</strong></td><td align=\"center\"><strong>10</strong></td></tr>\n";
for (var _i = 0, numbersList_1 = numbersList; _i < numbersList_1.length; _i++) {
    var i = numbersList_1[_i];
    results += '<tr><td align="right"><strong>' + i + '</strong></td>';
    for (var _a = 0, numbersList_2 = numbersList; _a < numbersList_2.length; _a++) {
        var j = numbersList_2[_a];
        results += '<td>' + i + ' x ' + j + ' = ' + (i * j) + '</td>';
    }
    results += '</tr>';
}
;
document.getElementById('hudriwudri').innerHTML = results;
