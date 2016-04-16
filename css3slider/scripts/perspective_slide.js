/*
* @Author: ocean_deng
* @Date:   2016-03-29 13:38:34
* @Last Modified by:   ocean_deng
* @Last Modified time: 2016-03-31 18:07:54
*/

(function(W, $){

// -- 默认配置项
	var dConfig = {
		width: '',
		height: '',
		lock: false
	}

// -- 导出为jQuery 或 Zepto 插件
/*	
	$.fn.perspectiveSlide = function(config){
		var config = $.extend({}, dConfig, config);
		var $_this = $(this);

		return $_this.each(function(){
			console.log($_this);
		});

	}
*/

	function PerspectiveSlide(options){
		this.options = options;
		this.slideBox = options.slideBox;

		this.init();
	};

	PerspectiveSlide.prototype.init = function(){
		this.initStyle();
	};

	PerspectiveSlide.prototype.initStyle = function(){
		// 获取slide列表
		this.slideList = findChild(findChild(this.slideBox).childNodes.item(0)).childNodes;

		setStyle(this.slideList[0], {
			'display': 'block',
			'zIndex': 99,
			'opacity': 1,
			'webkitTranform': 'scale(1)',
			'tranform': 'scale(1)'
		});
	};

	PerspectiveSlide.prototype.createDots = function(){

	};

	PerspectiveSlide.prototype.bindEvent = function(){

	};

	PerspectiveSlide.prototype.touchStartEvent = function(){

	};

	PerspectiveSlide.prototype.touchMoveEvent = function(){

	};

	PerspectiveSlide.prototype.touchEndEvent = function(){

	};


// private method

	// 去除空文本节点
	function findChild(ele){
		var ele_child = ele.childNodes;

		for(var i = 0; i < ele_child.length; i++){
			if(ele_child[i] && ele_child[i].nodeName == "#text"){
				ele.removeChild(ele_child[i]);
			}
		}
		return ele;
	}
	// 清空数组
	function emptyArray(arr){
		arr.splice(0, arr.length);
		return arr;
	};
	// 设置样式
	function setStyle(ele, prop){
		if(!ele){
			return false;
		}
		for(var i in prop){
			ele.style[i] = prop[i];
		}
	};


// -- 插件导出全局
	W.PerspectiveSlide = PerspectiveSlide;
	if(typeof define === "function"){
		define("perspectiveslide", [], function(){
			return PerspectiveSlide;
		})
	}

})(window, window.jQuery || window.Zepto);