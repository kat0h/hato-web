<template>
  <!-- ヘッダ -->
  <header>
    <a href="index.html">
      <img src="./assets/logo.svg"/>
    </a>
  </header>
  <TabUI/>
  <!-- フッター -->
  <footer>
    <h6>
      Copyright︎ 2020 KotaKato. All rights reserved.
    </h6>
  </footer>
</template>

<script>
import TabUI from './components/tabUIComp'
export default {
  name: 'App',
  components: {
    'TabUI': TabUI
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
header {
  text-align: center;
}
header a img {
  width: 100px;
}
</style>
