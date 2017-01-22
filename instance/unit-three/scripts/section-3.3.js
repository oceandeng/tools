/*
* @Author: denghaiyang
* @Date:   2017-01-16 16:48:59
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 10:21:25
*/

'use strict';

console.info('%c section-3.3', 'color: #ff0')

var reverseArray = function(x, indx, str){
	return indx == 0 ? str : reverseArray(x, --indx, (str += ' ' + x[indx]))
}

var arr = ['apple', 'orange', 'peach', 'lime']
var str = reverseArray(arr, arr.length, '')
console.log(str)

var arr2 = ['car', 'boat', 'sun', 'computer']
str = reverseArray(arr2, arr2.length, '')
console.log(str)

// 斐波那契数列
var fibonacci = function(n){
	return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2)
}

// 求一个阶乘
function factorial(n){
	return n == 1 ? 1 : n * factorial(n - 1)
}

var orderArray = function(x, indx, str){
	return indx == x.length - 1 ? str : orderArray(x, ++indx, (str += x[indx] + ' '))
}

var arr = ['apple', 'orange', 'peach', 'lime']
var str = orderArray(arr, -1, '')