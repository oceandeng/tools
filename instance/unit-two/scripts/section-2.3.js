/*
* @Author: denghaiyang
* @Date:   2017-01-16 13:42:53
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 14:26:34
*/

'use strict';

console.info('%c section-2.3', 'color: #ff0')

var animals = new Array('dog', 'cat', 'seal', 'walrus', 'lion', 'cat')

// 从数组删除元素
animals.splice(animals.indexOf('walrus'), 1)

// 换入新的元素
animals.splice(animals.indexOf('cat'), 1, 'monkey')

// dog, cat, seal, lion, monkey
console.log(animals.toString())


var animals = ['cat', 'walrus', 'lion', 'cat']

// 换入新的元素
animals.splice(-1, 1, 'monkey');


var animals = ['cat', 'walrus', 'lion', 'cat']

// 删除第二个索引的元素以后的所有元素
animals.splice(2)


var animals = ['cat', 'walrus', 'lion', 'cat']

// 用两个元素替代第二个索引的元素
animals.splice(2, 1, 'zebra', 'elephant')


var charSets = ['ab', 'bb', 'cd', 'ab', 'cc', 'ab', 'dd', 'ab']

// 替换元素
while(charSets.indexOf('ab') != -1){
	charSets.splice(charSets.indexOf('ab'), 1, '**')
}
console.log(charSets)	//	["**", "bb", "cd", "**", "cc", "**", "dd", "**"]

// 删除新元素
while(charSets.indexOf('**') != -1){
	charSets.splice(charSets.indexOf('**'), 1)
}
console.log(charSets)	//	["bb", "cd", "cc", "dd"]
