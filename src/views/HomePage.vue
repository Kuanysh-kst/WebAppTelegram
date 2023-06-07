<template>
    <div>
        <h1>Home page</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum vitae placeat quidem molestiae omnis nulla
            alias, aliquam cupiditate nemo obcaecati ducimus dolorem reprehenderit facere doloribus harum? Modi, voluptas
            molestias.</p>

        <router-link to="/todos">Todos</router-link>
        <div class="menu-icons">
            <div class="icon-button">

            </div>
            <div class="icon-button"></div>
        </div>
    </div>
</template>

<style>
.menu-icons {
    display: flex;
    justify-content: space-between;
    height: 300px;
}

.icon-button {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 35%;
    background: rgba(124, 1, 199, 0.25);
    border-radius: 25px;
    padding-top: 20px;
    padding-bottom: 50px;
    justify-content: space-between;
    margin-left: 3%;
    margin-right: 3%;
    align-items: center;
}
</style>