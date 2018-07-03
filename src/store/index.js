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
    categories: [],
    post: {
      title: '',
      description: '',
      category_id: '',
      paid_event: '',
      event_fee: '',
      reward: '',
      date: '',
      duration: '',
      coordinator: {
        email: '',
        id: ''
      }
    },
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
    },
    updateCoordinator (state, payload) {
      state.post.coordinator.email = payload
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