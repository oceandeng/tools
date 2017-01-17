/*
* @Author: denghaiyang
* @Date:   2017-01-16 11:10:13
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 11:13:13
*/

'use strict';

// 计算圆弧长度
// 圆弧的角度是120度， 圆的半径是2
var degress = 120
var radius = 2

var radians = degress * (Math.PI / 180)
var arclength = radians * radius

console.log(arclength)