<template>
    <div id="tabui">
        <ul id="tablist">
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
            id="stampRally"
            aria-labelledby="tab3"
            v-bind:aria-hidden="tabName !== 'stampRally'"
            role="tabpanel"
        >
        <uistampTab class="tabcontent"></uistampTab>
        </div>
        <div
            id="classExhibition"
            aria-labelledby="tab2"
            v-bind:aria-hidden="tabName !== 'classExhibition'"
            role="tabpanel"
        >
        <uiclassTab class="tabcontent"></uiclassTab>
        </div>
        <div
            id="sale"
            aria-labelledby="tab4"
            v-bind:aria-hidden="tabName !== 'sale'"
            role="tabpanel"
        >
        <uisaleTab class="tabcontent"></uisaleTab>
        </div>
        <div
            id="schedule"
            aria-labelledby="tab5"
            v-bind:aria-hidden="tabName !== 'schedule'"
            role="tabpanel"
        >
        <uischeduleTab class="tabcontent"> </uischeduleTab>
        </div>
        <div
            id="information"
            aria-labelledby="tab6"
            v-bind:aria-hidden="tabName !== 'information'"
            role="tabpanel"
        >
        <uiinfoTab class="tabcontent"></uiinfoTab>
        </div>
    </div>
</template>

<script>

import homeTabUI from './hometab.vue'
import stampTabUI from './stampTab.vue'
import classTabUI from "./classTab.vue"
import infoTabUI from "./infoTab.vue"
import saleTabUI from "./saleTab.vue"
import scheduleTabUI from "./scheduleTab.vue"

export default {
    name: 'HatoWeb',
    data(){
        return {
            tabName: "home"
        }
    },
    components:{
        "uihometab": homeTabUI,
        "uistampTab": stampTabUI,
        "uiclassTab": classTabUI,
        "uiinfoTab": infoTabUI,
        "uisaleTab": saleTabUI,
        "uischeduleTab": scheduleTabUI,
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
/* タブのボタンに対するCSS */
#tablist{
    display: flex;
    position: sticky;
    top: 0px;
    overflow-x: auto;
    white-space: nowrap;
    background: #fff;
}
#tablist::-webkit-scrollbar{
    display: none;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
    margin: 0;
}
button{
    appearance: none;
    padding: 10px 20px;
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
/* タブのパネルに対するCSS */
[role="tabpanel"]{
    padding: 2rem;
    color: #fff;
    background: #44617b;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
[aria-hidden="true"]{
    display: none;
}
[role="cardButton"]{
    border-radius: 20px;
    color: #44617b;
    font-size: 100%;
    font-weight: bold;
    text-align: center;
    background: #FFF;
    width: 100%;
    border: none;
};
.cardTab{
    display: flex;
    flex-direction:column;
};
</style>

