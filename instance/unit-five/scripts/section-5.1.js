/*
* @Author: denghaiyang
* @Date:   2017-01-20 11:07:24
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-20 11:12:57
*/

'use strict';

console.info('%c section-5.1', 'color: #ff0')

var demodiv = document.getElementById('demodiv')
var parent = demodiv.parentNode
var type = parent.nodeName
var children = demodiv.childNodes

var outputString = ''

if(demodiv.hasChildNodes){
	var children = demodiv.childNodes
	for(var i = 0, len = children.length; i < len; i++){
		outputString += 'has child' + children[i].nodeName + ' '
	}
}

console.log(outputString)