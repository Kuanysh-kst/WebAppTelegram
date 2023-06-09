<template>
    <div>
        <div class="vacancy-card">
            <div class="job card-text">
                {{vacancy.jobCardText}}
            </div>
            <div class="city card-text">
                {{vacancy.cityCardText}}
            </div>
            <div class="check-button">Откликнуться</div>
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
    margin-right: 4%;
    margin-left: 4%;
    background-color: var(--tg-theme-bg-color);
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
}

.card-text {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    color: var(--tg-theme-text-color);
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
    /* background-color: var(--tg-theme-button-color); */
    font-size: 10pt;
    border-radius: 15px;
    /* color: var(--tg-theme-button-text-color); */
}</style>