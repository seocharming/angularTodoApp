angular.module('todoApp').directive('todoTitle',function(){
  return{
    template: '<h1>TodoList</h1>'
  }
});

angular.module('todoApp').directive('todoItem',function(){
  return{
    templateUrl:'todoItem.tpl.html'
  }
});

angular.module('todoApp').directive('todoForm',function(){
  return{
    templateUrl:'todoForm.tpl.html'
  }
});

angular.module('todoApp').directive('todoFilter',function(){
  return{
    templateUrl:'todoFilter.tpl.html'
  }
});