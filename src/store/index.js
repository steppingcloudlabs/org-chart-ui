import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSnackbar: false,
    snackbarDuration: 3000,
    snackbarMessage: "Hello",
    snackbarHeading: "Error",
    snackbarColor: "Red",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
