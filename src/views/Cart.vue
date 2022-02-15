<template>
  <div class="cart-wrapper">
    <h1>Din beställning</h1>
    <main>
      <ul v-for="order in orders" :key="order.id">
        <div class="amount">
          <li>{{ order.title }}</li>
          <div class="amount-wrapper">
            <img
              class="add-icon"
              src="../assets/graphics/arrow-up.svg"
              width="20"
              alt="add icon"
              @click="$store.dispatch('addOrder', order)"
            />
            <li>{{ order.amount }} st</li>
            <img
              class="add-icon"
              src="../assets/graphics/arrow-down.svg"
              width="20"
              alt="add icon"
              @click="$store.dispatch('decOrder', order)"
            />
          </div>
        </div>
        <li class="price">{{ order.price }} kr</li>
      </ul>
      <div class="total">
        <p>{{ Total }} kr</p>
        <p>inkl moms + drönarleverans</p>
      </div>
      <button>Take my money!</button>
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
    showCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

main {
  display: flex;
  flex-direction: column;
}
h1 {
  text-align: center;
}
ul {
  margin: 1rem 2rem 1rem 1rem;
  align-self: flex-start;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
.amount {
  display: flex;
  justify-content: space-around;
  width: 300px;
}
.amount-wrapper {
  display: flex;
  flex-direction: column;
}
.price {
  margin-left: 2rem;
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
.add-icon {
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 0.2rem;
  margin: 0.5rem;
}
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 10px;
    padding: 1rem 3rem;
  }
}
</style>
