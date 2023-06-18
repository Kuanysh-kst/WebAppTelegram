<template>
    <div class="container">
        <BackLine></BackLine>
        <VacancyCard 
        v-for="vacancy of getCategoryUsers" 
        :key="vacancy.id"
        v-bind:vacancy="vacancy"
        ></VacancyCard>
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import VacancyCard from '@/components/search/VacancyCard.vue';


export default {
    data() {
        return {
            tg: null,
            id: 928437440,
            firstName:null,
            category:null,
            about:null
        }
    },
    created() {
        this.$store.dispatch("GET_CATEGORY_USERS",this.id);
    },
    mounted() {
        this.tg = window.Telegram.WebApp;
        this.userId = this.tg.initDataUnsafe.user.id;
        console.log("it's mounted");

    },
    computed: {
        getCategoryUsers(){
            return this.$store.getters.CATEGORY_USERS;
        }
    },
    components: {
        BackLine,
        VacancyCard
    }
}
</script>
