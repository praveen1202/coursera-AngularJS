(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=["$scope"];
    function LunchCheckController($scope){
        var menus=$scope.menu;
        menus=menus.split(',');
        $scope.CheckMenu(menus){
            if(menus.length>=4){
                $scope.description="Too much";}
            else{
                $scope.description="Enjoy!";
            }
        }
    }
})();