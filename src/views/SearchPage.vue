<template>
    <div class="container">
        <BackLine></BackLine>
        <VacancyCard 
        v-for="vacancy of getCategoryUser" 
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

        this.userId = 928437440;
        console.log("it's mounted");

    },
    computed: {
        getCategoryUser(){
            return this.$store.getters.CATEGORY_USERS;
        }
    },
    components: {
        BackLine,
        VacancyCard
    }
}
</script>
