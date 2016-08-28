var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.pageClass="hello";
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books = [{
            title: "《Ext江湖》",
            author: "大漠穷秋"
        }, {
            title: "《ActionScript游戏设计基础（第二版）》",
            author: "大漠穷秋"
        }, {
            title: "《用AngularJS开发下一代WEB应用》",
            author: "大漠穷秋"
        }];
        $scope.pageClass="list";
    }
]);

// SelectCtrl
bookStoreCtrls.controller('SelectCtrl', ['$scope', '$timeout', 'UserServe', function($scope, $timeout, UserServe){

    $scope.options = {};
    $scope.text = "select";
    $scope.pageClass="select";

    // 初始化下拉
    var selectBox = new SelectBox($('#mySle'));
    var selectBox1 = new SelectBox($('#mySle1'));

    // 请求数据接口
    UserServe.query('http://ocean.cn/interface/success.php').then(function(data){
        $scope.options = data.options;
        $scope.setVal = '5';

        return UserServe.query('http://ocean.cn/interface/custom_JSON.php');
    }).then(function(data){
        $scope.customItems = data.records;
        
    }).then(function(data){

        console.log('All end');
    })

    // 监测 ng-repeat完成事件，刷新下拉列表
    $scope.$on('rFinish', function(event, element){
        switch(element.attr('id')){
            case 'mySle':
                selectBox.setValue($scope.setVal);
                selectBox.refresh();
                console.log('a');
                break;
            case 'mySle1':
                selectBox1.setValue('2');
                selectBox1.refresh();
                console.log('b');
                break;
        }
    });
}]);

// TableCtrl
bookStoreCtrls.controller('TableCtrl', ['$scope', 'UserServe', function($scope, UserServe){
    $scope.data = {};
    $scope.pageClass="list";

    UserServe.post('http://ocean.cn/interface/response.php', {page: '9'}).then(function(data){
        $scope.data = data;
    });

    // 分页
    $scope.onPageChange = function() {
        // ajax request to load data
        console.log($scope.currentPage);
    };

    // set pagecount in $scope
    $scope.pageCount = 9;
}]);

/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */

// DatePickerCtrl
bookStoreCtrls.controller('DatePickerCtrl', ['$scope', function($scope){
    $scope.pageClass = "select";

    $scope.myText = 'Not Selected';
    $scope.currentDate = '';
    $scope.updateMyText = function(date) {
        $scope.myText = 'Selected';
    };

}]);
bookStoreCtrls.controller('UICtrl', ['$scope', function($scope){
    $scope.title = "UI";

    $scope.expanders = [
        {title: 'Click me to expand',
        text: 'Hi there folks, I am the content that was hidden but is now shown.'},
        {title: 'Click this',
        text: 'I am even better text than you have seen previously'},
        {title: 'No, click me!',
        text: 'I am text that should be seen before seeing other texts'}
    ];
}]);
bookStoreCtrls.controller('AdminCtrl', ['$scope', function($scope){
    $scope.parentLeft = 'parent11111';
    $scope.parentRight = 'parent22222';

}]);
bookStoreCtrls.controller('LeftCtrl', ['$scope', function($scope){
    $scope.left = '111';

}]);
bookStoreCtrls.controller('RightCtrl', ['$scope', function($scope){
    $scope.right = '222';
    $scope.item = '菜单';
}]);