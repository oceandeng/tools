/*
* @Author: denghaiyang
* @Date:   2017-01-16 16:35:04
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 16:48:46
*/

'use strict';

console.info('%c section-3.2', 'color: #ff0')

function otherFunction(x, y, z){
	x(y, z)
}

var param = function(arg1, arg2){console.log(arg1 + ' ' + arg2)}
otherFunction(param, 'Hello', 'World')

var param = function inner(){return typeof inner}
console.log(param())	//function

// 求和
var nums = [1, 45, 2, 16, 9, 12]
var sum = 0
for(var i = 0, len = nums.length; i < len; i ++){
	sum += nums[i]
}
console.log(sum)

// 函数式编程
var nums = [1, 45, 2, 16, 9, 12]
var sum = nums.reduce(function(n1, n2){return n1 + n2})
console.log(sum)