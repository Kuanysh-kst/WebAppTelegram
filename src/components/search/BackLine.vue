<template>
    <div class="main-container">
        <div class="line">
            <router-link to="/" class="icon-back-container">
                <svg class="icon-back" xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24"
                    width="512" >
                    <path
                        d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Z" />
                    <path
                        d="M8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z" />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<style>
.icon-back {
    fill: var(--tg-theme-button-text-color);
    background-color: var(--tg-theme-button-color);
    
}

.icon-back-container {
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
    width: 100%;
    height: 50px;
    /* background-color: var(--tg-theme-button-color); */
    background-color: blue;
    border-radius: 20px;
}</style>