
let numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let results: string = `<tr><td colspan="11" align="center">Multiplication</td></tr>
<tr><td align="center">&nbsp;</td><td align="center"><strong>1</strong></td><td align="center"><strong>2</strong></td><td align="center"><strong>3</strong></td><td align="center"><strong>4</strong></td><td align="center"><strong>5</strong></td><td align="center"><strong>6</strong></td><td align="center"><strong>7</strong></td><td align="center"><strong>8</strong></td><td align="center"><strong>9</strong></td><td align="center"><strong>10</strong></td></tr>
`;


for (let i of numbersList) {
	results += '<tr><td align="right"><strong>' + i + '</strong></td>'
	for (let j of numbersList) {
		results += '<td>' + i + ' x ' + j + ' = ' + (i*j) + '</td>';
	}
	results += '</tr>';
};

document.getElementById('hudriwudri').innerHTML = results;
