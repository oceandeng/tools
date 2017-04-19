(function(G, $){
    /**
     * 返回顶部
     * @speed {number} 动画速度
     */
    var goTopDefault = {
        speed: 500
    }
    $.fn.goTop = function(opt){
        var $w = $(G),
            opt = $.extend({}, goTopDefault, opt),
            $ele = this;

        $w.scroll(function(e){
            var sc = $w.scrollTop()

            if(sc > 100) $ele.removeClass('go-top-none')
            else $ele.addClass('go-top-none')
        })
        $ele.click(function(event) {
            $('body, html').animate({
                scrollTop: 0
            }, opt.speed)
        });
    }

    /**
     * tool-bar 移入展开
     * @params dom元素 id
     */
    var toolBarToogleDefault = {
        onlineConnect: '#onlineConnect',
        sPhone: '#sPhone',
        hotActive: '#hotActive',
        freeCall: '#freeCall'
    }
    $.fn.toolBarToogle = function(opt){
        var opt = $.extend({}, toolBarToogleDefault, opt),
            $ele = this,
            $onlineConnect = $ele.find(opt.onlineConnect),
            $sPhone = $ele.find(opt.sPhone),
            $hotActive = $ele.find(opt.hotActive),
            $freeCall = $ele.find(opt.freeCall);

        // 线上沟通
        publicToogleFn({
            $ele: $onlineConnect,
            sonClass: '.t-i',
            toogleClass: '.f-s'
        })

        // 售前电话
        publicToogleFn({
            $ele: $sPhone,
            sonClass: '.p-t-i',
            toogleClass: '.p-t-i-i'
        })

        // 热门活动
        publicToogleFn({
            $ele: $hotActive,
            hideNew: true,
            sonClass: '.h-a-i',
            toogleClass: '.h-a-i-i'
        })

        // 免费回呼
        publicToogleFn({
            $ele: $freeCall,
            sonClass: '.f-t-i',
            toogleClass: '.f-t-i-i',
            needhide: false
        })

        /**
         * 公共伸缩函数
         * @param obj {object}
         * @param obj.$ele {object} 最外层jquey对象
         * @param obj.hideNew {boolean} 隐藏提示图标
         * @param obj.sonClass {string} 子元素
         * @param obj.toogleClass {string} 显示隐藏元素
         * $param obj.needhide {boolean} 是否用隐藏
         */
        function publicToogleFn(obj){
            var $sonClass = obj.$ele.find(obj.sonClass),
                $toogleClass = $sonClass.find(obj.toogleClass),
                left = $toogleClass.outerWidth();

            $sonClass.on('mouseenter', function(){
                obj.hideNew && $sonClass.find('.new-icon').hide()
                $toogleClass.show()
                $sonClass.stop().animate({
                    left: -left
                }).addClass('active')
            }).on('mouseleave', function(){
                $sonClass.stop().animate({
                    left: 0
                }, function(){
                    $sonClass.removeClass('active')
                    if(obj.needhide !== false){
                        $toogleClass.hide()
                    }
                    obj.hideNew && $sonClass.find('.new-icon').show()
                })
            })
        }
    }

})(window, jQuery);
