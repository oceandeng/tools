/*
* @Author: denghaiyang
* @Date:   2017-01-13 16:26:09
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-13 16:35:44
*/

'use strict';

var sentence = 'This is one sentence. This is a sentence with a list of items:' +
			'cherries, orange, apples, bananas. That was the list of items.'
var start = sentence.indexOf(':')
var end = sentence.indexOf('.', start + 1)
var listStr = sentence.substring(start + 1, end)
var fruits = listStr.split(',')

console.log(fruits)
// ["cherries", " orange", " apples", " bananas"]