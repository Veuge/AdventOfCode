var input = document.getElementById("input").innerHTML;
var text = input.split("\n");
var total1 = 0;
var total2 = 0

console.log(text);
for(var i = 0; i < text.length; i++){
	var string = text[i];
	console.log(text[i].length + "-" + eval(string).length);
	total1 += text[i].length - eval(string).length;
	total2 += JSON.stringify(string).length - eval(string.length);
}
console.log(total1 + " " + total2);