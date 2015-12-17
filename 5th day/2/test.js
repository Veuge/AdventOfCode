alert("here we are");
var input = document.getElementById("input").innerHTML;
var string = input.split('\n');
var count = 0;

for(var j = 0; j < string.length; j++){
	if(repeatedPair(string[j]) && repeatedBetween(string[j])){
		count++;
		console.log(string[j]);
	}
}
alert(count);

function repeatedPair(string){
	var pair = "";
	for(var i = 0; i < string.length - 2; i++){
		pair = string.substring(i, i+2);
		var doub = string.indexOf(pair, i+2);
		if(doub >= 0){
			return true;
			break;
		}
	}
	return false;
}

function repeatedBetween(string){
	for(var i = 0; i < string.length - 2; i++){
		if(string.charAt(i) === string.charAt(i+2)){
			return true;
			break;
		}
	}
	return false;
}
/* 'use strict';
let input = document.getElementById('input').textContent.trim().split('\n'),
    countNice = regexes => input.filter(s => regexes.every(re => re.test(s))).length;

console.log('Part 1:', countNice([/(?:[aeiou].*?){3}/, /(\w)\1/, /^(?:(?!ab|cd|pq|xy).)+$/]));
console.log('Part 2:', countNice([/(\w{2}).*?\1/, /(\w).\1/])); */