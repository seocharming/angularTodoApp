angular.module('todoApp').factory('todoStorage',function(){
  
  var TODO_DATA = 'TODO_DATA';
  var storage={
    
    todos:[
      // {
      //   title:'운동하기',
      //   completed:true,
      //   createdAt:Date.now()
      // },
      // {
      //   title:'요리하기',
      //   completed:false,
      //   createdAt:Date.now()
      // },
      // {
      //   title:'공부하기',
      //   completed:false,
      //   createdAt:Date.now()
      // }
    ],
    
    _svaeToLocalStorage: function(data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },
    
    _getFromLocalStorage: function() {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },
    
    get:function(){
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },
    
    add:function(newTodoTitle){
      
      var newTodo={
        title:newTodoTitle,
        completed:false,
        createdAt:Date.now()
      };
      
      storage.todos.push(newTodo);
      storage._svaeToLocalStorage(storage.todos);
    },
    
    remove:function(todo){
      var idx=storage.todos.findIndex(function(item){
        return item.id === todo.id;
      });
      
      if(idx>-1){
        storage.todos.splice(idx,1);
        storage._svaeToLocalStorage(storage.todos);
      }
    },
    
    update: function() {
      storage._svaeToLocalStorage(storage.todos);
    }
    
  }
  
  return storage;
});