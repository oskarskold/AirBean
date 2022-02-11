<template>
  <div class="home">
    <h1>Meny</h1>
    <div class="container-menu">
      <ul v-for="m in menu" :key="m.id">
        <div class="wrapper-menu">
          <li>{{ m.title }}</li>
          <li>{{ m.price }}</li>
        </div>
        <p>{{ m.desc }}</p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    menu() {
      return this.$store.state.menu.menu;
    },
  },
};
</script>

<style scoped>
.home {
  background: #f3e4e1;
}
h1 {
  color: #2f2926;
}

li {
  color: #2f2926;
  margin: 0 1rem;
  font-weight: 700;
}
p {
  color: #2f2926;
}
ul {
  list-style-type: none;
}
.wrapper-menu {
  display: flex;
}
.container-menu {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>
