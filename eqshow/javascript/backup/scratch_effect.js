/* 
* @Author: ocean
* @Date:   2016-02-17 15:58:13
* @Last Modified by:   ocean
* @Last Modified time: 2016-02-17 15:58:15
*/

'use strict';

(function() {
	var totimes = 200;
	var pageinfo, audioObj;
	window.addScratchEffect = function(obj, pages, pageNum) {
		pageInfo = pages;
		audioObj = obj;
		a = 20;
		nums = 0;
		var percentage;
		var wrapperWidth = $('.m-img').width(), wrapperHeight = $('.m-img').height();
		var canvas = document.createElement('canvas');
		$(canvas).prependTo('#page' + pageNum).attr('class', 'cas scratch-cas page_effect lock').attr('id', 'can' + pageNum).attr('style', 'z-index: 1000');
		var ctx = canvas.getContext("2d");
		canvas.width = wrapperWidth;
		canvas.height = wrapperHeight;
		var img = new Image();
		if(pages[pageNum-1].properties.image){
			num = pageNum;
			if(pages[pageNum-1].properties.tip) {
				var tip = document.createElement('div');
				$(tip).attr('id', 'tip' + pageNum).attr('class', 'tip').prependTo('#page' + pageNum);
				$(tip).html(pages[pageNum-1].properties.tip);
			}
			img.src = pages[pageNum-1].properties.image.path;
			percentage = pages[pageNum-1].properties.percentage.value;
		}else if(pages[pageNum-1].properties.scratch) {
			num = pageNum;
			if(pages[pageNum-1].properties.scratch.tip) {
				var tip = document.createElement('div');
				$(tip).attr('id', 'tip' + pageNum).attr('class', 'tip').prependTo('#page' + pageNum);
				$(tip).html(pages[pageNum-1].properties.scratch.tip);
			}
			img.src = pages[pageNum-1].properties.scratch.image.path;
			percentage = pages[pageNum-1].properties.scratch.percentage.value || pages[pageNum-1].properties.scratch.percentage;
		}
		//img.crossOrigin="anonymous";
		//img.src = pages[pageNum-1].properties.scratch.image.path;
		(function test(img, ctx, canvas, pageNum, percentage) {
			img.onload = function() {
				// ctx.globalAlpha=0.8;
				if(pages[pageNum-1].properties.image || !pages[pageNum-1].properties.scratch.hasOwnProperty('opacity')) { // 没有透明度选项
	                ctx.globalAlpha = 0.8;
	            } else {
	                ctx.globalAlpha = 1 - parseFloat(pages[pageNum-1].properties.scratch.opacity).toFixed(2);
	            }
				ctx.drawImage(this,0,0,canvas.width,canvas.height);
				renderPage(eqShow, pageNum, pageInfo);
				for(var i = 0; i < pageInfo[pageNum-1].elements.length; i++) {
					var $elem = eqShow.selectElement(pageInfo[pageNum-1].elements[i].id);
			        eqxCommon.bindTrigger($elem, pageInfo[pageNum-1].elements[i]);
			    }
				clipImage(ctx, canvas, percentage, pageNum, img);
			};
		})(img, ctx,canvas, pageNum, percentage);	
	};


	function clipImage(ctx, canvas, percentage, pageNum, img) {
		
		var hastouch = "ontouchstart" in window?true:false,
			tapstart = hastouch?"touchstart":"mousedown",
			tapmove = hastouch?"touchmove":"mousemove",
			tapend = hastouch?"touchend":"mouseup";

		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineWidth = a*2;
		ctx.globalCompositeOperation = "destination-out";
		var imageReg = new RegExp("assets");

		canvas.addEventListener(tapstart , function(e){
			//clearTimeout(timeout)
			$('#tip' + pageNum).remove();
			e.preventDefault();
			x1 = hastouch?e.targetTouches[0].pageX:e.pageX-$('#can' + pageNum).offset().left;
			y1 = hastouch?e.targetTouches[0].pageY:e.pageY-$('#can' + pageNum).offset().top;

			startX = x1;
			startY = y1;
			
			canvas.addEventListener(tapmove , tapmoveHandler);
			canvas.addEventListener(tapend , function(){
				canvas.removeEventListener(tapmove , tapmoveHandler);
				
			});

			function tapmoveHandler(e){
				moveArea();
				nums++;
				//clearTimeout(timeout);
				e.preventDefault();
				x2 = hastouch?e.targetTouches[0].pageX:e.pageX-$('#can' + pageNum).offset().left;
				y2 = hastouch?e.targetTouches[0].pageY:e.pageY-$('#can' + pageNum).offset().top;

				//ctx.save();
				ctx.moveTo(x1,y1);
				ctx.lineTo(x2,y2);

				ctx.stroke();
				//ctx.restore();
				
				x1 = x2;
				y1 = y2;
			}
		});

		function moveArea() {
			timeout = setTimeout(function(){
				if(nums >= 300 * percentage){
				   	$(canvas).fadeOut(500,function() {
						setTimeout(function(){
							$(canvas).removeClass('lock').addClass('unlock');
						},500);
						$('#audio_btn').css('opacity', 1);
						if(pageNum == 1) {
							eqShow.playVideo(audioObj);
						}	
					});
				   nums = 0;
				}
			},totimes);

		}
	}
})();