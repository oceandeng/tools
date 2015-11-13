/* 
* @Author: ocean
* @Date:   2015-09-07 11:31:51
* @Last Modified by:   ocean
* @Last Modified time: 2015-11-11 17:38:17
*/

'use strict';

var arr = [1, 2, 3];

function fn(agu){
	console.log(agu);
}

// _.each([1, 2, 3], fn);

// var arr1 = _.map(arr, function(value, index, list){
// 	return value * value;
// });


(function($){
	var Item = Backbone.Model.extend({
		defaults: {
			part1: 'hello',
			part2: 'world'
		}
	});

	var List = Backbone.Collection.extend({
		model: Item
	});
console.log(new List());

	var ListView = Backbone.View.extend({
		el: $('body'),

		events: {
			'click button#add': 'addItem'
		},

		initialize: function(){

			_.bindAll(this, 'render', 'addItem');

			this.counter = 0;
			this.render();
		},
		
		render: function(){
			$(this.el).append("<button id='add'>Add list item</button>");
			$(this.el).append("<ul><li>hello world!</li></ul>");
		},

		addItem: function(){
			this.counter++;
			$('ul', this.el).append("<li>hello world " + this.counter + "</li>");
		}
	});

	var ListView = new ListView();
})(jQuery);


(function($){

 
  var ListView = Backbone.View.extend({
    el: $('body'),
    events: {
      'click button#add': 'addItem'
    },
 
    initialize: function(){
      _.bindAll(this, 'render', 'addItem', 'appendItem'); // remember: every function that uses 'this' as the current object should be in here

      this.collection = new List();
      this.collection.bind('add', this.appendItem); // collection event binder
 
      this.counter = 0;
      this.render();
    },
    render: function(){
 
      var self = this;
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
      _(this.collection.models).each(function(item){ // in case collection is not empty
        self.appendItem(item);
      }, this);
    },
 
    addItem: function(){
      this.counter++;
      var item = new Item();
      item.set({
        part2: item.get('part2') + this.counter // modify item defaults
      });
      this.collection.add(item); // add item to collection; view is updated via event 'add'
    },
 
    appendItem: function(item){
      $('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
    }
  });
 
  var listView = new ListView();
})(jQuery);