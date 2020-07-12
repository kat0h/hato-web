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
        ホーム
        </div>
        <div
            id="classExhibition"
            aria-labelledby="tab2"
            v-bind:aria-hidden="tabName !== 'classExhibition'"
            role="tabpanel"
        >
        クラス展
        </div>
        <div
            id="stampRally"
            aria-labelledby="tab3"
            v-bind:aria-hidden="tabName !== 'stampRally'"
            role="tabpanel"
        >
        スタンプラリー
        </div>
        <div
            id="sale"
            aria-labelledby="tab4"
            v-bind:aria-hidden="tabName !== 'sale'"
            role="tabpanel"
        >
        販売
        </div>
        <div
            id="schedule"
            aria-labelledby="tab5"
            v-bind:aria-hidden="tabName !== 'schedule'"
            role="tabpanel"
        >
        スケジュール
        </div>
        <div
            id="information"
            aria-labelledby="tab6"
            v-bind:aria-hidden="tabName !== 'information'"
            role="tabpanel"
        >
        インフォメーション
        </div>
    </div>
</template>

<script>

export default {
    name: 'HatoWeb',
    data(){
        return {
            tabName: "home"
        }
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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}
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
[role="tabpanel"]{
    border: 1px solid lightgray;
    padding: 2rem;
}
[aria-hidden="true"]{
    display: none;
}
[aria-hidden="false"]{
    display: block;
}
[aria-selected="true"]{
    background-color: royalblue;
    color: white;
}

</style>
