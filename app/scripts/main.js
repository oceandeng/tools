'use strict';

requirejs.config({
    paths: {
    	fastclick: './extend/fastclick',
    	otools: './extend/otools',
        dialog: './extend/dialog'
    },
    shim: {

    }
});

require(['dialog', 'otools','fastclick'], function(){
	$('#splendid').on('click', function(){
		var html = $('#cn').html();

		Dialog({
			// 'msg':'网络有些繁忙，请耐心等待！', 
			// 'id': 'cn',
			'msg': html,
			'lock':true, 'width':'80%', 
			'animation':'animated bounceIn', 
			'onClose': function() {
				// 关闭回调
				// alert('aa');
			}
		});
	});

	console.log('\'Allo \'Allo!');

	// oTools.setcookie('name', 'ocean', 3000, null, "", null);

	console.log(oTools.strlength($('#en').text()));
	console.log(oTools.strlength($('#cn').text()));	
});

// 监测是touch事件
function handleTouchEvent(event){
	// 只跟踪一次
	if(event.touchs.length == 1){
		var output = document.getElementById("output");
		switch(event.type){
			case "touchstart":
				output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
				break;
			case "touchend":
				output.innerHTML += "<br>Touch ended (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
				break;
			case "touchmove":
				event.preventDefault();
				output.innerHTML += "<br>Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
				break;
		}
	}
}
// EventUtil.addHandler(document, "touchstart", handleTouchEvent);
// EventUtil.addHandler(document, "touchend", handleTouchEvent);
// EventUtil.addHandler(document, "touchmove", handleTouchEvent);
