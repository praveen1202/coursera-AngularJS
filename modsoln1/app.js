(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=["$scope"];
  function LunchCheckController($scope){
      $scope.description="";
      
      $scope.CheckMenu=function(){
          var menus=$scope.menu;
          if(menus){
            menus=menus.split(',');
            if(menus.length<=3){
              $scope.description="Enjoy!";
            } else{
              $scope.description="Too much";
            }
          } else {
              $scope.description="Please Enter the data first!";
          }
       }
    }
})();
