/*
* @Author: denghaiyang
* @Date:   2017-01-17 16:59:41
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-17 17:09:18
*/

'use strict';

console.info('%c section-3.10', 'color: #ff0')

/*
 * ES6
 */
function makeString(str, ldelim = "'", rdelim = "'"){
	ldelim = typeof ldelim !== 'undefined' ? ldelim : "'"
	rdelim = typeof rdelim !== 'undefined' ? rdelim : "'"

	return ldelim + str + rdelim
}

console.log(makeString(169))