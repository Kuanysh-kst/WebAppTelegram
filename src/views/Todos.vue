<template>
    <div>
        <h2>Todo application</h2>
        <router-link to = "/">HomePage</router-link>
            <AddTodo 
                @add-todo = "addTodoMethod"
            />
        <hr>
        <LoaderImg 
            v-if = "loading" />
        <TodoList
                v-else-if = "todos.length"
                v-bind:todos = "todos"
                @remove-todo = "removeTodoMethod"
        />
        <p v-else>No Todos!</p>
    </div>

  </template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import LoaderImg from '@/components/LoaderImg.vue'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json;
        this.loading = false;
    });  
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
    AddTodo,
    LoaderImg
  }
}
</script>