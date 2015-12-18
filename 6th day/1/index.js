alert("hello!");
var grid = new Array(1000);
for(var i = 0; i < grid.length; i++){
	grid[i] = new Array(1000);
}

firstSetup(grid);
var input = document.getElementById("input").innerHTML;


function firstSetup(matrix){
	for(var i = 0; i < matrix.length; i++){
		for(var j = 0; j < matrix[i].length; j++){
			matrix[i][j] = 0;
		}
	}
}

function turnOn(matrix, fromX, fromY, toX, toY){
	for(i = fromX; i <= toX; i++){
		for(j = fromY; j <= toY; j++){
			matrix[i][j] = 1;
		}
	}
}

function turnOff(matrix, fromX, fromY, toX, toY){
	for(i = fromX; i <= toX; i++){
		for(j = fromY; j <= toY; j++){
			matrix[i][j] = 0;
		}
	}
}

function toggle(matrix, fromX, fromY, toX, toY){
	for(i = fromX; i <= toX; i++){
		for(j = fromY; j <= toY; j++){
			if(matrix[i][j] === 0){
				matrix[i][j] = 1;
			}
			else if(matrix[i][j] === 1){
				matrix[i][j] = 0;
			}
		}
	}
}