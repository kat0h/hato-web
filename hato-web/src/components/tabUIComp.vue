<template>
    <div id="tabui">
        <ul class="tabButtonBox">
            <li>
                <button
                class="tabButton" v-on:click="selArticle('home')"
                v-bind:class="{'tabActive': isTabActive == 'home'}">
                    ホーム
                </button>
            </li>
            <li>
                <button
                class="tabButton" v-on:click="selArticle('stamp')"
                v-bind:class="{'tabActive': isTabActive == 'stamp'}" >
                    スタンプ
                </button>
            </li>
            <li>
                <button
                class="tabButton" v-on:click="selArticle('class')"
                v-bind:class="{'tabActive': isTabActive == 'class'}">
                    クラス展
                </button>
            </li>
            <li>
                <button
                class="tabButton" v-on:click="selArticle('sell')"
                v-bind:class="{'tabActive': isTabActive == 'sell'}">
                    販売
                </button>
            </li>
            <li>
                <button
                class="tabButton" v-on:click="selArticle('schedule')"
                v-bind:class="{'tabActive': isTabActive == 'schedule'}" >
                    スケジュール
                </button>
            </li>
        </ul>
        <ul class="tabArticle">
            <li class="article" v-show="isTabActive === 'home'">
                <tabHomeArticle> </tabHomeArticle>
            </li>
            <li class="article" v-show="isTabActive === 'stamp'">
                STAMP
            </li>
            <li class="article" v-show="isTabActive === 'class'">
                CLASS
            </li>
            <li class="article" v-show="isTabActive === 'sell'">
                SELL
            </li>
            <li class="article" v-show="isTabActive === 'schedule'">
                SCHEDULE
            </li>
        </ul>
    </div>
</template>

<script>
import tabHomeArticle from './tabArticle/tabHomeArticle.vue'
export default {
    name: 'tabUI',
    data(){
    return {
        isTabActive: 'home'
    }
    },
components: {
    "tabHomeArticle": tabHomeArticle,
            },
    methods: {
        selArticle: function(tabName){
            this.isTabActive = tabName
            console.log(this.isTabActive)
        }
    }
}
</script>

<style>
#tabui {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 10px;
}
ul {
padding: 0;
margin: 0;
}
li {
list-style: none;
margin: none;
}
.tabButtonBox {
display: flex;
position: sticky;
position: -webkit-sticky;
top: 0px;
overflow: auto;
white-space: nowrap;
background: #fff;
}
.tabButtonBox::-webkit-scrollbar {
display: none;
}
.tabButton {
position: relative;
display: inline-block;
padding: 8px 10px 5px 10px;
height: 50px;
width: 100px;
text-decoration: none;
color: #44617b;
background: #fff;
border-bottom: solid 4px #44617b;
border: none;
border-radius: 15px 15px 0 0;
transition: .4s;
font-weight: bold;
margin: 10px 0px 0px 0px;
}
.tabActive {
background: #44617b;
color: #fff;
}
.tabButton:focus {
outline: none;
}
.article {
color: #FFF;
background: #44617b;
margin: 0px;
}
</style>
