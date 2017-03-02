;(function(){
    angular.module('myMall',['ngRoute','Controllers'])
    // 配置路由
        .config([
            '$routeProvider',
            function($routeProvider){
                // 首页路由
                $routeProvider
                    .when('/home',{
                    templateUrl:'views/home.html',
                    controller:'homeController'
                    })
                    .when('/list',{
                        templateUrl:'views/list.html',
                        controller:'listController'
                    })
                    .when('/share',{
                        templateUrl:'views/share.html',
                        controller:'shareController'
                    })
                    .when('/shopcar',{
                        templateUrl:'views/shopcar.html',
                        controller:'shopcarController'
                    })
                    .when('/center',{
                        templateUrl:'views/center.html',
                        controller:'centerController'
                    })
                    .otherwise({
                        redirectTo:'/home'
                    })
            }
        ])
        // 配置全局对象
        .run([
            '$rootScope',
            function($rootScope){
                $rootScope.page={};
            }
        ])

})();