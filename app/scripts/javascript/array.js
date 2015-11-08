/* 
* @Author: ocean
* @Date:   2015-11-08 23:16:03
* @Last Modified by:   ocean
* @Last Modified time: 2015-11-08 23:23:42
*/

'use strict';
/*************************************
// >> 多维数组
**************************************/
var table = new Array(10);
for(var i = 0; i < table.length; i++){
	table[i] = new Array(10);
}

for(var row = 0; row < table.length; row++){
	for (var col = 0; col < table[row].length; col++){
		table[row][col] = row * col;
	}
}

var product = table[5][7];
console.log(product);

/*************************************
// >> sort()
**************************************/
var a = ["ant", "Bug", "cat", "Dog"];
var arr1 = a.sort();
var arr2 = a.sort(function(s, t){
	var a = s.toLowerCase();
	var b = t.toLowerCase();
	if(a < b) return -1;
	if(a > b) return 1;
	return 0;
});
console.log(arr2);