/*
* @Author: ocean
* @Date:   2015-06-28 19:33:40
* @Last Modified by:   ocean
* @Last Modified time: 2016-03-29 10:03:08
*/

//弹出消息框 基于zepto
function alertmess(str){
    var html = '<div class="mess">' + str + '</div>',
        fullW = $(window).width(),
        fullH = $(window).height(),
        twidth = parseInt(fullW * 0.6);

    if($('.mess').size() < 1){
        $('body').append(html);

        $('.mess').css({
            'width' : twidth,
            'min-height': '30px',
            'line-height' : '30px',
            'font-size': '16px',
            'marginLeft' : parseInt(-twidth/2-10),
            'background' : '#333',
            'color' : '#fff',
            'z-index' : 99,
            'position' : 'fixed',
            'left' : '50%',
            'top' : '40%',
            'border-radius' : '5px',
            'text-align' : 'center',
            'padding' : '5px 10px'
        }).animate({'opacity' : 1});

        setTimeout(function(){
            $('.mess').remove();
        }, 1500);
    }
}

function placeholder() {
    if (!("placeholder" in document.createElement("input"))) {
      $('*[placeholder]').each(function () {
        $this = $(this);
        var placeholder = $(this).attr('placeholder');
        if ($(this).val() === '') {
          $this.val(placeholder);
        }
        $this.bind('focus', function () {
          if ($(this).val() === placeholder) {
            this.plchldr = placeholder;
            $(this).val('');
          }
        });
        $this.bind('blur', function () {
          if ($(this).val() === '' && $(this).val() !== this.plchldr) {
            $(this).val(this.plchldr);
          }
        });
      });
    }
}

// 字符串长度
var strLen = (function() {
    var trim = function(chars){
        return (chars || "").replace( /^(\s|\u00A0)+|(\s|\u00A0)+$/g, "" );
    }

    return function(_str, _model) {
        _str = trim(_str),
            _model = _model || "Ch";    //默认是中文
        var _strLen = _str.length;      //获取字符长度
        if(_strLen == 0){               //如果字符为0直接返回
            return 0;
        }
        else{
            var chinese = _str.match(/[\u4e00-\u9fa5]/g);               //匹配中文
//判断是什么模式
            return _strLen + (chinese && _model == "Ch" ? chinese.length: 0);
        }
    };
})();

// -- 获取所有父节点
function getParents(dom){
    var parents = [];
    while(dom.parentNode){
        parents.push(dom.parentNode);
        dom = dom.parentNode;
    }
    return parents;
}

// -- 根据屏幕长宽比算图片长宽
function resizeImg(bgImg) {
    var imgwidth = bgImg.width();
    var imgheight = bgImg.height();

    var winwidth = $(window).width();
    var winheight = $(window).height();

    var widthratio = winwidth/imgwidth;
    var heightratio = winheight/imgheight;

    var widthdiff = heightratio*imgwidth;
    var heightdiff = widthratio*imgheight;

    if(heightdiff>winheight) {
        bgImg.css({
            width: winwidth+'px',
            height: heightdiff+'px'
        });
    } else {
        bgImg.css({
            width: widthdiff+'px',
            height: winheight+'px'
        });
    }
}

/**
 * canvas 功能检测
 */
function isCanvasSupported(){
    var elem = document.createElement('canvas')
    return !!(elem.getContext && elem.getContext('2d'))
}
/**
 * navigator.geolocation 功能检测
 */
function isGeolocationSupported(){
    return navigator.geolocation
}
