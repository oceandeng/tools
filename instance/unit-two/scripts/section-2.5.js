/*
* @Author: denghaiyang
* @Date:   2017-01-16 14:32:40
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 15:23:18
*/

'use strict';

console.info('%c section-2.5', 'color: #ff0')

var charSets = ['ab', 'bb', 'cd', 'ab', 'cc', 'ab', 'dd', 'ab']

function replaceElement(element, index, array){
	if(element == 'ab') array[index] = '**'
	// (element == 'ab') && (array[index] == '**')
}
// 对每个数组的元素应用一个函数
charSets.forEach(replaceElement)

console.log(charSets)
// ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]