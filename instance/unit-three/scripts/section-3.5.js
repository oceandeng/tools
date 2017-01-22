/*
* @Author: denghaiyang
* @Date:   2017-01-17 10:13:23
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 10:41:48
*/

'use strict';

console.info('%c section-3.5', 'color: #ff0')

/*
 * 在一个函数内部创建一个函数，让它们都访问该数据
 * 然后从外围函数返回内部函数。
 * 从另一个函数返回一个函数，当返回的函数使用外围函数的作用于的时候，这成为 闭包 (function closure)
 */
function greetingMaker(greeting){
	function addName(name){
		return greeting + ' ' + name
	}
	return addName
}

// 现在创建新的局部函数
var daytimeGreeting = greetingMaker('Good Day to you')
var nightGreeting = greetingMaker('Good Evening')

// 如果是白天
console.log(daytimeGreeting('ocean'))

// 如果是晚上
console.log(nightGreeting('deng'))

/*
 * 返回函数形成了一个闭包(closure)。Javascript闭包是一个函数，也是创建该函数的时候它所在的环境。
 * 
 */
function outer(x){
	return function(y){return x * y}
}

var multiThree = outer(3)
console.log(multiThree(2))
console.log(multiThree(3))

/*
 * 内存泄漏
 * 闭合引用
 */
function outerFunction(){
	var doc = document.getElementById('doc')
	var newObj = {'doc': doc}
	doc.newObj = newObj
}