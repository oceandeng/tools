(function(global){
    'use strict'

    var bbArray = {}

    bbArray.concatArray = function(str, array){
        return array.map(function(element){
            return str + ' ' + element
        })
    }

    bbArray.splitArray = function(str, array){
        return array.map(function(element){
            var len = str.length + 1
            return element.substring(len)
        })
    }

    /**
    * 兼容所有模块化规范，应用到所有环境
    */
    if(typeof module !== 'undefined' && module.exports){
        module.exports = bbArray
    }else if(typeof define == 'function' && define.amd){
        define('bbArray', [], function(){
            return bbArray
        })
    }else{
        global.bbArray = bbArray
    }

})(this)
