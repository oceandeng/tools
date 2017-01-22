/*
* @Author: denghaiyang
* @Date:   2017-01-17 10:42:04
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 14:11:27
*/

'use strict';

console.info('%c section-3.6', 'color: #ff0')

// function someFunc(){
// 	var args = Array.prototype.slice.call(arguments)
// 	console.log(args)
// }

// 简化写法
function someFunc(){
	var args = [].slice.call(arguments) // 浅复制一个数组
	console.log(args)
	console.log(Array.isArray(args))
	console.log(Array.isArray(arguments))
}

someFunc(1, 2, 3, 4, 5)

function sumRounds(){
	var args = [].slice.call(arguments)

	return args.reduce(function(val1, val2){
		return parseInt(val1, 10) + parseInt(val2, 10)
	})
}

var sum = sumRounds('2.3', 4, 5, '16', 18.1)
console.log(sum)

var nlElems = document.querySelectorAll('div')
var aElems = [].slice.call(nlElems)
aElems.forEach(function(elem){
	console.log(elem.textContent)
})