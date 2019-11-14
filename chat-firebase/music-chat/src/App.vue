<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;

       /* background-color: #000; */
    background-image: url("img/bg.jpg");
    background-position: center;
    background-size: cover;
    display: table;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
    position: fixed;
}


</style>
