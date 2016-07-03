angular.module("AngularMaterialSample", ["ngMaterial"])

.controller("TodoCtrl", ["$scope", function($scope){
  $scope.activities = [
    { completed: false, title: "Build an App", description: "Create a sample app with Angular Material!" },
    { completed: false, title: "Tweet", description: "Tweet about your new app." }
  ];

  $scope.filters = {};

  $scope.createActivity = function(){
    if($scope.activity.$valid){
      $scope.activities.push({
        title: $scope.title,
        description: $scope.description,
        completed: false
      });

      $scope.title = "";
      $scope.description = "";
      $scope.activity.$setPristine();
      $scope.activity.$setUntouched();
    }
  };

  $scope.deleteActivity = function(activity){
    $scope.activities.splice($scope.activities.indexOf(activity), 1);
  };
}]);
