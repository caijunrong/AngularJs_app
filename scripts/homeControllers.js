// 实例一个模块，用来专门管理所有的控制器
;
(function() {
    angular.module('Controllers', [])

        .controller('DemoController', ['$scope', function ($scope) {
            console.log('启动了');
        }])

        .controller('homeController', [
            '$scope',
            '$rootScope',
            '$http',
            function ($scope, $rootScope, $http) {
                $rootScope.page.title = '首页';
                $rootScope.page.current = 'home';

                $http.get('')
                    .success(function (res) {
                    })
            }
        ])
        .controller('listController', [
            '$scope',
            '$rootScope',
            '$http',
            function ($scope, $rootScope, $http) {
                $rootScope.page.title = '分类';
                $rootScope.page.current = 'list';


                $http.get('data/goodslist.json')
                    .success(function (res) {

                    })
            }
        ])
        .controller('shareController', [
            '$scope',
            '$rootScope',
            '$http',
            function ($scope, $rootScope, $http) {
                $rootScope.page.title = '晒单';
                $rootScope.page.current = 'share';


                $http.get('data/goodslist.json')
                    .success(function (res) {


                    })

            }
        ])
        .controller('shopcarController', [
            '$scope',
            '$rootScope',
            function ($scope, $rootScope) {
                $rootScope.page.title = '购物车';
                $rootScope.page.current = 'shopcar';


            }
        ])
        .controller('centerController', [
            '$scope',
            '$rootScope',
            function ($scope, $rootScope) {
                $rootScope.page.title = '个人中心';
                $rootScope.page.current = 'center';

            }
        ])
})();