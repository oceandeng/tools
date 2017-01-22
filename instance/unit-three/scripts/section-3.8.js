/*
* @Author: denghaiyang
* @Date:   2017-01-17 14:51:33
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 16:32:59
*/

'use strict';

console.info('%c section-3.8', 'color: #ff0')

/*
 * 使用缓存计算(Memoization)
 */

// Memoized 函数
var fibonacci = (function(){
	var memo = [0, 1]
	var fib = function(n){
		var result = memo[n]
		if(typeof result != 'number'){
			result = fib(n - 1) + fib(n - 2)
			memo[n] = result;
		}
		return result
	}
	return fib
})()

// nonmemoized函数
var fib = function(n){
	return n < 2 ? n : fib(n - 1) + fib(n - 2)
}

// 运行nonmemo的函数，使用一个定时器
console.time('non-memo')
for(var i = 1; i <= 10; i++){
	console.log(i + " " + fib(i))
}
console.timeEnd('non-memo')

// 现在，运行memo的函数，使用一个定时器
console.time('memo')
for(var i = 1; i <= 10; i++){
	console.log(i + " " + fibonacci(i))
}
console.timeEnd('memo')