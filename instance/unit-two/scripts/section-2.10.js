/*
* @Author: denghaiyang
* @Date:   2017-01-16 15:38:53
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 16:22:47
*/

'use strict';

 var elemArray = new Object()
 var elem = document.forms[0].elements[0]
 elemArray[elem.id] = elem.value

 Object.keys(elemArray).forEach(function(key){
 	var value = elemArray[key]
 	console.log(value)
 })

 // 额外知识: dict模式
 var newMap = {}
 var key = 'toString'

 console.log(key in newMap)
 console.log(newMap[key])

 var secondMap = Object.create(null)
 console.log(key in secondMap)

 secondMap[key] = 'something diff'
 console.log(key in secondMap)
 console.log(secondMap[key])