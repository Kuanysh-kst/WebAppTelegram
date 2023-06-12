<template>
<div class="name-block">{{ tg-first-name }}</div>
</template>

<script>
export default {
    props: ['tg-first-name']
} 
</script>

<style>
.name-block {
    width: 100%;
    margin-bottom: 4%;
}

</style>