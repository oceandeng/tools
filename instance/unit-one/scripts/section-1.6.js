/*
* @Author: denghaiyang
* @Date:   2017-01-13 16:15:03
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-13 17:25:27
*/

'use strict';

var searchString = "Now is the time and this is the time and that is the time"
var pattern = /t\w*e/g
var matchArray;

var str = ""

// 用regexp exec 检查模式，如果不为空，处理它
while((matchArray = pattern.exec(searchString)) != null){
	str += "at " + matchArray.index + " we found " + matchArray[0] + "\n"
}

console.log(str)

// at 7 we found the
// at 11 we found time
// at 28 we found the
// at 32 we found time
// at 49 we found the
// at 53 we found time

var re = /a(p+).*(pie)/ig
var result = re.exec("The apples in the apple pie are tart")
console.log(result)
console.log(re.lastIndex)


