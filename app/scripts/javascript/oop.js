/* 
* @Author: ocean
* @Date:   2015-11-07 22:58:40
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-19 19:31:25
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
	intersection: function(o, p){=
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


function FirstVaild(overLength, init){
	// 定义最终返回对象，初始两个值，一个对象总容量，一个是当前长度
	var ret = {
		overLength: overLength,
		size: Math.min(Object.keys(init).length, overLength) // 如果传入初始数据条数大于容量，取容量值
	}
	// 缓存数据
	var datas = Object.assign({}, init)

	// 定义属性的函数
	var _defineProperty = function(ret, key){
		Object.defineProperty(ret, key, {
			set: function(value){
				// 针对 o.key = value 的set方法
				if(!datas[key]) ret.size++
				datas[key] = value
			},
			get: function(){
				// 获取当前数据，如果当前数据有值，返回值并将当前属性值设置为undefined
				var res = undefined
				if(typeof datas[key] !== undefined){
					res = datas[key]
					ret.size--
					datas[key] = undefined
				}
				return res
			}
		})
	}

	// 将dirty初始化false，并定义每个属性的get/set
	Object.keys(init).slice(0, ret.size).map(function(key){
		_defineProperty(ret, key)
	})

	Object.assign(ret, {
		cache: function(key, value){
			if(this.size >= this.overLength){
				throw '内存已满，请扩展容量'
			}
			// 属性不存在，定义他，并且长度+1，属性存在但值不存在，长度+1
			if(!(key in datas)){
				_defineProperty(this, key)
				this.size++
			}else if(!datas[key]){
				this.size++
			}
			// 不论怎样，新值覆盖旧值
			datas[key] = value
			return this
		},
		// 删除属性直接把datas中的属性设置为undefined
		delete: function(key){
			datas[key] = undefined
			this.size--
			return this
		}
	})
	return ret
}