var string = document.getElementById("case").innerHTML;
alert(string);
var operations = string.split('\n');
var sum = 0;
for(var j = 0; j < operations.length; j++){
	var coef = [], process = [], min = 999999;
	coef = operations[j].split('x');
	process[0] = coef[0] * coef[1];
	process[1] = coef[1] * coef[2];
	process[2] = coef[0] * coef[2];
	for(var i = 0; i < process.length; i++){
		if(process[i] < min)
			min = process[i];
	}
	sum += 2 * process[0] + 2 * process[1] + 2 * process[2] + min;
}
console.log(sum);