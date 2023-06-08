<template>
    <div>
        <div class="vacancy-card">
            <div class="job">
                Work name
            </div>
            <div class="city">
                Kostanay
            </div>
            <div class="check-button">Откликнуться</div>
        </div>
    </div>
</template>

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
.job {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
}
.city {
    margin-bottom: 20px;
    text-align: left;
    color:var(--tg-theme-text-color);
    width: 100%;
}
.check-button {
    margin: 0 auto;
    padding: 13px 0;
    width: 80%;
    background-color: blue;
    /* background-color: var(--tg-theme-button-color); */
    font-size: 10pt;
    border-radius: 15px;
    color: var(--tg-theme-button-text-color);
}


</style>