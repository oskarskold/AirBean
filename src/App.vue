<template>
  <div id="app">
    <div class="nav">
      <router-link to="/nav"
        ><img src="@/assets/graphics/close.svg" alt="close" width="18px"
      /></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
}

#nav {
  padding: 30px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 1000px;
}
</style>
