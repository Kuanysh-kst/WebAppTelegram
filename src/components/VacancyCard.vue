<template>
    <div>
        <div class="vacancy-card">
            <div class="job-naming">
                <div class="vacancy-name">Work name</div>
            </div>
            <div class="city-naming">
                <div class="vacancy-city">Kostanay</div>
            </div>
            <div class="check-button">Откликнуться</div>
        </div>
    </div>
</template>

<style>
.vacancy-name {
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    float: left;
    font-size: 18px;
    color:var(--tg-theme-text-color);
}
.vacancy-city {
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    color:var(--tg-theme-text-color);
}

.city-naming {
    margin-bottom: 20px;
}

.check-button {
    padding: 13px 0;
    width: 80%;
    background-color: blue;
    /* background-color: var(--tg-theme-button-color); */
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 20px;
    font-size: 10pt;
    border-radius: 15px;
    color: var(--tg-theme-button-text-color);
}

.vacancy-card {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-right: 4%;
    margin-left: 4%;
    background-color: var(--tg-theme-bg-color);
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}</style>