/*
* @Author: denghaiyang
* @Date:   2017-01-14 13:57:39
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-14 14:02:30
*/

'use strict';

var name = "Abe Lincoln"
var re = /^(\w+)\s(\w+)/
var newname = name.replace(re, '$2, $1')

console.log(newname)