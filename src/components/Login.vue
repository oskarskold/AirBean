<template>
  <div>
    <div class="container">
      <header>
        <img src="@/assets/graphics/graphics-header.svg" alt="header" />
      </header>
      <main>
        <img src="@/assets/graphics/logo-sml.svg" alt="logo small" />
        <h1>Välkommen till</h1>
        <h1>AirBean-Familjen</h1>
        <p>Genom att skapa ett konto nedan kan</p>
        <p>du spara och se din orderhistorik</p>
        <form @submit.prevent="switchAndEmitData">
          <label>Namn</label>
          <input
            type="text"
            placeholder="Skriv ditt namn"
            v-model="loginInfo.name"
            required
          />
          <label>Epost</label>
          <input
            type="email"
            placeholder="Skriv din epost"
            v-model="loginInfo.email"
            required
          />
          <div class="radio">
            <input type="radio" value="GDPR" name="GDPR" required />
            <label>GDPR Ok!</label>
          </div>
          <button>Brew me a cup!</button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loginInfo() {
      return this.$store.state.loginInfo;
    },
  },
  methods: {
    switchAndEmitData() {
      this.$emit("changeView", this.loginInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
p {
  color: #2f2926;
}
h1 {
  margin: 0;
}
p {
  font-size: 1rem;
  margin: 0;
}
p:nth-of-type(1) {
  margin: 1rem 0 0 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3e4e1;
}
main {
  margin: 1rem;
  img {
    margin: 1rem;
  }
}
form {
  display: flex;
  flex-direction: column;
  margin: 1rem 4rem;
  align-items: center;
}
label {
  margin: 0 0 1rem 0;
  color: #2f2926;
}
input {
  padding: 1rem 3.5rem;
  margin: 0 0 1rem 0;
  border-radius: 0.7rem;
  border: 1px solid black;
  text-align: center;
  background: #f3e4e1;
}
.radio {
  display: flex;
  align-self: flex-start;
  label {
    font-size: 0.7rem;
  }
  input {
    margin: 0 0.5rem 0 0;
  }
}

button:nth-of-type(1) {
  padding: 1rem 3rem;
  border-radius: 1000px;
  color: #f3e4e1;
  background: #2f2926;
  border: none;
}
</style>
