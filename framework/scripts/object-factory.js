/*
* @Author: ocean
* @Date:   2016-03-01 15:21:44
* @Last Modified by:   ocean
* @Last Modified time: 2016-03-01 15:42:10
*/
'use strict';

/******************************
--工厂模式
--- 这段代码来自es5的new和构造器的相关说明， 可以看到，所谓的new， 本身只是一个对象的复制和改写过程， 而具体会生成什么是由调用ObjectFactory时传进去的参数所决定的。
*******************************/
function A(name){
	this.name = name;
}

function ObjectFactory(){
	var obj = {},
		Constructor = Array.prototype.shift.apply(arguments);

	obj.__proto__ = typeof Constructor === "number" ? Object.prototype : Constructor.prototype;
	var ret = Constructor.apply(obj, arguments);
	return typeof ret === "object" ? ret : obj;
}

var a = ObjectFactory(A, 'ocean');
console.log(a.name);