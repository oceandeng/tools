/*
* @Author: denghaiyang
* @Date:   2017-01-16 16:31:15
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 16:39:09
*/

'use strict';

console.info('%c section-3.1', 'color: #ff0')

console.log(a)	//	不报错，声明提升
var a;

console.log(test())
function test(){
	return 'hello'
}

// console.log(test1())	//	报错，声明提升了，但没有实例化，所以test1并不是一个函数
// var test1 = function(){
// 	return 'hello'
// }