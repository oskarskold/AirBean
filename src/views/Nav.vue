<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Meny</router-link>
      <router-link to="/about">Vårt kaffe</router-link>
      <router-link to="/profile">Min profil</router-link>
      <router-link to="/status">Orderstatus</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #2f2926;
  color: white;
}

nav {
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
  margin: 2rem;
}
</style>
