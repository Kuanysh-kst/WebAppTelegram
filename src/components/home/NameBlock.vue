<template>
    <div class="name-block">{{ userNameData }}</div>
</template>

<script>
export default {
    props: ['userNameData']
} 
</script>

<style>
.name-block {
    width: 100%;
    margin-bottom: 4%;
}
</style>