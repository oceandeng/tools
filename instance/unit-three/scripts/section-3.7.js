/*
* @Author: denghaiyang
* @Date:   2017-01-17 14:14:14
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 14:46:11
*/

'use strict';

console.info('%c section-3.7', 'color: #ff0')

/*
 * 使用一个局部应用(partial application)减少冗余性
 */

function makeString(ldelim, str, rdelim){
	return ldelim + str + rdelim
}

function quoteString(str){
	return makeString('"', str, '"')
}
function barString(str){
	return makeString('-', str, '-')
}
function namedEntity(str){
	return makeString('&#', str, ';')
}

console.log(quoteString('apple'))
console.log(barString('apple'))
console.log(namedEntity(169))

/*
 * 一个函数工厂
 */
function partial(fn /*, args...*/){
	var args = [].slice.call(arguments, 1)

	return function(){
		return fn.apply(this, args.concat([].slice.call(arguments)))
	}
}

function add(a, b){
	return a + b
}
var add100 = partial(add, 100)
console.log(add100(14))

function  makeString(ldelim, rdelim, str){
	return ldelim + str + rdelim
}
var namedEntity = partial(makeString, '&#', ';')
console.log(namedEntity(169))

/*
 * 使用bind()来局部地提供参数
 */
var named = makeString.bind(undefined, '&#', ';')
console.log(named(169))