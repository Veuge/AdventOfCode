var cities = [];
var adjencyMatrix = [];
var index = document.getElementById("values").innerHTML.split("\n");
console.log(index);

for(var i = 0; i < index.length; i++){
	var routes = index[i].split(" ");
	console.log(routes);
}