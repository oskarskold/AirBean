<template>
  <div class="cart-wrapper">
    <h1>Din beställning</h1>
    <main>
      <ul v-for="order in orders" :key="order.id">
        <li>{{ order.title }}</li>
        <li>{{ order.price }} kr</li>
      </ul>
      <p>{{ Total }}</p>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.state.orderList;
    },
    Total() {
      return this.$store.getters.setTotal;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

main {
  display: flex;
  flex-direction: column;
}
ul {
  margin: 1rem 2rem 1rem 1rem;
  align-self: flex-start;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
li {
  margin: 0;
  padding: 0;
}
li:nth-of-type(2) {
  width: 40px;
}

ul li:nth-child(1) {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
