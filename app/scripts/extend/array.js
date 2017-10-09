/*
* @Author: ocean
* @Date:   2015-10-28 15:08:54
* @Last Modified by:   ocean
* @Last Modified time: 2015-10-28 15:09:04
*/

'use strict';

// 清空数组
/**
 * [emptyArray description]
 * @param  {[type]} arr [清空数组]
 */
function emptyArray(arr){
    arr.splice(0,arr.length);
}
/**
 * 检测是否为数组
 */
function isArray(value){
    if(typeof Array.isArray === "function"){
        return Array.isArray(value)
    }else{
        return Object.prototype.toString.call(value) === "[Object Array]";
    }
}
