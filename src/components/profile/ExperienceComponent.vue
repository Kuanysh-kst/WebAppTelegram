<template>
    <div class="card exp-card">
        <div class="card-text">Experience</div>
        <hr>
        <div class="exp-text">
            {{ this.about }}
        </div>

    </div>
</template>

<script>
export default {
    props: ['about']
}
</script>

<style>
.exp-card {
    margin-bottom: 4%;
}
.exp-text {
    margin-top: 4%;
    width: 100%;
    color: var(--tg-theme-text-color);
    margin-bottom: 4%;
}
</style>