/* 
* @Author: ocean
* @Date:   2015-04-26 20:08:19
* @Last Modified by:   ocean
* @Last Modified time: 2015-08-11 11:18:02
*/

'use strict';
var canvastools = {

/**********************************圆角矩形************************************************/ 
        drawRoundRect :    function (cxt, x, y, width, height, radius){
            cxt.save();
            cxt.translate(x, y);
            canvastools.pathRoundRect(cxt, width, height,radius);
            cxt.strokeStyle = "block";
            cxt.stroke();
            cxt.restore();
        },
// 圆角填充矩形
        fillRoundRect :    function (cxt, x, y, width, height, radius, /*optional*/fillColor){

            if(2*radius > width || 2*radius > height){
                return;
            }

            cxt.save();
            cxt.translate(x, y);
            canvastools.pathRoundRect(cxt, width, height,radius);
            cxt.fillStyle = fillColor || "black";
            cxt.fill();
            cxt.restore();
        },
// 圆角描边矩形
        strokeRoundRect : function (cxt, x, y, width, height, radius, /*optional*/lineWidth, /*optional*/strokeColor){

            if(2*radius > width || 2*radius > height){
                return;
            }

            cxt.save();
            cxt.translate(x, y);
            canvastools.pathRoundRect(cxt, width, height,radius);
            cxt.lineWidth = lineWidth || 1;
            cxt.strokeColor = strokeColor || "black";
            cxt.stroke();
            cxt.restore();
        },
// 圆角矩形路径
        pathRoundRect :    function (cxt, width, height, radius){
            cxt.beginPath();
            cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
            cxt.lineTo(radius, height);
            cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
            cxt.lineTo(0, radius);
            cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2);
            cxt.lineTo(width - radius, 0);
            cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);
            cxt.closePath();
        },
/**********************************绘制五角星************************************************/ 
        drawStar : function (cxt, x, y, R, rot){

            cxt.save();            

            cxt.translate(x, y);
            cxt.rotate(rot/180 * Math.PI);
            cxt.scale(R, R);
            
            canvastools.starPath(cxt);

            cxt.fillStyle = "#fb3";
            // cxt.strokeStyle = "#fd5";
            // cxt.lineWidth = 3;
            // cxt.lineJoin = "round";

            cxt.fill();
            // cxt.stroke();
            //绘制出在（x, y）, 大小位R,旋转rot度的五角星
            //……
            
            cxt.restore();
        },
// 星星路径
        starPath : function (cxt){
            cxt.beginPath();
            for(var i = 0; i < 5; i++){
                cxt.lineTo(Math.cos((18 + i * 72)/180 * Math.PI),
                              -Math.sin((18 + i * 72)/180 * Math.PI));
                cxt.lineTo(Math.cos((54 + i * 72)/180 * Math.PI) * 0.5,
                              -Math.sin((54 + i * 72)/180 * Math.PI) * 0.5);
            }
            cxt.closePath();
        },
// 获取图片base64信息
        getBase64Image: function(img){
            var canvas = document.createElement('canvas');

            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);

            var dataURL = canvas.toDataURL('image/png');
            return dataURL;

            // return dataURL.replace('data:image/png;base64,', '');
        }

}