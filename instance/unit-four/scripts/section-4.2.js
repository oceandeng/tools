/*
* @Author: denghaiyang
* @Date:   2017-01-17 17:43:27
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-18 15:09:28
*/

'use strict';

function Tune(song, artist){
	var _title = song;
	this.concat = function(){
		return _title + " " + artist
	}
}

Tune.prototype.addCategory = function(categoryName){
	this.category = categoryName
}

var str = 'one'
String.prototype.exclaim = function(){
	if(this.length == 0) return this
	return this + '!'
}
var str2 = 'two'
console.log(str.exclaim())
console.log(str2.exclaim())

String.prototype.trim = function(){
	return (this.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0] +$/, ""))
	// return (this.replace(/(^\s*)|(\s*$)/g, ''))
}


function Tune(title, artist){
	this.concatTitleArtist = function(){
		return title + ' ' + artist
	}
}

// 创建实例，打印出值
var happySong = new Tune('Putting on the Ritz', 'Ella Fitzgerald')

// 扩展该对象
Tune.prototype.addCategory = function(categoryName){
	this.category = categoryName
}

// 添加分类
happySong.addCategory('Swing')

// 把歌曲打印到一个新的段落
var song = 'Title and artist: ' + happySong.concatTitleArtist() + ' Category: ' + happySong.category

console.log(song)