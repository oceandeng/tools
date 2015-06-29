/*
* @Author: ocean
* @Date:   2015-06-29 15:11:30
* @Last Modified by:   ocean
* @Last Modified time: 2015-06-29 15:13:17
*/

'use strict';

// 面向对象 父类
function Drag(id){
    var _this = this;
    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);

    this.oDiv.onmousedown = function(ev){
        _this.fnDown(ev);
        return false;
    };
}

Drag.prototype.fnDown = function(ev){
        var _this = this;
        var oEvent = ev || event;

        this.disX = oEvent.clientX-this.oDiv.offsetLeft;
        this.disY = oEvent.clientY-this.oDiv.offsetTop;

        document.onmousemove = function(ev){
            _this.fnMove(ev);
        };
        document.onmouseup = function(){
            _this.fnUp();    
        };
}
Drag.prototype.fnMove = function (ev){
            var oEvent = ev || event;

            this.oDiv.style.left = oEvent.clientX-this.disX+'px';
            this.oDiv.style.top = oEvent.clientY-this.disY+'px';
}
Drag.prototype.fnUp = function (){
            document.onmousemove=null;
            document.onmouseup=null;
}

// 面向对象 子类 .call()对象冒充继承
function LimitDrag(id){
    Drag.call(this, id);
}
for(var i in Drag.prototype){
    LimitDrag.prototype[i]=Drag.prototype[i];
}

LimitDrag.prototype.fnMove = function(ev){
    var oEvent = ev || event;
    var l = oEvent.clientX-this.disX;
    var t = oEvent.clientY-this.disY;

    if(l < 0){
        l=0;
    }else if(l > document.documentElement.clientWidth-this.oDiv.offsetWidth){
        l = document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }

    this.oDiv.style.left = l +'px';
    this.oDiv.style.top = t +'px';
}


/*
// 面向过程
window.onload=function(){
    var oDiv = document.getElementById('div1');

    oDiv.onmousedown=function(ev){
        var oEvent = ev || event;

        var disX = oEvent.clientX-oDiv.offsetLeft;
        var disY = oEvent.clientY-oDiv.offsetTop;

        document.onmousemove = function(ev){
            var oEvent = ev || event;

            oDiv.style.left = oEvent.clientX-disX+'px';
            oDiv.style.top = oEvent.clientY-disY+'px';
        };

        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        };
    }
}