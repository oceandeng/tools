/*
* @Author: denghaiyang
* @Date:   2017-01-20 10:25:26
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-20 10:41:05
*/

'use strict';

console.info('%c section-4.8', 'color: #ff0')

window.onload = function(){

	window.name = 'window'

	var newObject = {
		name: 'object',
		sayGreeting: function(){
			console.log('Now this is easy, ' + this.name);
			var nestedGreeting = function(greeting){
				console.log(greeting + ' ' + this.name)
			}.bind(this)

			nestedGreeting('hello')
		}
	}

	newObject.sayGreeting('hello')
}