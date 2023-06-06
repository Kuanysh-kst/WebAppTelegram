<template>
  <div>
    <h1>Todo application</h1>
    <hr>
  </div>
  <router-view />
</template>

<script>
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
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        this.todos = json
    });  
 },
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
