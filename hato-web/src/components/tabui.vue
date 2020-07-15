<template>
    <div id="tabui">
        <ul role="tablist">
            <li role="presentation">
                <button
                    aria-controls="home"
                    role="tabName"
                    v-bind:aria-selected="(tabName === 'home') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    ホーム
                </button>
            </li>
            <li role="presentation">
                <button
                    aria-controls="stampRally"
                    role="tabName"
                    v-bind:aria-selected="(tabName === 'stampRally') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    スタンプ
                </button>
            </li>
            <li role="presentation">
                <button
                    aria-controls="classExhibition"
                    role="tabName"
                    v-bind:aria-selected="(tabName === 'classExhibition') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    クラス展
                </button>
            </li>
            <li role="presentation">
                <button
                    aria-controls="sale"
                    role="tabName"
                    v-bind:aria-selected="(tabName === 'sale') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    販売
                </button>
            </li>
            <li role="presentation">
                <button
                    aria-controls="schedule"
                    role="tabName"
                    v-bind:aria-selected="(tabName === 'schedule') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    スケジュール
                </button>
            <li role="presentation">
                <button
                    aria-controls="information"
                    role="tabName"
                    v-bind:aria-selected="(tabName === 'information') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    Info
                </button>
            </li>
        </ul>
        <div
            id="home"
            aria-labelledby="tab1"
            v-bind:aria-hidden="tabName !== 'home'"
            role="tabpanel"
        >
        <uihometab class="tabcontent"></uihometab>
        </div>
        <div
            id="classExhibition"
            aria-labelledby="tab2"
            v-bind:aria-hidden="tabName !== 'classExhibition'"
            role="tabpanel"
        >
        工事中
        </div>
        <div
            id="stampRally"
            aria-labelledby="tab3"
            v-bind:aria-hidden="tabName !== 'stampRally'"
            role="tabpanel"
        >
        工事中
        </div>
        <div
            id="sale"
            aria-labelledby="tab4"
            v-bind:aria-hidden="tabName !== 'sale'"
            role="tabpanel"
        >
        工事中
        </div>
        <div
            id="schedule"
            aria-labelledby="tab5"
            v-bind:aria-hidden="tabName !== 'schedule'"
            role="tabpanel"
        >
        工事中
        </div>
        <div
            id="information"
            aria-labelledby="tab6"
            v-bind:aria-hidden="tabName !== 'information'"
            role="tabpanel"
        >
        工事中
        </div>
    </div>
</template>

<script>

import homeTabUI from './hometab.vue'
export default {
    name: 'HatoWeb',
    data(){
        return {
            tabName: "home"
        }
    },
    components:{
        "uihometab": homeTabUI
    },
    methods: {
        /**
        * クリックしたときのイベントハンドラーです。
        * @param event イベントオブジェクトです。
        * @private
        */
        handleClick(event) {
            // イベント発生源の要素を取得
            const element = event.currentTarget;
            // aria-controls 属性の値を取得
            const tabState = element.getAttribute("aria-controls");
            // プロパティーを更新
            this.tabName = tabState;
        }
    }
}
</script>

<style>
[role="tablist"]{
    display: flex;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
    margin: 0;
}
button {
    appearance: none;
    padding: 10px 20px;
}
[aria-hidden="true"]{
    display: none;
}
[aria-hidden="false"]{
    display: block;
}
[role="tablist"]{
    position: sticky;
    top: 0px;
    overflow-x: auto;
    white-space: nowrap;
    background: #fff;
}
[role="tablist"]::-webkit-scrollbar{
    display: none;
}
[role="tabName"]{
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
    display: inline-block;
    font-weight: bold;
    margin: 10px 0px 0px 0px;
}
[aria-selected="true"]{
    color: #FFF;
    background: #44617b;
}
[role="tabName"]:focus{
    outline: 0;
}
[role="tabpanel"]{
    padding: 2rem;
    color: #fff;
    background: #44617b;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
