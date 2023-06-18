<template>
    <div class="card">
        <h4 class="card-text">About user</h4>
        <hr>
        <div class="card-text about-name">Name: {{ name }}</div>
        <div class="card-text">City: Kostany</div>
        <div class="card-text">Job: {{category}}</div>
    </div>
</template>

<script>
export default {
    props:['name','category']
}
</script>

<style>
.about-name {
    margin-top: 5%;
}

</style>