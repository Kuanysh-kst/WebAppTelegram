<template>
    <div>
        <div class="vacancy-card">
            <div class="job card-text">
                {{ vacancy.category }}
            </div>
            <div class="city card-text">
                {{ vacancy.chatId }}
            </div>
            <router-link :to="{
                name: 'Profile',
                query: {
                    name: vacancy.firstName,
                    category: vacancy.category
                                }
            }" class="check-button">Смотреть</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vacancy: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.vacancy-card {
    margin-top: 5%;
    background-color: var(--tg-theme-bg-color);
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
}

.job {
    font-size: 20px;
}

.city {
    font-size: 18px;
}

.check-button {
    margin: 0 auto;
    padding: 13px 0;
    width: 80%;
    background-color: blue;
    background-color: var(--tg-theme-button-color);
    font-size: 10pt;
    border-radius: 15px;
    color: var(--tg-theme-button-text-color);
}
</style>