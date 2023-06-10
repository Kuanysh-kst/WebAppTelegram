<template>
    <div class="container">
        <BackLine />
        <FullNameParam />
        <ExperieceParam />
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import FullNameParam from '@/components/param/FullNameParam.vue';
import ExperieceParam from '@/components/param/ExperienceParam.vue'
export default {
    components: {
    BackLine,
    FullNameParam,
    ExperieceParam
}
}
</script>

<style></style>