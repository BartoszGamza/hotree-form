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
    submitted: false,
    post: {
      title: '',
      description: '',
      category_id: '',
      paid_event: false,
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
    submission (state) {
      state.submitted = true
    },
    updateCoordinatorId (state, payload) {
      state.post.coordinator.id = payload
    },
    updateEmail (state, payload) {
      state.post.coordinator.email = payload
    },
    updateDate (state, payload) {
      state.post.date = payload
    },
    updateDuration (state, payload) {
      state.post.duration = payload
    },
    updateTitle (state, payload) {
      state.post.title = payload
    },
    updateDescription (state, payload) {
      state.post.description = payload
    },
    updateCategory (state, payload) {
      const category_id = state.categories.find( c => c.name === payload).id
      state.post.category_id = category_id
    },
    updatePayment (state, payload) {
      state.post.paid_event = payload
    },
    updateFee (state, payload) {
      state.post.event_fee = payload
    },
    updateReward (state, payload) {
      state.post.reward = payload
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
    },
    submitEvent ({commit, state}) {
      console.log(state.post)
      commit('submission')
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
    },
    post (state) {
      return state.post
    },
    submitted (state) {
      return state.submitted
    }
  }
})