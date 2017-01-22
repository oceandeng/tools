/*
* @Author: denghaiyang
* @Date:   2017-01-20 09:26:12
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-20 09:48:52
*/

'use strict';

console.info('%c section-4.6.js', 'color: #ff0')

/*
 * 阻止对对象的任何修改
 * Object.freeze()
 */
var test = {
	value1: 'one',
	value2: function(){
		return this.value1
	}
}

try{
	// 冻结对象
	Object.freeze(test)

	// 如下代码在严格模式中将会抛出一个错误
	test.value2 = 'two'

	// 因此，应该使用如下代码
	test.newProperty = 'value'

	var val = 'test'

	// 并且，应该使用如下代码
	Object.defineProperty(val, 'category', {
		get: function() {return val},
		set: function(value) {val = value},
		enumerable: true,
		configurable: true
	})
}catch(e){
	console.log(e)
}

console.log(test)
console.log(val)


/*
 * 限制性由弱到强
	Object.preventExtensions()
	Object.seal()
	Object.freeze()
*/
