/*
* @Author: denghaiyang
* @Date:   2017-01-18 15:57:01
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-19 20:25:20
*/

'use strict';

console.info('$c section-4.3', 'color: #ff0')

function origObject(){
	this.val1 = 'a'
	this.val2 = 'b'
}

origObject.prototype.returnVal1 = function(){
	return this.val1
}

origObject.prototype.retrunVal2 = function(){
	return this.val2
}

function newObject(){
	this.val3 = 'c'
	origObject.call(this)
}

newObject.prototype = Object.create(origObject.prototype)
newObject.prototype.constructor = newObject

newObject.prototype.getValues = function(){
	return this.val1 + ' ' + this.val2 + ' ' + this.val3
}

var obj = new newObject()

console.log(obj instanceof newObject)
console.log(obj instanceof origObject)

console.log(obj.getValues())

function Book(title, author){
	this.getTitle = function(){
		return "Title: " + title
	}
	this.getAuthor = function(){
		return "Author: " + author
	}
}

function TechBook(title, author, category){
	this.getCategory = function(){
		return "Technical Category: " + category
	}
	this.getBook = function(){
		return this.getTitle() + " " + author + " " + this.getCategory();
	}
	Book.apply(this, arguments)
}

TechBook.prototype = Object.create(Book.prototype)
TechBook.prototype.constructor = TechBook

// 获取所有的值
var newBook = new TechBook('The Javascript Cookbook', 'Shelley Powers', 'Programing')

console.log(newBook.getBook())

// 现在，是单个的
console.log(newBook.getTitle())
console.log(newBook.getAuthor())
console.log(newBook.getCategory())