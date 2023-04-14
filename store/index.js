// import axios from '@nuxtjs/axios';
// const token = localStorage.getItem('token')
// console.log(window)
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export const state = () => ({
  isAuth: false,
  token: ""
})

export const mutations = {
  setIsAuth(state, payload) {
    state.isAuth = payload
  },

  setToken(state, payload) {
    state.token = payload
  }
}

export const getters = {
  isAuth: (state) => state.isAuth,
  userToken: (state) => state.token
}