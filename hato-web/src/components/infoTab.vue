<template>
    <div id="infoTab">
        <ul>
            <li>
                <button class="cardButton" v-on:click="cardClicked">
                    検索
                </button>
            </li>
                <button class="cardButton" v-on:click="cardClicked">
                    Map
                </button>
            <li>
                <button class="cardButton" v-on:click="cardClicked">
                    リンク
                </button>
            </li>
        </ul>
    </div>
</template>

<script>

import carduiscript from './cardUI'
export default {
    name: 'HatoWeb',
    methods: {
        cardClicked(){
            carduiscript.cardUIClicked()
        },
    },
}
</script>

<style>
    #infoTab {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
        margin-top: 10px;
    }
    .cardButton{
        background: red;
    }
</style>
