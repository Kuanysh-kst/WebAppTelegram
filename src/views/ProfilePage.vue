<template>
    <div class="container">
        <BackLine />
        <ProfilePhoto />
        <hr>
    </div>
</template>

<script>
import BackLine from '@/components/BackLine.vue';
import ProfilePhoto from '@/components/ProfilePhoto.vue'
export default {
    components: {
        BackLine,
        ProfilePhoto
    }
}
</script>

<style>
hr {
    margin-top: 4%;
    border: none;
    /* Убираем стандартную границу */
    background-color: grey;
    /* Задаем желаемый цвет фона горизонтальной линии */
    height: 2px;
    /* Задаем желаемую толщину горизонтальной линии */
    border-radius: 1px;
    width: 100%;
}
</style>