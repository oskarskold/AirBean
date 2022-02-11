<template>
  <div class="container">
    <header>
      <img src="@/assets/graphics/graphics-header.svg" alt="header" />
    </header>
    <main>
      <img src="@/assets/graphics/profile.svg" alt="header" />
      <h1>{{ loginInfo.name }}</h1>
      <p>{{ loginInfo.email }}</p>
    </main>
    <section>
      <h2>Orderhistorik</h2>
      <div class="order">
        <div class="hastag">
          <p>#AB1123282323Z</p>
          <p>total ordersumma</p>
        </div>
        <div class="datum">
          <p>20/03/06</p>
          <p>443 kr</p>
        </div>
      </div>
      <div class="order">
        <div class="hastag">
          <p>#AB1123282323Z</p>
          <p>total ordersumma</p>
        </div>
        <div class="datum">
          <p>20/03/06</p>
          <p>443 kr</p>
        </div>
      </div>
      <div class="order">
        <div class="hastag">
          <p>#AB1123282323Z</p>
          <p>total ordersumma</p>
        </div>
        <div class="datum">
          <p>20/03/06</p>
          <p>443 kr</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    loginInfo() {
      return this.$store.state.loginInfo;
    },
  },
};
</script>

<style scoped lang="scss">
h1,
p {
  color: #f3e4e1;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2f2926;
  padding: 2rem;
}
.order {
  display: flex;
  justify-content: space-between;
  width: 300px;
  border-bottom: 1px solid #ffffff;
}
</style>
