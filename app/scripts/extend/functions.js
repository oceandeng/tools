/* 
* @Author: ocean
* @Date:   2015-06-28 19:33:40
* @Last Modified by:   ocean
* @Last Modified time: 2015-08-24 17:56:27
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