<template>
    <div>
        <ul>
            <TodoItem
                v-for="(todo,i) of todos"
                :key="todo.id"
                v-bind:todo = "todo"
                v-bind:indexData = "i"
                @removeTodo = "removeTodoMethod"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        removeTodoMethod(id) {
            this.$emit('remove-todo',id);
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>