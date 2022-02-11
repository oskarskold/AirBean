<template>
  <div>
    <Login @changeView="changeLogin" v-if="isLoggedIn == false" />
    <Konto v-else />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Konto from "../components/Konto.vue";
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    changeLogin() {
      this.isLoggedIn = true;
    },
  },
  components: { Login, Konto },
};
</script>
