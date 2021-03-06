/* 
* @Author: ocean
* @Date:   2015-08-30 21:19:52
* @Last Modified by:   ocean
* @Last Modified time: 2015-09-05 16:51:14
*/

'use strict';

// 递归
var factorial = (function fn(num){
	if(num <= 1){
		return 1;
	}else{
		return num * fn(num - 1);
	}
})();

// 内存泄露
// 泄露 IE
function assignHandler(){
	var element = document.getElementById("someElement");
	element.onclick = function(){
		alert(element.id);
	}
}
// 解决
function assignHandler(){
	var element = document.getElementById("someElement");
	var id = element.id;

	element.onclick = function(){
		alert(id);
	}

	element = null;
}

// 构造函数和原型组合
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friend = ["lily", "meimei"];
}

Person.prototype = {
	constructor: Person,
	sayName: function(){
		console.log(this.name);
	}
}


// 动态原型模式

function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;

	// 方法 检测只初始化一次
	if(typeof this.sayName != "function"){
		Person.prototype.sayName = function(){
			console.log(this.name);
		}
	}
}