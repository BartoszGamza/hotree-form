import Vuex from 'vuex'
import Vue from 'vue'
import Employes from '../assets/employes.json'
import Categories from '../assets/categories.json' 

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: {
      id: 3,
      email: '',
      name: '',
      lastname:''
    },
    usersList: [],
    categories: []
  },
  mutations: {
    setUsers (state, payload) {
      state.usersList = payload
    },
    setUser (state, payload) {
      state.currentUser.email = payload.email
      state.currentUser.name = payload.name
      state.currentUser.lastname = payload.lastname
    },
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    getUser ({commit, state}) {
      let obj = Employes
      const userId = state.currentUser.id
      const user = obj.find( e => e.id === userId)
      let users = obj.filter( x => x.id !== userId)
      commit('setUsers', users)
      commit('setUser', user)
    },
    getCategories ({commit}) {
      let obj = Categories
      commit('setCategories', obj)
    }
  },
  getters: {
    users (state)  {
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