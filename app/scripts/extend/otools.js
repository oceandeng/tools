/* 
* @Author: ocean
* @Date:   2015-06-29 10:14:28
* @Last Modified by:   ocean
* @Last Modified time: 2015-08-30 20:53:58
*/

'use strict';
var ua = window.navigator.userAgent.toLowerCase();

var oTools = {
    charset: 'utf-8',
    // 版本检测
	isAndroid: /android/i.test(ua),
	isIOS: /iphone|ipad|ipod/i.test(ua),
	isWechat: /MicroMessenger/i.test(ua),
    // 检测是否支持 touch 事件
    clickEvent: "ontouchstart" in document.documentElement ? "touchstart" : "click",
    ranNum: Math.ceil(Math.random() * 1e10),
    timeNum: Date.now(),

    $: function(s){
        return document.querySelectorAll(s);
    },
    $$: function(s){
        return document.querySelector(s);
    },
    addDomLoaded: function(fn){
        if(document.addEventListener){
            document.addEventListener('DOMContentLoaded', function(){
                fn();
                document.removeEventListener('DOMContentLoaded');
            }, false);
        }
    },
    // cookie
    getcookie: function(name) {
        var cookie_start = document.cookie.indexOf(name);
        var cookie_end = document.cookie.indexOf(";", cookie_start);
        return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    },
    setcookie: function(cookieName, cookieValue, seconds, path, domain, secure) {
        var expires = new Date();
        expires.setTime(expires.getTime() + seconds);
        document.cookie = escape(cookieName) + '=' + escape(cookieValue)
                + (expires ? '; expires=' + expires.toGMTString() : '')
                + (path ? '; path=' + path : '; path=/')
                + (domain ? '; domain=' + domain : '')
                + (secure ? '; secure' : '');
    },
    //删除cookie
    unsetCookie: function(name) {
        document.cookie = name + "= ; expires=" + new Date(0);
    },
    // url操作
    getQuery: function(key) {
        var search = window.location.search;
        if (search.indexOf('?') != -1) {
            var params = search.substr(1).split('&');
            var query = {};
            var q = [];
            var name = '';

            for (i = 0; i < params.length; i++) {
                q = params[i].split('=');
                name = decodeURIComponent(q[0]);

                if (name.substr(-2) == '[]') {
                    if (!query[name]) {
                        query[name] = [];
                    }
                    query[name].push(q[1]);
                } else {
                    query[name] = q[1];
                }

            }
            if (key) {
                if (query[key]) {
                    return query[key];
                }

                return null;
            } else {
                return query;
            }
        }
    },
    // 清空字符串空格
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    // 判断是否是空对象
    isObjectEmpty: function(obj){
        for (i in obj){
            return false
        }
        return true;
    },
    // 字符串长度，中英文都是1个字符
    strlength: function(str) {
        return (/msie/.test(navigator.userAgent.toLowerCase()) && str.indexOf('\n') !== -1) ? str.replace(/\r?\n/g, '_').length : str.length;
    },
    // 截取字符串，中英文都是1个字节
    cutstr: function (str,len){
        var str_length = 0;
        var str_len = 0;  
            str_cut = new String();  
            str_len = str.length;  
        for(var i = 0;i<str_len;i++){  
            a = str.charAt(i);  
            str_length++;  
            if(escape(a).length > 4){
                //中文字符的长度经编码之后大于4  
                str_length++;  
            }  
            str_cut = str_cut.concat(a);  
            if(str_length>=len){
                str_cut = str_cut.concat("...");  
                return str_cut;  
            }  
        }  
        //如果给定字符串小于指定长度，则返回源字符串；  
        if(str_length<len){  
            return  str;  
        }  
    },
    //随机颜色
    randomColor: function(){
        var col = [0, 1, 2];
        col[0] = Math.random() * 100 + 155;
        col[0] = col[0].toFixed();
        col[1] = Math.random() * 100 + 155;
        col[1] = col[1].toFixed();
        col[2] = Math.random() * 100 + 155;
        col[2] = col[2].toFixed();
        var num = Math.floor(Math.random() * 3);
        col[num] = 0;
        return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ","; 
    },
    //指定范围随机数  selectForm(2, 10);
    selectForm(lowerValue, upperValue){
        var choices = upperValue - lowerValue + 1;
        return Math.floor(Math.random() * choices + lowerValue);
    } 
}

var OO = {
    // 判断属性是否来自原型
    hasPrototypeProperty: function(object, name){
        return !object.hasOwnproperty(name) && (name in object);
    }
}

//html5 动画
window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function(callback) {
            return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
        };
})();

window.cancelAnimationFrame = (function() {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function(id) {
            window.clearTimeout(id);
        };
})();

// html5 audio
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;