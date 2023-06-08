<template>
    <div class="main-container">
        <div  class="line">
            <router-link to="/" class = "icon-back-container">
                <img src="../assets/back-icon.svg" alt="">
            </router-link>
        </div>
    </div>
</template>

<style>
.icon-back-container{
    display: flex;
    height: 35px;
    width: 35px;
    margin-left: 7px;
    margin-top: 7px;
}
.main-container {
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;

}
.line {
    margin-right: 4%;
    margin-left: 4%;
    width: 100%;
    height: 50px;
    background-color: blue;
    border-radius: 20px;
}
</style>