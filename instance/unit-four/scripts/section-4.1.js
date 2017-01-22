/*
* @Author: denghaiyang
* @Date:   2017-01-17 17:27:01
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 17:41:27
*/

'use strict';

console.info('%c section-4.1', 'color: #ff0')

function Tune(song, artist){
	var title = song;
	this.concat = function(){
		return title + " " + artist
	}
}

var happySongs = []
happySongs[0] = new Tune('Putting on the Ritz', 'Ella Fitzgerald')

console.log(happySongs[0].title)

console.log(happySongs[0].concat())


// 私有数据成员以下划线打头
function Tune(song, artist){
	var _title = song;
	this.concat = function(){
		return _title + " " + artist
	}
}
