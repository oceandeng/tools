/*
* @Author: denghaiyang
* @Date:   2017-01-16 10:28:32
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 10:33:08
*/

'use strict';

var firstDate = new Date()

setTimeout(function(){
	doEvent(firstDate)
}, 25000);

function doEvent(firstDate){
	var secondDate = new Date()
	var diff = secondDate - firstDate
	console.log(diff)
}