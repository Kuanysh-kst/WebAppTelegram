<template>
    <div class="container">
        <BackLine />
        <FullNameParam />
        <ExperieceParam />
        <AddPhotoParam />
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import FullNameParam from '@/components/param/FullNameParam.vue';
import ExperieceParam from '@/components/param/ExperienceParam.vue';
import AddPhotoParam from '@/components/param/AddPhotoParam.vue';
export default {
    components: {
    BackLine,
    FullNameParam,
    ExperieceParam,
    AddPhotoParam
}
}
</script>

<style></style>