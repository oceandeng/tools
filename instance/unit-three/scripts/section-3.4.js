/*
* @Author: denghaiyang
* @Date:   2017-01-17 09:38:02
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 10:21:18
*/

'use strict';

console.info('%c section-3.4', 'color: #ff0')

/**
 * 使用一个定时器和回调函数来防止代码阻塞
 * setTimeout()定时器设置为0，只是创建一个事件并将其放到了执行队列的末尾
 * 将耗时的事件放入到定时器的进程中，我们在等待进程完成的同时不再阻塞
 */
function factorial(n){
	console.log(n)
	return n == 1 ? 1 : n * factorial(n-1)
}

function noBlock(n, callback){
	setTimeout(function(){
		var val = factorial(n)
		if(callback && typeof callback == 'function'){
			callback(val)
		}
	})
}

console.log("Top of the morning to you")

noBlock(3, function(n){
	console.log('first call ends with ' + n)
	noBlock(n, function(m){
		console.log('final result is ' + m)
	})
})

var tst = 0
for(i = 0; i < 10; i++){
	tst += i
}

console.log('value of tst is ' + tst)

noBlock(4, function(n){
	console.log('end result is ' + n)
})

console.log('not doing too much')