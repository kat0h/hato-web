<template>
    <div id="app">
        <img src="./assets/logo.svg" width="100">
        <ul role="tablist">
            <li role="presentation">
                <button
                    aria-controls="panel1"
                    role="tab"
                    aria-selected="(tab === 'panel1') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    ホーム
                </button>
            </li>
            <li role="presentation">
                <button
                    aria-controls="panel2"
                    role="tab"
                    aria-selected="(tab === 'panel2') ? 'true' : 'false'"
                    v-on:click="handleClick"
                >
                    クラス展
                </button>
            </li>
        </ul>
        <div
            id="panel1"
            aria-labelledby="tab1"
            v-bind:aria-hidden="tab !== 'panel1'"
            role="tabpanel"
        >
        ホーム
        </div>
        <div
            id="panel2"
            aria-labelledby="tab2"
            v-bind:aria-hidden="tab !== 'panel2'"
            role="tabpanel"
        >
        クラス展
        </div>
    </div>
</template>

<script>

export default {
    name: 'HatoWeb',
    data(){
        return {
            tab: "panel1"
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
            this.tab = tabState;
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
