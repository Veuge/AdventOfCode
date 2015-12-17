var string = document.getElementById("case").innerHTML;
var operations = string.split('\n');
var sum = 0;
for(var j = 0; j < operations.length; j++){
	var coef = [];
	coef = operations[j].split('x');
	coef = coef.sort(function(a, b){return a-b});
	console.log(coef);
	sum += (2*coef[0] + 2*coef[1]) + coef[0]*coef[1]*coef[2];
	console.log((2*coef[0] + 2*coef[1]) + coef[0]*coef[1]*coef[2]);
	console.log(sum);
}
console.log(sum);