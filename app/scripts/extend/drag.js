'use strict';

var DragDrop = function(){

    var dragdrop = new EventTarget(),
        dragging = null,
        diffX = 0,
        diffY = 0,
        diffW = 0,
        diffH = 0;

    var winW = window.screen.width,
        winH = window.screen.height;

    function handleEvent(event){

        // 获取位置对象和目标
        var eventPos = event.changedTouches[0];

        var target = event.target;

        // 确定事件类型
        switch(event.type){

            case "touchstart":
                if(target.className.indexOf("draggable") > -1){
                    dragging = target;
                    diffX = eventPos.clientX - target.offsetLeft;
                    diffY = eventPos.clientY - target.offsetTop;
                    diffW = target.clientWidth - diffX;
                    diffH = target.clientHeight - diffY;
                    dragdrop.fire({type: "dragstart", target: dragging, x: eventPos.clientX, y: eventPos.clientY});
                }
                break;
            case "touchmove":
                if(dragging !== null){
                    // 指定位置
                    var posLeft = eventPos.clientX - diffX;
                    var posRig = winW - (eventPos.clientX + diffW);
                    var posTop = eventPos.clientY - diffY;
                    var posBtm = winH - (eventPos.clientY + diffH);

                    dragging.style.left =  posLeft < 0 ? 0 : posRig < 0 ? winW - dragging.clientWidth + 'px' : posLeft + "px";

                    dragging.style.top = posTop < 0 ? 0 : posBtm < 0 ? winH - dragging.clientHeight + 'px' : posTop + "px";

                    // 触发自定义事件
                    dragdrop.fire({type: "drag", target: dragging, x: eventPos.clientX, y: eventPos.clientY});
                }

                event.preventDefault();
                break;
            case "touchend":
                dragdrop.fire({type: "dragend", target: dragging, x: eventPos.clientX, y: eventPos.clientY});
                dragging = null;
                break;
        }
    };

    // 公共接口
    dragdrop.enable = function(){
            EventUtil.addHandler(document, "touchstart", handleEvent);
            EventUtil.addHandler(document, "touchmove", handleEvent);
            EventUtil.addHandler(document, "touchend", handleEvent);
    },
    dragdrop.disable = function(){
            EventUtil.removeHandler(document, "touchstart", handleEvent);
            EventUtil.removeHandler(document, "touchmove", handleEvent);
            EventUtil.removeHandler(document, "touchend", handleEvent);
    }

    return dragdrop;
}