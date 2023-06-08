<template>
    <div>
        <BackgroundPhoto></BackgroundPhoto>
        <hr>
        <div class="menu-icons">
            <div class="row">
                <router-link to="/search" class="icon-container">
                    <div class="icon-button">
                        <img class="ico" src="../assets/free-icon-font-rocket-lunch-6955751.svg" alt="">
                    </div>
                    <h3>Search</h3>
                </router-link>
                <router-link to="/todos" class="icon-container">
                    <div class="icon-button">
                        <img class="ico" src="../assets/free-icon-font-user-3917688.svg" alt="">
                    </div>
                    <h3>Profile</h3>
                </router-link>
            </div>
            <div class="row">
                <router-link to="/todos" class="icon-container">
                    <div class="icon-button">
                        <img class="ico" src="../assets/free-icon-font-cross-3917759.svg" alt="">
                    </div>
                    <h3>Close app</h3>
                </router-link>
                <router-link to="/todos" class="icon-container">
                    <div class="icon-button">
                        <img class="ico" src="../assets/free-icon-font-settings-3917058.svg" alt="">
                    </div>
                    <h3>Settings</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BackgroundPhoto from '@/components/BacgroundPhoto.vue'
export default {
    components: {
        BackgroundPhoto
    }
}
</script>

<style>
hr {
    border: none;
    /* Убираем стандартную границу */
    background-color: grey;
    /* Задаем желаемый цвет фона горизонтальной линии */
    height: 2px;
    /* Задаем желаемую толщину горизонтальной линии */
    border-radius: 1px;
    width: 90%;
}

.menu-icons {
    height: 400px;
}

.row {
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    height: 150px;
    justify-content: space-between;
}

.icon-button {
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--tg-theme-bg-color);
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    /* Параметры тени */
    justify-content: space-between;
    align-items: center;
    transition: 0.18s;
}

.icon-container {
    justify-content: space-between;
    height: 80%;
    width: 46%;
    margin-right: 20px;
    margin-left: 20px;
}

.ico {
    width: 50%;
    height: 50%;
    background-color: white;
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 30px;
}

.icon-container h3 {
    color: var(--tg-theme-text-color);
    font-size: 16px;
}</style>