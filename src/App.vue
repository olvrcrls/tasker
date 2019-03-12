<template>
  <div id="app" class="container mx-auto">
    <router-view :key='$router.path'/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald');
html {
  /* background: url('../public/img/bg.jpg') repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; */
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}

.content {
  margin-right: 25rem;
  margin-left: 25rem;
}
</style>
