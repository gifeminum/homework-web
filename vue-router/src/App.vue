<template>
  <div id="app">
    <div class="ui inverted menu">
      <div class="item">
        <img src="./assets/logo.png" height="30px">  
      </div>
      <a href="#/contact" class="item">Contacts</a>
      <a href="#/" class="right floated item">
        <i class="user outline icon"></i>
      </a>
    </div>
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
  color: #2c3e50;
  margin-top: 0px;
}
</style>
