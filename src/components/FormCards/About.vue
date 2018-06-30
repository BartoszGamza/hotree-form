<template>
    <div class="card">
      <div class="card-heading">
        About
        <hr>
      </div>
      <div class="card-form">
          <div class="line">
            <label for="title" :class="{required: $v.title.$invalid}">TITLE</label>
            <input 
              type="text"
              id="title"
              placeholder="Make it short and clear"
              v-model="title"
              @blur="$v.title.$touch()"
              :class="{invalid: $v.title.$error}"
              >
          </div>
          <div class="line">
            <label for="desc" :class="{required: $v.description.$invalid}">DESCRIPTION</label>
            <textarea 
              name="desc" 
              id="desc"
              maxlength="140"
              placeholder="Write about your event, be creative"
              v-model="description"
              @blur="$v.description.$touch()"
              :class="{invalid: $v.description.$error}"
              >
              
              </textarea>
            <div class="bottomline">
              <div class="comment">Max length 140 characters</div>
              <div class="counter">{{wordCount}}</div>
            </div>
          </div>
          <div class="line">
            <label for="cat">CATEGORY</label>
            <select
              id="cat"
              v-model="category"
              >
              <option value="" disabled selected>Select category</option>
              <option v-for="category in categories" :key="category.id">{{category.name}}</option>
            </select>
            <div class="bottomline">
              Descibes topic and people who should be interested in this event
            </div>
          </div>
          <div class="line">
            <label :class="{required: $v.fee.$invalid && show}">PAYMENT</label>
            <input type="radio" value="false" v-model="paid_event" @click="show = false">
            <span>Free event</span>
            <input type="radio" value="true" v-model="paid_event" @click="show = true">
            <span>Paid event</span>
            <input 
              type="number" 
              v-show="show" 
              id="fee"
              placeholder="Fee"
              v-model="fee"
              @input="$v.fee.$touch()" 
              :class="{invalid: $v.fee.$error}"
              >
            <span v-show="show">$</span>
          </div>
          <div class="line">
            <label for="reward">REWARD</label>
            <input 
              type="number" 
              id="reward"
              placeholder="Number"
              v-model="reward" 
              @blur="$v.reward.$touch()" 
              :class="{invalid: $v.reward.$error}"
              >
            <span>Reward points for attendance</span>
          </div>
        </div>
    </div>
</template>

<script>
import { required, requiredIf, between, numeric, maxValue } from 'vuelidate/lib/validators'
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
  watch: {
    show () {
      return false
    }
  },
  methods: {
  },
  validations: {
    title: {
      required
    },
    description: {
      required
    },
    fee: {
      required: requiredIf('show'),
      fee: between(1, 100)
    },
    reward: {
      reward: between(0, 100)
    }
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


