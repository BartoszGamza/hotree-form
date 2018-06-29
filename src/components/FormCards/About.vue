<template>
    <div class="card">
      <div class="card-heading">
        About
        <hr>
      </div>
      <div class="card-form">
          <div class="line">
            <label for="title" class="req">TITLE</label>
            <input type="text" id="title" v-model="title" placeholder="Make it short and clear">
          </div>
          <div class="line">
            <label for="desc" class="req">DESCRIPTION</label>
            <textarea name="desc" id="desc" v-model="description" placeholder="Write about your event, be creative"></textarea>
            <div class="bottomline">
              <div class="comment">Max length 140 characters</div>
              <div class="counter">{{wordCount}}</div>
            </div>
          </div>
          <div class="line">
            <label for="cat">CATEGORY</label>
            <select id="cat" v-model="category">
              <option v-for="category in categories" :key="category.id">{{category.name}}</option>
            </select>
            <div class="bottomline">
              Descibes topic and people who should be interested in this event
            </div>
          </div>
          <div class="line">
            <label>PAYMENT</label>
            <input type="radio" value="false" v-model="paid_event">
            <span>Free event</span>
            <input type="radio" value="true" v-model="paid_event">
            <span>Paid event</span>
            <input type="text" v-show="paid_event" id="fee" v-model="fee" placeholder="Fee">
            <span v-show="paid_event">$</span>
          </div>
          <div class="line">
            <label for="reward">REWARD</label>
            <input type="text" id="reward" v-model="reward" placeholder="Number">
            <span>Reward points for attendance</span>
          </div>
        </div>
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
  display inline-block

.counter
  display inline-block
  float right

.bottomline
  width 450px;
  display inline-block
  padding-left 120px
  font-style italic
  font-size 12px
  color #cccccc
</style>


