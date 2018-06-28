import Vuex from 'vuex'
import Vue from 'vue'
import Employes from '../assets/employes.json'
import Categories from '../assets/categories.json' 

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: {
      id: 3, //Hardcoded, given in task description.
      email: '',
      name: '',
      lastName:''
    },
    usersList: [],
    categories: []
  },
  mutations: {
    setUsers (state, payload) {
      state.usersList = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    getUser ({commit}, state) {
      let obj = Employes
      commit('setUsers', obj)
    },
    getCategories ({commit}) {
      let obj = Categories
      commit('setCategories', obj)
    }
  },
  getters: {
    users (state) {
      return state.usersList
    },
    categories (state) {
      return state.categories
    },
    currentUser (state) {
      return state.currentUser
    }
  }
})