<template>
    <div class="card">
      <div class="card-heading">
        About
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="title">TITLE</label>
            <input type="text" id="title" v-model="title" placeholder="Make it short and clear">
          </li>
          <li>
            <label for="desc">DESCRIPTION</label>
            <input type="text" id="desc" v-model="description" placeholder="Write about your event, be creative">
          <li>
            <label for="cat">CATEGORY</label>
            <select id="cat" v-model="category">
              <option v-for="category in categories" :key="category.id">{{category.name}}</option>
            </select>
            <button @click="seeCats">check</button>
          </li>
          <li>
            <label>PAYMENT</label>
            <input type="radio">
            <span>Free event</span>
            <input type="radio">
            <span>Paid event</span>
            <input type="text" id="fee" v-model="fee" placeholder="Fee">
            <span>$</span>
          </li>
          <li>
            <label for="reward">REWARD</label>
            <input type="text" id="reward" v-model="reward" placeholder="Number">
            <span>Reward points for attendance</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    title: '',
    description: '',
    category: '',
    payment: false,
    fee: '',
    reward: ''
  }),
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    seeCats () {
      console.log(this.categories)
    }
  }
}
</script>

