/*
* @Author: denghaiyang
* @Date:   2017-01-16 11:14:34
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 14:26:02
*/

'use strict';

console.info('%c section-2.1', 'color: #ff0')
// indexOf, lastIndexOf
var animals = new Array('dog', 'cat', 'seal', 'elephant', 'walrus', 'lion', 'cat')
console.log(animals.indexOf('cat'))
console.log(animals.lastIndexOf('cat'))

console.log(animals.indexOf('cat', 2))
console.log(animals.lastIndexOf('cat', 4))

// ES6 findIndex
var nums = [2, 4, 19, 15, 183, 6, 7, 1, 1]
var over = nums.findIndex(function(element){
	return (element > 100)
})
console.log(nums[over])