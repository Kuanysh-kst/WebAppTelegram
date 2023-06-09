<template>
    <div class="container">
        <BackLine />
        <ProfilePhoto />
        <hr>
        <AboutComponent />
        <ExperienceCopmonent />
        <ActionButton />
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import ProfilePhoto from '@/components/profile/ProfilePhoto.vue';
import AboutComponent from '@/components/profile/AboutComponent.vue';
import ExperienceCopmonent from '@/components/profile/ExperienceComponent.vue';
import ActionButton from '@/components/buttons/ActionButton.vue';

export default {
    components: {
        BackLine,
        ProfilePhoto,
        AboutComponent,
        ExperienceCopmonent,
        ActionButton
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