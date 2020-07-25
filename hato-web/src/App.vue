<template>
    <div id="app">
        <header class=header> <a href="index.html"><img src="./assets/logo.svg" width="100"></a> </header>
        <tabuicompornents></tabuicompornents>
        <footer><h6>{{ msg }}</h6></footer>
    </div>
</template>

<script>

import TabUI from './components/tabui.vue'
export default {
    name: 'HatoWeb',
    data(){
        return{
            msg: "Copyright ©︎ 2020 KotaKato. All rights reserved."
        };
    },
    components:{
        "tabuicompornents": TabUI
    },
}
</script>

<style>
@import './components/style.css';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}

</style>
