<template>
  <div class="home">
    <header>
      <img src="../assets/graphics/graphics-header.svg" alt="" />
    </header>
    <div class="cart">
      <router-link to="/nav">
        <button class="menu-btn">
          <img src="../assets/graphics/navicon.svg" width="20" />
        </button>
      </router-link>

      <button class="bag-btn">
        <img src="../assets/graphics/bag.svg" width="15" />
      </button>
      <button class="counter-btn">
        {{ showCounter }}
      </button>
    </div>

    <h1>Meny</h1>
    <div class="container-menu">
      <ul v-for="m in menu" :key="m.id">
        <div class="wrapper-menu">
          <div class="title">
            <div>
              <img
                class="add-icon"
                src="../assets/graphics/add.svg"
                width="20"
                alt="add icon"
                @click="addToCart"
              />
              <li>{{ m.title }}</li>
            </div>
            <li>{{ m.desc }}</li>
          </div>
          <p>{{ m.price }}kr</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart");
    },
  },
  computed: {
    menu() {
      return this.$store.state.menu.menu;
    },
    showCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style scoped>
.home {
  background: #f3e4e1;
}
header img {
  width: 100%;
}
h1 {
  color: #2f2926;
}
.menu-btn {
  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: pink;
  position: absolute;
  top: 80px;
  left: 30px;
}
.bag-btn {
  padding: 15px;
  background-color: black;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 80px;
}
.cart {
  display: flex;
  justify-content: right;
  margin: 1rem;
}
.counter-btn {
  border-radius: 50%;
  padding: 6px;
  border: none;
  background-color: orangered;
  font-size: 1rem;
  font-weight: 700;
  position: absolute;
  top: 70px;
}
li {
  color: #2f2926;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 0.7rem;
}
p {
  color: #2f2926;
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0 1rem;
}
.wrapper-menu {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.title {
  display: flex;
  flex-direction: column;
}
.title div {
  display: flex;
}
.title div li {
  font-size: 1rem;
  font-weight: 600;
}
.container-menu {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.add-icon {
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 0.2rem;
  margin: 0.5rem;
}
</style>
