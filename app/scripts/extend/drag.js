(function(){

    var gThis = null;

    // 面向对象 父类
    function Drag(id){
        this.disX = 0;
        this.disY = 0;
        this.oDiv = document.getElementById(id);

        this.init();
    }

    Drag.prototype.init = function(){
        var _this = this;

        this.oDiv.addEventListener('touchstart', function(event){
            _this.startFn(event);
            return false;
        }, false);

        _this.setStyle();        
    }

    Drag.prototype.setStyle = function(){
        this.oDiv.style.position = 'fixed';
        this.oDiv.style.left = 0 + 'px';
        this.oDiv.style.top = 0 + 'px';
    }

    Drag.prototype.startFn = function(event){
        var _this = this;
        var touchPos = event.changedTouches[0];
        gThis = _this;

        _this.disX = touchPos.clientX - _this.oDiv.offsetTop;
        _this.disY = touchPos.clientY - _this.oDiv.offsetLeft;

        // document.addEventListener('touchmove', _this.touchFn, false);
        // document.addEventListener('touchend', _this.touchFn, false);

        document.addEventListener('touchmove', function(event){
            _this.touchFn.apply(_this, arguments);
        }, false);
    }

    Drag.prototype.touchFn = function(event){
        // var _this = this;

console.log(this);
console.log(event);

        switch(event.type){
            case 'touchmove':
                var touchPos = event.changedTouches[0];
// console.log(touchPos.clientX - gThis.disX);

                gThis.oDiv.style.left = touchPos.clientX - gThis.disX + 'px';
                gThis.oDiv.style.top = touchPos.clientY - gThis.disY + 'px';

                event.preventDefault();
                break;
            case 'touchend':
                gThis.endFn();
                break;
        }
    }

    Drag.prototype.endFn = function(){
        var _this = this;

        document.removeEventListener('touchmove', _this.touchFn, false);
        document.removeEventListener('touchend', _this.touchFn, false);
    }

    return window.Drag = Drag;
})();

/*
// 面向对象 父类
function Drag(id){
    var _this = this;
    this.disX = 0;
    this.disY = 0;
    this.oDiv = document.getElementById(id);
    this.oDiv.style.position = 'fixed';

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
*/

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
*/