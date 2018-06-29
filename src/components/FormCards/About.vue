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
            <div class="comment">Max length 140 characters</div>
            <div class="counter">{{wordCount}}</div>
          <li>
            <label for="cat">CATEGORY</label>
            <select id="cat" v-model="category">
              <option v-for="category in categories" :key="category.id">{{category.name}}</option>
            </select>
          </li>
          <li>
            <label>PAYMENT</label>
            <input type="radio" value="false" v-model="paid_event">
            <span>Free event</span>
            <input type="radio" value="true" v-model="paid_event">
            <span>Paid event</span>
            <input type="text" v-show="paid_event" id="fee" v-model="fee" placeholder="Fee">
            <span v-show="paid_event">$</span>
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
    paid_event: false,
    fee: '',
    reward: ''
  }),
  computed: {
    categories () {
      return this.$store.getters.categories
    },
    wordCount () {
      return 140 - this.description.length
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
.comment
  position sticky
  font-style italic
  display inline-block
  
.counter
  font-style italic 
  display inline-block
  float right
</style>


