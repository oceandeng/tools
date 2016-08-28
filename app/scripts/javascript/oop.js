/* 
* @Author: ocean
* @Date:   2015-11-07 22:58:40
* @Last Modified by:   ocean_deng
* @Last Modified time: 2016-08-28 19:06:05
*/

'use strict';

/*************************************
// >> 通过原型继承创建一个新对象
**************************************/
function inherit(p){
	if(p == null) throw TypeError();
	if(Object.create){
		return Object.create(p);
	}
	var t = typeof p;
	if(t != "object" && t != "function") throw TypeError();
	function F(){};
	F.prototype = p;
	return new F();
}	

/*************************************
// >> getter/setter 存取器属性
**************************************/
// >> 2D 笛卡尔点坐标
var p = {
	x: 1.0,
	y: 1.0,

	get r() {return Math.sqrt(this.x*this.x + this.y*this.y)},
	set r(newvalue) {
		var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
		var ratio = newvalue/oldvalue;
		this.x *= ratio;
		this.y *= ratio;
	},
	get theta() {return Math.atan2(this.y, this.x)}
}


var q = inherit(p);
q.x = 1, q.y = 1;
console.log(q.r);
console.log(q.theta);

// >> 这个对象产生严格自增的序列号
var serialnum = {
	$n: 0,

	get next(){return this.$n++;},
	set next(n){
		if(n >= this.$n) this.$n = n;
		else throw "序列号的值不能比当前值小";
	}
}


// 返回随机数的存取器属性 random.octet 0-255之间
var random = {
	get octet() {return Math.floor(Math.random() * 256)},
	get uint16() {return Math.floor(Math.random() * 65536)},
	get int16() {return Math.floor(Math.random() * 65536) - 32768}
}
console.log(random.uint16);

/*************************************
// >> 属性的特性
// >> ECMAscript5 定义了 “ 属性描述符”
// >> Object.getOwnPropertyDescriptor();
// >> Object.getPrototypeOf(); 获取继承属性
// >> Object.defineProperty(); 设置属性  Object.defineProperties()
**************************************/

Object.getOwnPropertyDescriptor({x: 1}, "x");
// 返回 {value: 1, writable: true, enumerable: true, configurable: true}

Object.getOwnPropertyDescriptor(random, "octet");
// 返回 {get: /*func*/, set: undefined, enumerable: true, configurable: true}

var o = {};
Object.defineProperty(o, "x", {value: 1, writable: true, enumerable: false, configurable: true});

/*************************************
// >> 复制属性的特性
// >> 给Object.prototype添加一个不可枚举的extend()方法
**************************************/
// Object.defineProperty(Object.prototype, "extend", {
// 	writable: true,
// 	enumerable: false,
// 	configurable: true,
// 	value: function(o){
// 		var names = Object.getOwnPropertyNames(o);

// 		for(var i = 0; i < names.length; i++){
// 			if(names[i] in this) continue;
// 			var desc = Object.getOwnPropertyDescriptor(o, name[i]);
// 			Object.defineProperty(this, names[i], desc);
// 		}
// 	}
// });

/*************************************
// >> 原型属性
**************************************/
var p = {x: 1};
var o = Object.create(p);
p.isPrototypeOf(o);						// => true
Object.prototype.isPrototypeOf(o);		// => ture

/*************************************
// >> 类属性
**************************************/
// >> classof()函数 返回任意对象的类
function classof(o){
	if(o === null) {return "Null"};
	if(o === undefined) {return "Undefined"};
	return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classof("aa"));

/*************************************
// >> 序列化对象	stringify() parse()
**************************************/
var o = {x: 1, y: {z: [false, null, ""]}};
var s = JSON.stringify(o);
var p = JSON.parse(s);

var _ = {
	extend: function(o, p){
		for(var prop in p){
			o[prop] = p[prop];
		}
		return o;
	},
	merge: function(o, p){
		for(var prop in p){
			if(o.hasOwnProperty(prop)) continue;
			o[prop] = p[prop];
		}
		return o;
	},
	restrict: function(o, p){
		for(var prop in o){
			if(!(porp in p)) delete o[porp];
		}
		return o;
	},
	subtract: function(o, p){
		for(var prop in p){
			delete o[prop];
		}
		return o;
	},
	union: function(o, p){
		return this.extend(this.extend({}, o), p);
	},
	intersection: function(o, p){
		return this.restrict(this.extend({}, o), p);
	},
	keys: function(o){
		if(typeof o !== "object") throw TypeError();
		var result = [];
		for(var prop in o){
			if(o.hasOwnproperty(prop)) result.push(prop);
		}
		return result;
	}
};