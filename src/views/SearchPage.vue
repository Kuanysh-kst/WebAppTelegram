<template>
    <div class="container">
        <BackLine></BackLine>
        <VacancyCard 
        v-for="vacancy of vacancyies" 
        :key="vacancy.id"
        v-bind:vacancy="vacancy"
        ></VacancyCard>
    </div>
</template>

<script>
import BackLine from '@/components/BackLine.vue';
import VacancyCard from '@/components/VacancyCard.vue';

export default {
    data() {
        return {
            vacancyies: [
                {id: 1 , jobCardText: "Работа грузчиком", cityCardText: "Костанай"},
                {id: 2 , jobCardText: "Работа не грузчиком", cityCardText: "Костанай"},
                {id: 3 , jobCardText: "Работа водителем", cityCardText: "Костанай"},
                {id: 4 , jobCardText: "Работа грузчиком и водителем снегоуборочной машины", cityCardText: "Костанай"},
            ]
        }
    },
    components: {
        BackLine,
        VacancyCard
    }
}
</script>

<style></style>