var app = angular.module("airports", []);
app.controller("myCtrl", function($scope) {
  $scope.selected = null;  
  $scope.airports =
      ["YBBN",
      "YSSY",
      "RPLL",
      "AGAR"];
  
    $scope.setSelected = function(i) {
       $scope.selected = i;
    }
});