/*
* @Author: denghaiyang
* @Date:   2017-01-19 20:30:08
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-19 20:43:31
*/

'use strict';

var data = {}

Object.defineProperty(data, 'type', {
	value: 'primary',
	enumerable: true
})

console.log(data.type)
try {
	data.type = 'secondary'
}catch(e){
	console.log(e)
}
console.log(data.type)

Object.defineProperty(data, 'id', {
	value: 1,
	writable: true
})

console.log(data.id)
data.id = 300;
console.log(data.id)

for(var prop in data){
	console.log(prop)
}


var data = {}
var group = 'history'

Object.defineProperty(data, 'category', {
	get: function(){
		return group
	},
	set: function(value){
		group = value
	},
	enumerable: true,
	configurable: true
})

console.log(data.category)
group = 'math'

console.log(data.category)
data.category = 'spanish'
console.log(data.category)
console.log(group)