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