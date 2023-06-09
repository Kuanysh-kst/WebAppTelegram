<template>
    <div class="profile-photo-container">
        <img class="profile-photo" src="@/assets/backgroundPhoto.svg" alt="">
    </div>
</template>

<style>
.profile-photo-container {
    position: relative;
    height: 200px;
    margin-top: 4%;
    margin-bottom: 4%;
}
.profile-photo {
    border-radius: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(-50%, 0);
    object-fit: cover;
}
</style>