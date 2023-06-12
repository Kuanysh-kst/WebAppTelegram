<template>
    <div class="container">
        <BackLine />
        <div class="card delete-prof-card">
            <h4>
                Delete profile
            </h4>
        </div>
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
.delete-prof-card h4{
    padding-bottom: 4%;
}
</style>