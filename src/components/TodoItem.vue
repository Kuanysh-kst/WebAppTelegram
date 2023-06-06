<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" 
            @change="toggleCompleted(this.todo)">
            <strong>{{ indexData + 1}}</strong>
            {{ todo.title }}
        </span>
        <button class = "rm" @click="$emit('removeTodo',todo.id)">&times;</button>
    </li>
</template>

<script>

export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        indexData: Number
    },
    methods: {
        toggleCompleted(todo) {
            todo.completed = !todo.completed;
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .rm {
        background-color: red;
        color:#fff;
        border-radius: 50%;
        font-weight: bold;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>