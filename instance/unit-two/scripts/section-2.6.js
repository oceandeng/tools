/*
* @Author: denghaiyang
* @Date:   2017-01-16 15:13:40
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-16 15:15:38
*/

'use strict';

// 用querySelector找到第二列中的所有单元格
var cells = document.querySelectorAll('td + td')

[].forEach.call(cells, function(cell){
	sum += parseFloat(cell.firstChild.data)
})

