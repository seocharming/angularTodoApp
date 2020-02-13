angular.module('todoApp').controller('TodoCtrl',function($scope,todoStorage){
  
  $scope.todos = todoStorage.get();
  
  $scope.add = function(newTodoTitle) {
    todoStorage.add(newTodoTitle);
    $scope.newTodoTitle="";
  }
  
  $scope.remove = function(todo) {
    todoStorage.remove(todo);
  }
  
  $scope.update = function() {
    todoStorage.update();
  }
  
});