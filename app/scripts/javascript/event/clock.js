/*
* @Author: ocean_deng
* @Date:   2016-07-10 22:29:24
* @Last Modified by:   ocean_deng
* @Last Modified time: 2016-07-18 14:00:56
*/

'use strict';
whenReady(function(){
	var clock = document.getElementById("clock");
	var icon = new Image();
	icon.src = "../../../images/dnd-icon.jpg";

	// 没分钟显示一次时间
	function displayTime(){
		var now = new Date();
		var hrs = now.getHours(),
			mins = now.getMinutes();
		if(mins < 10) mins = "0" + mins;
		clock.innerHTML = hrs + ":" + mins;
		setTimeout(displayTime, 60000);
	}
	displayTime();

	clock.draggable = true;

	clock.ondragstart = function(event){
		var event = event || window.event;
		var dt = event.dataTransfer;

		dt.setData("Text", Date() + "\n");
		if(dt.setDragImage) dt.setDragImage(icon, 0, 0);
	};
})