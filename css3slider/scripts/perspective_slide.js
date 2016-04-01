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
		lock: false;
	}

// -- 插件核心
	$.fn.perspectiveSlide = function(config){
		var config = $.extend({}, dConfig, config);
		var $_this = $(this);


	}

	function PerspectiveSlide(options){
		this.options = this.options;
	}

	PerspectiveSlide.prototype.init = function(){

	}

	



// -- 插件导出全局
	W.PerspectiveSlide = PerspectiveSlide;
	if(typeof define === "function"){
		define("perspectiveslide", [], function(){
			return PerspectiveSlide;
		})
	}

})(window, Zepto);