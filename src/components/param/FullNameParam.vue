<template>
    <div class="text-fields card">
            <label class="text-field__label tg-text-color" for="login">User name</label>
            <hr>
            <input class="text-field__input" type="text" name="login" placeholder="Enter the user name" value="itchief">
    </div>
</template>

<style>
.text-fields {
    margin-bottom: 1rem;
    text-align: left;
    padding-left: 4%;
    padding-right: 4%;
}

/* стили для label */
.text-field__label {
    display: block;
    margin-bottom: 4%;
}

.text-fields hr {
    margin-bottom:4%;
}

/* стили для input */
.text-field__input {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 4%;
}

.text-field__input::placeholder {
    color: #212529;
    opacity: 0.4;
}

.text-field__input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}</style>