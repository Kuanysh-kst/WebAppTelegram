<template>
    <div class="container">
        <BackLine />
        <div class="card delete-prof-card">Delete profile</div>
        <AddBackPhotoSetting />
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import AddBackPhotoSetting from '@/components/settings/AddBackPhotoSetting.vue';
export default {
components: {
    BackLine,
    AddBackPhotoSetting                
}
}
</script>

<style>
.delete-prof-card {
padding-bottom: 4%;
}
</style>