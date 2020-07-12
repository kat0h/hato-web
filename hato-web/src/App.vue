<template>
    <div id="app">
        <a href="index.html"><img src="./assets/logo.svg" width="100"></a>
        <tabuicompornents></tabuicompornents>
        <h6>{{ msg }}</h6>
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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}
</style>
