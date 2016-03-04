/* 
* @Author: ocean
* @Date:   2015-08-22 13:49:48
* @Last Modified by:   ocean
* @Last Modified time: 2015-08-22 13:55:23
*/

'use strict';

var globalVariable = 'This is global variable';

function globalFunction(){
	var localVariable = 'This is local variable';

	console.log('Visit global/local variable');
	console.log(globalVariable);
	console.log(localVariable);

	globalVariable = 'This is changed variable';
	console.log(globalVariable);

	function localFunction(){
		var innerLocalVariable = 'This is inner local variable';

		globalVariable = 'Visit global/local/innerLocal variable';
		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLocalVariable);
	}

	localFunction();
}

globalFunction();