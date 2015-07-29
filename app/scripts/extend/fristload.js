/* 
* @Author: ocean
* @Date:   2015-07-21 10:01:15
* @Last Modified by:   ocean
* @Last Modified time: 2015-07-21 10:04:03
*/

'use strict';

(function(){

	var ImageLoader = window["ImageLoader"] = function(){
		this.images = [];
		this.counter = {
			success: 0,
			failed: 0
		};
		this.percentNode = document.querySelector(".newloading-ptxt");
	};

	ImageLoader.prototype = {
		add: function(url){
			this.images.push(url);
			return this;
		},
		notify: function(key){
			this.counter[key]++;

			var counter = this.counter;
			var size = this.images.length;
			var loaded = counter.success + counter.failed;
			var percent = Math.min(((loaded / size) * 100).toFixed(0), 100);

			if(this.percentNode){
				this.percentNode.innerHTML = (percent + "%");
			}

			ImageLoader.complete = (loaded >= size);

			if(ImageLoader.complete){
				var wappLoading = document.querySelector('.webapp-loading');
				wappLoading.style.display = 'none';
			}
		},
		load: function(){
			var imgs = this.images;
			var size = imgs.length;

			ImageLoader.startTime = (new Date().getTime());

			for(var i = 0; i < size; i++){
				ImageLoader.loader(this, imgs[i]);
			}
		}
	};

	ImageLoader.start = 0;
	ImageLoader.complete = false;
	ImageLoader.Cache = {};

	ImageLoader.loader = function(imageLoader, url){
		var img = new Image();

		img.onload = function(){
			imageLoader.notify("success");

			img = null;
		};

		img.onerror = function(){
			imageLoader.notify("failed");

			img = null;
		}

		img.src = url;
	};
	ImageLoader.timeout = function(){
		var end = (new Date().getTime());
		var diff = end - ImageLoader.start;

		return (diff >= 5000);
	};

	ImageLoader.getImageLoader = function(name){
		var loader = ImageLoader.Cache[name] || (ImageLoader.Cache[name] = new ImageLoader());

		return loader;
	}

})();


var loader = ImageLoader.getImageLoader("progress"); 

loader.add('../images/road.png');
loader.add('../images/start.png');
loader.add('../images/car-one.png');
loader.add('../images/car-two.png');
loader.add('../images/lady-boy.png');
loader.add('../images/lost.png');
loader.add('../images/heart.png');
loader.add('../images/head-bg.png');
loader.add('../images/score-bg.png');
loader.add('../images/time.png');
loader.add('../images/timeout.png');

loader.load();