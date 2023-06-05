<template>
  <h1>Todo application</h1>
  <AddTodo 
    @add-todo = "addTodoMethod"
  />
  <hr>
  <TodoList
    v-bind:todos = "todos"
    @remove-todo = "removeTodoMethod"
  />
</template>

<script>
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1 , title: "Купить Хлеб", completed: false },
        {id: 2 , title: "Купить Колбасу", completed: false },
        {id: 3 , title: "Купить Сыр", completed: false }
      ]
    }
  },
  methods: {
    removeTodoMethod(id) {
        this.todos = this.todos.filter(t=> t.id !== id);
    },
    addTodoMethod(todo) {
      this.todos.push(todo);
    }
  },
  components: {
    TodoList,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
