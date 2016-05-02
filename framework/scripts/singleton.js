/*
* @Author: ocean
* @Date:   2016-02-29 17:45:16
* @Last Modified by:   ocean
* @Last Modified time: 2016-03-01 15:21:58
*/

'use strict';

/******************************
--单例
*******************************/
var singleton = function(fn){
	var result;
	return function(){
		return result || (result = fn.apply(this, arguments));
	}
};

var createMark = singleton(function(options){
	var oDiv = document.createElement('div');
	oDiv.id = options.id;
	oDiv.style.width = options.width || '300px';
	oDiv.style.height = options.height || '300px';
	oDiv.style.background = options.background || 'red';

	return document.body.appendChild(oDiv);
});

createMark({
	id: 'mark'
});