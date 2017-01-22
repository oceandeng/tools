/*
* @Author: denghaiyang
* @Date:   2017-01-20 09:49:09
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-20 10:24:58
*/

'use strict';

console.info('%c section-4.7', 'color: #ff0')

var jscbObject = {

	// 返回元素
	getElem: function(identifier){
		return document.getElementById(identifier)
	},
	stripslashes: function(str){
		return str.replace(/\\/g, '')
	},
	removeAngleBrackets: function(str){
		return str.replace(/</g,'&lt;').replace(/>/g, '&gt;')
	}
}

var sample = '<div>testing\changes</div>'

var result = jscbObject.stripslashes(sample)
result = jscbObject.removeAngleBrackets(result)

document.querySelector('#result').innerHTML = result
console.log(result)

/*
 * singleton 单体
 * 针对一个对象只能创建一个实例
 */
var mySingleton = (function(){

	// 实例存储了该单体的引用
	var instance;
	function init(){
		// 单体
		// 私有方法和变量
		function privateMethod(){
			console.log('I am private')
		}

		var privateVariable = 'I`m also private'
		var privateRandomNumber = Math.random();

		return {
			// 公有方法和变量
			publicMethod: function(){
				console.log('The public can see me!')
			},
			publicProperty: 'I am also public',
			getRandomNumber: function(){
				return privateRandomNumber
			}
		}
	}

	return {
		// 如果存在的话，就获取该单体实例
		// 如果存在的话，就创建一个单体实例
		getInstance: function(){
			if(!instance){
				instance = init()
			}
			return instance
		}		
	}
})()

var singleA = mySingleton.getInstance()
var singleB = mySingleton.getInstance()
console.log(singleA, singleB)
console.log(singleA.getRandomNumber() === singleB.getRandomNumber())
