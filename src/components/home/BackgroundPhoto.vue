<template>
    <div class="photo-row">
        <div class="photo-container">
            <img class="back-photo" src="@/assets/paisley-1769549.svg" alt="">
        </div>
        <img class="top-photo" src="@/assets/backgroundPhoto.svg" alt="">
    </div>
</template>

<style>
.photo-row {
    position: relative;
}
.photo-container {
    position: relative;
    overflow: hidden;
    height: 110px;
    margin-bottom: 70px;
}

.back-photo {
    border-radius: 20px;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}
.top-photo {
    position: absolute;
    top: -150px;
    border-radius: 50%;
    top: 100%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
    object-fit: cover;
    border: 6px solid var(--tg-theme-bg-color);
}
.top-container {
    overflow: hidden;
    margin-bottom: 70px;
    position: absolute;
}
</style>