// 'use strict';

require.config({
    paths: {
    	fastclick: './extend/fastclick',
    	otools: './extend/otools',
        dialog: './extend/dialog',
        validate: './extend/validate',
    	iscroll: './iscroll/iscroll',
    	loading: './extend/loading',
    	zepto: './zepto/zepto',
    	event: './zepto/event'
    },
    shim: {

    }
});

require(['dialog', 'otools', 'fastclick', 'iscroll', 'loading', 'zepto', 'event'], function(){

// Dialog + iscroll type popup
	$('#splendid').on('click', function(){
		var html = $('.wrapper').html(),
			path = 'images/close.png';

		Dialog({
			// 'msg':'网络有些繁忙，请耐心等待！',
			'id': 'wrapper',
			'type': 'popup',
			// 'msg': html,
			'lock':true,
			'width':'100%',
			'height': '100%',
			'closeImg': path,
			'animation':'animated rotateInDownLeft',
			'onReady': function(){
				// alert('big popup');
				var myScroll;
				(function(){
					myScroll = new IScroll('#wrapper', {
						scrollbars: true,
						mouseWheel: true,
						interactiveScrollbars: true,
						shrinkScrollbars: 'scale',
						fadeScrollbars: true,
						bounce: false
					});
				})();
			},
			'onClose': function() {
				// 关闭回调
				// alert('close popup');
			}
		});
	});

// Dialog type alert
	$('#alert').on('click', function(){

		// Dialog('aaaa');
		Dialog({
			'type': 'alert',
			'msg': 'aaa',
			'width': '60%',
			'showButtons': true,
			'cancelButton': false,
			'contentStyle': {
                'background': 'rgba(0, 0, 0, .8)',
                'color': '#fff',
                'margin': '0 auto',
                'min-height': '60px',
                'padding': '10px',
                'border-radius': '5px'
			}
		});
	});

	$('#loading').on('click', function(){
		Dialog({
			'id': 'canvas',
			'type': 'loading',
			'time': 1000
		})
	});

	console.log('\'Allo \'Allo!');

	// oTools.setcookie('name', 'ocean', 3000, null, "", null);

	console.log(oTools.strlength($('#en').text()));
	console.log(oTools.strlength($('#cn').text()));
	
	$(function(){
		$('<canvas id="canvas"></canvas>').appendTo('body');

		$('#canvas').css({
			'border-radius':'5px',
			'background':'rgba(0,0,0,0.8)'
		});
		loading({
			"id": "canvas",
			"width": 5,
			"height": 20
		});
	});

console.log(oTools.getAbsoluteURL('public'));

});


// require.js define模块DEMO

// require(['definedemo'], function(define){
// 	define.con('define demo');
// });

// define(function(){
// 	return {
// 		con: function(str){
// 			console.log(str);
// 		}
// 	}
// });