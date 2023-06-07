<template>
    <div class="photo-row">
        <div class="photo-container">
            <img class="back-photo" src="../assets/backgroundPhoto.svg" alt="">
        </div>
    </div>
</template>

<style>
.photo-container {
    position: relative;
    overflow: hidden;
    height: 140px;
    margin-bottom: 70px;
}
.back-photo{
    border-radius: 20px;

    position: absolute;
    top: 50%;
    width: 90%;
    height: 100%;
    transform: translate(-50%,-50%);
    object-fit: cover;
}
</style>