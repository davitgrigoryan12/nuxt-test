<template>
  <nav class="app-navbar">
    <img 
      class="app-logo" 
      src="../assets/quwi-logo.png" 
      alt="app-logo"
    >
    <div>
      <nuxt-link v-if="!isAuth" class="nav-link" to="/login">
        Sign in
      </nuxt-link>
      <nuxt-link v-if="isAuth" class="nav-link" to="/">
        Projects
      </nuxt-link>
      <span v-if="isAuth" class="nav-link" @click="logoutUser">
        Logout
      </span>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getCookie } from '../utils/helper';

export default {
  name: 'Navbar',

  computed: {
    ...mapGetters(["isAuth"])
  },

  mounted() {
    const token = getCookie('token', document.cookie);
    if (token) {
      this.setIsAuth(true)
      this.setToken(token)
    }
  },

  methods: {
    ...mapMutations(["setIsAuth", "setToken"]),

    logoutUser() {
      this.$axios.$post("https://api.quwi.com/v2/auth/logout")
        .then(() => {
          this.setIsAuth(false)
          localStorage.removeItem("token")
          this.$router.push("/login")
        })
        .catch(err => {
          console.error(err.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-navbar {
  height: 46px;
  width: 100%;
  background-color: #fff;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px black;

  .app-logo {
    width: 25px;
    height: 25px;
    margin-left: 20px;
  }

  .nav-link {
    font-size: .8em;
    color: #636363;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>