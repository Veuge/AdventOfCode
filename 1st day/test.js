alert("here we are");
var string = "20x3x11";

function getValues(var x){
	var l = "", w = "", h = "";
	for (var i = 0; i < x.length; i++){
		if(x.charAt(i) !== 'x')
			if(l = "")
				l = l + x.charAt(i);
	}
}