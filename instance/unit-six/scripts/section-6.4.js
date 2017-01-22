/*
* @Author: denghaiyang
* @Date:   2017-01-22 11:14:36
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-22 13:48:11
*/

'use strict';

var charSet = ['**', 'bb', 'cb', '**', 'cc', '**', 'dd', '**']

function tpl(element){
	return (element != '**')
}

var newArray = charSet.filter(function(element){
	return element != '**'
})

var newArray = charSet.filter(tpl)