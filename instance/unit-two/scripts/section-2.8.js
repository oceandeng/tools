/*
* @Author: denghaiyang
* @Date:   2017-01-16 15:23:59
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 15:25:43
*/

'use strict';

console.info('%c section-2.8', 'color: #ff0')

var charSets = ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]

var newArray = charSets.filter(function(element){
	return (element !== '**')
})

console.log(newArray)