(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=["$scope"];
    function LunchCheckController($scope){
        $scope.description="";
        
        $scope.CheckMenu=function(){
            var menus=$scope.menu;
            menus=menus.split(',');
            if(menus.length>=4){
                $scope.description="Too much";
            } else{
                $scope.description="Enjoy!";
            }
        }
    }
})();
