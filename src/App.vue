<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
* {
  margin: 0;
  padding: 0;
}
#app {
  max-width: 500px;
  margin: 0;
  padding: 0;
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
