/*
* @Author: denghaiyang
* @Date:   2017-01-16 15:26:19
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 15:31:16
*/

'use strict';

console.info('%c section-2.9', 'color: #ff0')

// 测试函数
function testValue(element, index, array){
	var textExp = /^[a-zA-Z]+$/
	return textExp.test(element)
}

var elemSet = ['**', 123, 'aaa', 'abc', '-', 46, 'AAA']

// 运行测试
var result = elemSet.every(testValue)
console.log(result)

var elemSet2 = ['elephant', 'lion', 'cat', 'dog']
result = elemSet2.some(testValue)
console.log(result)