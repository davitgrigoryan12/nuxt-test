<template>
  <div class="auth-container">
    <form class="auth-form" @submit.prevent="loginUser">
      <div class="auth-form__header">
        <img 
          class="auth-form__logo" 
          src="../assets/quwi-logo.png" 
          alt="app-logo"
        >
        <div class="auth-form__app-name">
          QUWI
        </div>
      </div>
      <input 
        v-model="email" 
        class="auth-form__input" 
        type="text" 
        placeholder="email"
      >
      <div class="auth-form__error-message">
        {{ emailError }}
      </div>
      <input
        v-model="password"
        class="auth-form__input" 
        type="password" 
        placeholder="password"
      >
      <div class="auth-form__error-message">
        {{ passwordError }}
      </div>
      <button class="auth-form__button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LoginPage',

  layout: 'mainLayout',

  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    }
  },

  methods: {
    ...mapMutations(["setIsAuth", "setToken"]),

    loginUser() {
      this.emailError = ""
      this.passwordError = ""
      this.$axios.$post("https://api.quwi.com/v2/auth/login", {
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.setIsAuth(true)
          this.setToken(response.token)
          localStorage.setItem("token", response.token)
          document.cookie += `${document.cookie ? ';' : ''} token=${response.token}`
          this.$router.push("/")
        })
        .catch(err => {
          this.emailError = err.response.data.first_errors.email
          this.passwordError = err.response.data.first_errors.password
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.auth-container {
  width: 100%;
  height: 70vh;
  background-image: url("../assets/gray_blur.png");
  padding-top: 30vh;

  .auth-form {
    width: 360px;
    margin: auto;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.11);
    box-shadow: 0 0 12px rgb(0 0 0 / 25%);
    border-radius: 15px;
    padding: 20px 40px;

    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    &__logo {
      width: 40px;
      height: 40px;
    }

    &__app-name {
      font-weight: 700;
      font-size: 24px;
      margin-left: 10px;
    }

    &__input {
      width: 92%;
      border: 1px solid #dadada;
      border-radius: 5px;
      outline: none;
      padding: 15px;
      margin-top: 10px;
    }

    &__button {
      background: #2668c1;
      width: 100%;
      padding: 20px 0px;
      border: none;
      border-radius: 9px;
      color: #fff;
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 18px;
      letter-spacing: 1px;
      cursor: pointer;
    }

    &__error-message {
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>