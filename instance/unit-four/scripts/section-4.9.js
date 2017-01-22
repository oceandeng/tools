/*
* @Author: denghaiyang
* @Date:   2017-01-20 10:51:21
* @Last Modified by:   denghaiyang
* @Last Modified time: 2017-01-20 10:59:47
*/

'use strict';

console.info('%c section-4.9', 'color: #ff0')

function Book(title, author){
	this.getTitle = function(){
		return 'Title: ' + title
	}
	this.getAuthor = function(){
		return 'Author: ' + author
	}
	this.replaceTitle = function(newTitle){
		var oldTitle = title
		title = newTitle
	}
	this.replaceAuthor = function(newAuthor){
		var oldAuthor = author
		author = newAuthor
	}
}

function TechBook(title, author, category){
	this.getCategory = function(){
		return 'Technical Category: ' + category
	}

	Book.apply(this, Array.prototype.slice.call(arguments))

	this.changeAuthor = function(newAuthor){
		this.replaceAuthor(newAuthor)
		return this //支持链化所必须的
	}
}
var newBook = new TechBook('I know Things', 'Smart Author', 'tech')
console.log(newBook)
console.log(newBook.changeAuthor('Book K. Reader').getAuthor())