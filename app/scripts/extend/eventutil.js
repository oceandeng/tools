/* 
* @Author: ocean
* @Date:   2015-06-28 19:13:05
* @Last Modified by:   ocean
* @Last Modified time: 2015-06-28 19:32:32
*/

'use strict';

var EventUtil = {
	// 添加事件绑定
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent("on" + type, handler);
		}else{
			element["on" + type] = handler;
		}
	},
	// 获取事件对象
	getEvent : function(event){
		return event ? event : window.event;
	},
	// 获取事件返回的目标
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	// 组织默认行为
	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	// 删除事件绑定
	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent("on" + type, handler);
		}else{
			element["on" + type] = null;
		}
	},
	// 组织冒泡
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	// 获取滚轮信息
	getWheelDelta: function(event){
		if(event.wheelDelta){
			// return (client.engine.opera && client.engine.opera < 9.5 ? -event.whellDelta : event.wheelDelta);
			return event.wheelDelta;
		}else{
			return -event.delta *40;
		}
	},
	// 获取键盘码
	getCharCode: function(event){
		if(typeof event.charCode == "number"){
			return event.charCode;
		}else{
			return event.keyCode;
		}
	}
}