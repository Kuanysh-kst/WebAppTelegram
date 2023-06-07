<template>
    <div>
        <h1>Home page</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum vitae placeat quidem molestiae omnis nulla
            alias, aliquam cupiditate nemo obcaecati ducimus dolorem reprehenderit facere doloribus harum? Modi, voluptas
            molestias.</p>

        <router-link to="/todos">Todos</router-link>
        <div class="menu-icons">
            <div class="row">
                <div class="icon-button"></div>
                <div class="icon-button"></div>
            </div>
            <div class="row">
                <div class="icon-button"></div>
                <div class="icon-button"></div>
            </div>
        </div>
    </div>
</template>

<style>
.menu-icons {
}
.row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin: 5%;
}

.icon-button {
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 160px;
    background: white;
    border-radius: 25px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
}
</style>