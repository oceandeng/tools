/*
* @Author: denghaiyang
* @Date:   2017-01-16 15:16:29
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 15:22:50
*/

'use strict';

console.log('%c section-2.7', 'color: #ff0')

var decArray = [23, 255, 122, 5, 16, 99]

var hexArray = decArray.map(function(element){
	return element.toString(16)
})

console.log(hexArray)