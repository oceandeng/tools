/*
* @Author: denghaiyang
* @Date:   2017-01-19 20:44:45
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-20 09:47:04
*/

'use strict';

console.info('$c section-4.5', 'color: #ff0')

var Test = {
	value1: 'one',
	value2: function(){
		return this.value1
	}
}

try {
	Object.preventExtensions(Test)
	// Object.seal(Test)
	// 如下代码失败，并且在严格模式中抛出一个,TypeError

console.log(Object.isExtensible(Test))

	Test.value3 = 'test'
}catch(e){
	console.log(e)
}