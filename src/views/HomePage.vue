<template>
    <div class="container">
        <BackgroundPhoto />
        <NameBlock v-bind:userNameData="tgUserName" />
        <hr>
        <div class="menu-icons">
            <div class="row">
                <router-link to="/search" class="icon-container">
                    <div class="icon-button">
                        <svg class="ico" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                            viewBox="0 0 24 24" width="512" height="512">
                            <path
                                d="M1.879,17.878a11.259,11.259,0,0,0-1.835,4,1.739,1.739,0,0,0,2.083,2.082,11.263,11.263,0,0,0,3.994-1.834h0A3,3,0,0,0,1.879,17.878Zm2.828,2.829h0a10.07,10.07,0,0,1-2.6,1.184,10.1,10.1,0,0,1,1.184-2.6,1,1,0,0,1,1.414,1.414ZM18,8.5a2.5,2.5,0,0,1-5,0A2.5,2.5,0,0,1,18,8.5ZM20.972,0h0A15.487,15.487,0,0,0,8.634,6.006,11.065,11.065,0,0,0,4.065,7.169,8.1,8.1,0,0,0,.243,10.835a2.955,2.955,0,0,0,.25,2.8A3.009,3.009,0,0,0,3.014,15H5.5A3.517,3.517,0,0,1,9,18.5v2.486a3.009,3.009,0,0,0,1.363,2.521,2.955,2.955,0,0,0,2.8.25,8.1,8.1,0,0,0,3.666-3.822,11.065,11.065,0,0,0,1.163-4.569A15.507,15.507,0,0,0,24,3,3.009,3.009,0,0,0,20.972,0ZM4.346,13H3.014a1,1,0,0,1-.85-.461.95.95,0,0,1-.085-.91A6.176,6.176,0,0,1,4.962,8.957a8.993,8.993,0,0,1,1.993-.72A34.361,34.361,0,0,0,4.346,13Zm10.7,6.038a6.18,6.18,0,0,1-2.671,2.883.951.951,0,0,1-.911-.085,1,1,0,0,1-.461-.85V19.654a34.361,34.361,0,0,0,4.763-2.609A8.993,8.993,0,0,1,15.043,19.038Zm.135-4.02a29.92,29.92,0,0,1-4.271,2.471,5.5,5.5,0,0,0-4.4-4.4A29.92,29.92,0,0,1,8.982,8.822C12.35,4.124,15.84,2.147,21,2a1,1,0,0,1,1,.972C21.853,8.16,19.876,11.65,15.178,15.018Z" />
                        </svg>
                    </div>
                    <h3>Search</h3>
                </router-link>
                <router-link to="/parametrs" class="icon-container">
                    <div class="icon-button">
                        <svg class="ico" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512"
                            height="512">
                            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                            <path
                                d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                        </svg>
                    </div>
                    <h3>Parametrs</h3>
                </router-link>
            </div>
            <div class="row">
                <div @click="closeWebApp" to="/todos" class="icon-container">
                    <div class="icon-button">
                        <svg class="ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021"
                            style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="512"
                            height="512">
                            <g>
                                <path
                                    d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z" />
                            </g>
                        </svg>
                    </div>
                    <h3>Close app</h3>
                </div>
                <router-link to="/settings" class="icon-container">
                    <div class="icon-button">
                        <svg class="ico" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512"
                            height="512">
                            <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                            <path
                                d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" />
                        </svg>
                    </div>
                    <h3>Settings</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BackgroundPhoto from '@/components/home/BackgroundPhoto.vue';
import NameBlock from '@/components/home/NameBlock.vue'
export default {
    data() {
        return {
            tg: null,
            tgUserName: "",
            loading: true,
            filter: 'all'
        }
    },
    methods: {
        closeWebApp() {
            if (window.Telegram && window.Telegram.WebApp) {
                this.tg.user.close();
            }
        }
    },
    mounted() {
        if (window.Telegram && window.Telegram.WebApp) {
            this.tg = window.Telegram.WebApp;
            this.tgUserName = this.tg.initDataUnsafe.user.first_name;
        } else {
            console.error("Telegram WebApp не доступен.");
        }
    },
    computed: {

    },
    components: {
        BackgroundPhoto,
        NameBlock
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
    justify-content: space-between;
}

.icon-button {
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--tg-theme-bg-color);
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    /* Параметры тени */
    justify-content: space-between;
    align-items: center;
    transition: 0.18s;
    padding-bottom: 20%;
}

.icon-container {
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin-right: 20px;
    margin-left: 20px;
}

.ico {
    fill: var(--tg-theme-text-color);
    width: 50%;
    height: 50%;
    background-color: var(--tg-theme-bg-color);
    margin-right: 10%;
    margin-left: 10%;
    margin-top: 30px;
}

.icon-container h3 {
    margin-top: 8%;
    color: var(--tg-theme-text-color);
    font-size: 16px;
}
</style>