var bookStoreDirectives = angular.module('bookStoreDirectives', []);

// ng-repeat 渲染完成
// bookStoreDirectives.directive('repeatFinish', function($timeout) {
// 	return {
//         restrict: 'A',
//         scope: true,
// 		link: function(scope, element, attr){
// 		// 初始化下拉美化
// 		    var selectBox = new SelectBox(element.parent());

// 		    if(scope.$last == true){
// console.log(attr);
// 		    }

// 			scope.$watch(function(){
// 				selectBox.refresh();
// 				selectBox.setValue(scope.setVal);
// 			});
// 		}
// 	}
// });

bookStoreDirectives.directive('repeatFinish', function($timeout) {
	return {
        restrict: 'A',
        scope: false,
		link: function(scope, element, attr){
			// console.log(scope.$index);
			if(scope.$last == true){
				// console.log('ng-repeat执行完毕');
				// 向父节点传递事件
				$timeout(function(){
					scope.$emit('rFinish', element.parent());
				});
			}
		}
	}
});

// 滚动表格指令封装
bookStoreDirectives.directive('stable', function(){
	return {
		restrict: 'EA',
		templateUrl : 'dtpls/d_table_tpl.html',
		replace: true,
		link: function(scope, element, attr){
		    /****************** 表格ping插件调用 S **********************/
		    var allW = $('.part-one').outerWidth() + $('.part-two').outerWidth() + $('.part-thr').outerWidth() + $('.part-fou').outerWidth() + $('.part-fiv').outerWidth();
		    var dyanH = $(window).height() - $('.header').height() - $('.main-title').height() - 75;

		    scope.$on('rFinish', function(){
		    	element.pingTable({
			        width: allW,
			        height: 300
			    });
		    });
		    /****************** 表格ping插件调用 E **********************/
		}
	}
})

bookStoreDirectives.directive('datepicker', function(){
	return {
		// 强制AngularJS把指令限定为只支持属性
		restrict: 'A',
		// 总是和ng-model配合使用
		require: '?ngModel',
		scope: {
			// 此方法需要预先定义好，然后传递给视图控制器中的指令
			select: '&'		//把我们所引用的select函数绑定到右边的作用域中
		},
		link: function(scope, element, attrs, ngModel){
			if(!ngModel) return;

			var optionsObj = {};

			optionsObj.dateFormat = 'mm/dd/yy';
			var updateModel = function(dateTxt){
				scope.$apply(function(){
					// 调用AngularJS内部的工具更新双向绑定关系
					ngModel.$setViewValue(dateTxt);
				})
			};

			optionsObj.onSelect = function(dateTxt, picker){
				updateModel(dateTxt);
				if(scope.select){
					scope.$apply(function(){
						scope.select({date: dateTxt});
					});
				}
			};

			ngModel.$render = function(){
				// 使用AngularJS内部的'binding-specfic'变量
				element.datepicker('setDate', ngModel.$viewValue || '');
			};
			element.datepicker(optionsObj);
		}
	}
});
/*
Directive param demo
angular.module('myApp', []) .directive('myDirective', function() {
	return {
		restrict: String,
		priority: Number,
		terminal: Boolean,
		template: String or Template Function:
		function(tElement, tAttrs) {...},
		templateUrl: String,
		replace: Boolean or String,
		scope: Boolean or Object,
		transclude: Boolean,
		controller: String or
		function(scope, element, attrs, transclude, otherInjectables) { ... },
		controllerAs: String,
		require: String,
		link: function(scope, iElement, iAttrs) { ... },
		compile: // 返回一个对象或连接函数，如下所示：
		function(tElement, tAttrs, transclude) {
			return {
				pre: function(scope, iElement, iAttrs, controller) { ... },
				post: function(scope, iElement, iAttrs, controller) { ... }
			}
			return function postLink(...) { ... }
		}
	};
});
*/