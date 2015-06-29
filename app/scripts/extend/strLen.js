/* 
* @Author: ocean
* @Date:   2015-06-29 10:19:46
* @Last Modified by:   ocean
* @Last Modified time: 2015-06-29 10:19:51
*/

'use strict';

var strLen = (function() {
    var trim = function(chars){
        return (chars || "").replace( /^(\s|\u00A0)+|(\s|\u00A0)+$/g, "" );
    }

    return function(_str, _model) {
        _str = trim(_str),
            _model = _model || "Ch";	//默认是中文
        var _strLen = _str.length;	    //获取字符长度
        if(_strLen == 0){			    //如果字符为0直接返回
            return 0;
        }
        else{
            var chinese = _str.match(/[\u4e00-\u9fa5]/g);				//匹配中文
//判断是什么模式
            return _strLen + (chinese && _model == "Ch" ? chinese.length: 0);
        }
    };
})();