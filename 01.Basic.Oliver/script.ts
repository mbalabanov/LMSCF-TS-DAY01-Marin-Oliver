let numberList: number[] = [1,2,3,4,5,6,7,8,9,10];

let result: string = `<tr><td colspan="11" align="center">Multiplication</td></tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>`;

for (let i of numberList) {
	result += "<tr><td><strong>" + i + "</strong></td>"
	for (let y of numberList){
		result += ("<td>" + y + " x " + i + " = " + (y*i) + "</td>")
	}
	result += "</tr>"
};

document.getElementById("multipli").innerHTML = result;
