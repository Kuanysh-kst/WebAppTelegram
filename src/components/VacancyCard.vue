<template>
    <div>
        <div class="vacancy-card">
            <div class="job-naming">
                <h4>Cleaning work</h4>
            </div>
            <div class="city-naming">
                <h6>
                    Kostanay</h6>
            </div>
            <div class="check-button">Откликнуться</div>
        </div>
    </div>
</template>

<style>
.city-naming h6 {
    height: 1px;

    float: left;
    margin-left: 20px;
}

.job-naming h4 {
    margin-left: 20px;
    height: 1px;
    float: left;
}

.check-button {
    padding-top: 3px;
    padding-bottom: 3px;
    width: 80%;
    height: 20px;
    background-color: var(--tg-theme-button-color);
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
    height: 130px;
    background-color: var(--tg-theme-bg-color);
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>