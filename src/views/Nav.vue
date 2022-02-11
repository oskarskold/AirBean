<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Meny</router-link>
      <div class="underline"></div>
      <router-link to="/about">Vårt kaffe</router-link>
      <div class="underline"></div>

      <router-link to="/profile">Min profil</router-link>
      <div class="underline"></div>

      <router-link to="/status">Orderstatus</router-link>
      <div class="underline"></div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

.wrapper {
  background: #2f2926;
  color: white;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
  margin: 2rem;
  font-family: "PT Serif", serif;
  font-weight: 700;
}
.underline {
  border-bottom: 1px solid rgb(114, 114, 114);
  width: 2rem;
  margin: 0;
}
</style>
