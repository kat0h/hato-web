<template>
    <div id="infoTab" >
        <ul class="cardTab">
            <li>
                <button
                role="cardButton"
                v-on:click="cardClicked"
                >
                    検索
                </button>
            </li>
            <li>
                <button
                role="cardButton"
                v-on:click="cardClicked"
                >
                    Map
                </button>
            </li>
            <li>
                <button
                role="cardButton"
                v-on:click="cardClicked"
                >
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