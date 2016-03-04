/*
* @Author: ocean
* @Date:   2016-03-01 16:02:48
* @Last Modified by:   ocean
* @Last Modified time: 2016-03-02 10:52:26
*/

'use strict';
/******************************
--观察者模式
--- 发布者-订阅者模式
*******************************/

// loadImage(imgArr, function(){
// 	Map.init();
// 	Game.init();
// 	Sound.init();
// });

// loadImage.listen('ready', function(){
// 	Map.init();
// 	Game.init();
// 	Sound.inig();
// });

var Events = function(){
	var listen = null,
		one = null,
		remove = null,
		trigger = null,
		obj = {},
		__this = this;

	listen = function(key, eventfn){
		var stack,
			_ref;

		stack = (_ref = obj[key]) != null ? _ref : obj[key] = [];
		return stack.push(eventfn);
	};

	one = function(key, enevtfn){
		remove(key);
		return listen(key, eventfn);
	};

	remove = function(){
		
	}
};