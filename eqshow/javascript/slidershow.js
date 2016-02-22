/* 
* @Author: ocean
* @Date:   2016-02-18 17:12:03
* @Last Modified by:   ocean
* @Last Modified time: 2016-02-19 18:12:27
*/

'use strict';

(function(W, $){
	var ww = $(W).width(),
		wh = $(W).height();

	var Eqshow = function(opts){
		this.$ele = $(opts.ele);
		this.$list = this.$ele.find('.main-page');
		this.startPos = {};
		this.movePos = {};
		this.endPos = {};
		this.mTop = 0;
		this.lock = true;
		this.index = 0;

		this.init();
	};

	Eqshow.version = '1.0.0';

	Eqshow.prototype.init = function(){

		this.slideEvent();
	};

	Eqshow.prototype.slideEvent = function(){
		var _this = this;

		this.$list.on('touchstart', function(e){
			_this.touchStart.call(_this, e, this);
		});
		this.$list.on('touchmove', function(e){
			_this.touchMove.call(_this, e, this);
		});
		this.$list.on('touchend', function(e){
			_this.touchEnd.call(_this, e, this);
		});
	};

	Eqshow.prototype.touchStart = function(event, _this){
		var s = event.originalEvent.changedTouches[0],
			$_this = $(_this);

		this.startPos = {
			x: s.clientX,
			y: s.clientY
		}

		$_this.css({

		});

		$_this.prev().css({
			top: - wh
		})

		$_this.next().css({
			top: wh
		});
	};

	Eqshow.prototype.touchMove = function(event, _this){
		var s = event.originalEvent.changedTouches[0],
			$_this = $(_this);

		this.movePos = {
			x: s.clientX,
			y: s.clientY
		}

		$_this.css({
			zIndex: 99
		});

		this.mTop = this.movePos.y - this.startPos.y;

		this.$list.each(function(k, v){
			if($(this).hasClass('ac')){
				this.lock = false;
			}
		});

		if(this.mTop < 0){
			if(this.lock){
				$_this.next().addClass('ac').css({
					zIndex: 100,
					display: 'block',
					top: wh + this.mTop
				})
			}
		}else if(this.mTop > 0){
			if(this.lock){
				$_this.prev().addClass('ac').css({
					zIndex: 100,
					display: 'block',
					top: - wh + this.mTop
				});
			}
		}



		event.preventDefault();
	};

	Eqshow.prototype.touchEnd = function(event, _this){
		var s = event.originalEvent.changedTouches[0],
			$_this = $(_this);

		this.endPos = {
			x: s.clientX,
			y: s.clientY
		}

		$('.ac').animate({
			top: 0
		});

	};

	W.Eqshow = Eqshow;

})(window, window.jQuery || window.Zepto);