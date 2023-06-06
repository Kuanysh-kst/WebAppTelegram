<template>
    <div>
        <h2>Todo application</h2>
        <router-link to="/">HomePage</router-link>
        <AddTodo @add-todo="addTodoMethod" />
        <select v-model = "filter">
            <option value="all">All</option>
            <option value="completed">Copmleted</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <hr>
        <LoaderImg v-if="loading" />
        <TodoList v-else-if="filterTodos.length" v-bind:todos="filterTodos" @remove-todo="removeTodoMethod" />
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
            loading: true,
            filter: 'all'
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
            this.todos = this.todos.filter(t => t.id !== id);
        },
        addTodoMethod(todo) {
            this.todos.push(todo);
        }
    },
    computed: {
        filterTodos(){
             if (this.filter === "all") {
                return this.todos;
             }

             if (this.filter === "completed") {
                return this.todos.filter(t => t.completed)
             }

             if (this.filter === "not-completed") {
                return this.todos.filter(t => !t.completed)
             }
            return this.todos;

        }
    },
    components: {
        TodoList,
        AddTodo,
        LoaderImg
    }
}
</script>