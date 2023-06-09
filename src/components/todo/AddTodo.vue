<template>
    <form @submit.prevent="onSubmitMethod">
        <input type="text" v-model="titleData">
        <button type="submit">Creat</button>
    </form>    
</template>

<script>
export default {
    data() {
        return {
            titleData: ''
        }
    },
    methods: {
        onSubmitMethod() {
            console.log('Submit', this.titleData);
            if(this.titleData.trim) {
                const newTodo = {
                    id: Date.now(),
                    title: this.titleData,
                    completed: false
                }

                this.$emit('add-todo', newTodo);
                this.titleData = '';
            }
        }
    }
}
</script>

<style>
form {
    display: flex;
    width: 400px;
}
</style>