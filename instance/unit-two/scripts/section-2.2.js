/*
* @Author: denghaiyang
* @Date:   2017-01-16 11:20:50
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 14:26:19
*/

'use strict';

console.info('%c section-2.2', 'color: #ff0')

// 用concat()和apply()将一个二维数据扁平化
// concat() 不会递归扁平化
var fruitarray = []
fruitarray[0] = ['strawberry', 'orange']
fruitarray[1] = ['lime', 'peach', 'banana', ['apple', 'pear']]
fruitarray[2] = ['tangerine', 'apricot']
fruitarray[3] = ['raspberry', 'kiwi']
// 扁平化数组
var newArray = fruitarray.concat.apply([], fruitarray)
console.log(newArray)