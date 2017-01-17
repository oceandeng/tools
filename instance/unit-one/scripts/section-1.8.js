/*
* @Author: denghaiyang
* @Date:   2017-01-16 09:39:43
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 09:51:08
*/

'use strict';

var pieceOfHtml = '<p>This is a <span>paragraph</span></p>'
pieceOfHtml = pieceOfHtml.replace(/</g, "&lt;")
pieceOfHtml = pieceOfHtml.replace(/>/g, "&gt;")
console.log(pieceOfHtml)

// document.querySelector('#result').innerHTML = pieceOfHtml