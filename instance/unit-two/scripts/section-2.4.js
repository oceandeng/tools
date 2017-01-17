/*
* @Author: denghaiyang
* @Date:   2017-01-16 14:18:49
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 14:29:58
*/

'use strict';

console.info('%c section-2.4', 'color: #ff0')

var animals = ['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog', 'rabbit', 'goose']
var domestic = animals.slice(4, 7)
console.log(domestic)

var mArray = []
mArray[0] = ['apple', 'pear']
mArray[1] = ['strawberry', 'lemon']
mArray[2] = ['lime', 'peach', 'berry']

var nArray = mArray.slice(1, 2)
console.log(mArray[1])

nArray[0][0] = 'raspberry'
console.log(nArray[0])
console.log(mArray[1])