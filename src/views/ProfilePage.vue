<template>
    <div class="container">
        <BackLine />
        <ProfilePhoto />
        <hr>
        <AboutComponent v-bind:name=getName v-bind:category=getCategory />
        <ExperienceCopmonent v-bind:about = getAbout />
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import ProfilePhoto from '@/components/profile/ProfilePhoto.vue';
import AboutComponent from '@/components/profile/AboutComponent.vue';
import ExperienceCopmonent from '@/components/profile/ExperienceComponent.vue';

export default {
    components: {
        BackLine,
        ProfilePhoto,
        AboutComponent,
        ExperienceCopmonent,
    },
    computed: {
        getName() {
            return this.$route.query.name;
        },
        getCategory() {
            return this.$route.query.category;
        },
        getAbout() {
            return this.$route.query.about
        }
    },
    mounted() {
        console.log("it's profile mounted");
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