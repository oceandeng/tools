/* 
* @Author: ocean
* @Date:   2015-06-28 19:33:40
* @Last Modified by:   ocean
* @Last Modified time: 2015-06-28 20:03:23
*/

'use strict';

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