<template>
    <div class="card">
      <div class="card-heading">
        About
        <hr>
      </div>
      <div class="card-form">
          <div class="line">
            <label for="title" 
              :class="{required: $v.title.$invalid, invalid: $v.title.$error}">
              TITLE
            </label>
            <input 
              type="text"
              id="title"
              placeholder="Make it short and clear"
              v-model="title"
              @blur="updateTitle"
              :class="{invalid: $v.title.$error}"
              >
              <error-label 
                v-if="$v.title.$error" 
                message="Title cannot be empty">
              </error-label>
          </div>
          <div class="line">
            <label 
              for="desc" 
              :class="{required: $v.description.$invalid, invalid: $v.description.$error}">
              DESCRIPTION
            </label>
            <textarea 
              name="desc" 
              id="desc"
              maxlength="140"
              placeholder="Write about your event, be creative"
              v-model="description"
              @blur="updateDescription"
              :class="{invalid: $v.description.$error}"
              >
            </textarea>
              <error-label 
                v-if="$v.description.$error" 
                message="Fill the description">
              </error-label>
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
              @change="updateCategory"
              >
              <option value="" disabled selected>Select category</option>
              <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
            </select>
            <div class="bottomline">
              Descibes topic and people who should be interested in this event
            </div>
          </div>
          <div class="line">
            <label 
              :class="{required: $v.fee.$invalid && show, invalid: $v.fee.$error && show}">
              PAYMENT
            </label>
            <input 
              type="radio" 
              value=false 
              v-model="paid_event" 
              @click="show = false" 
              @change="updatePayment">
            <div id="noJump">
              <span id="noJumpSpan">Free event</span>
            </div>
            <input 
              type="radio" 
              value=true 
              v-model="paid_event" 
              @click="show = true" 
              @change="updatePayment">
            <div id="noJump">
              <span id="noJumpSpan">Paid event</span>
            </div>
            <input 
              type="number" 
              v-show="show" 
              id="fee"
              placeholder="Fee"
              min="0"
              max="100"
              v-model="fee"
              @blur="updateFee" 
              :class="{invalid: $v.fee.$error}"
              >
            <span v-show="show">$</span>
            <error-label 
              v-if="$v.fee.$error && show" 
              message="Please provide fee">
            </error-label>
          </div>
          <div class="line">
            <label for="reward" 
              :class="{invalid: $v.reward.$error}">
              REWARD
            </label>
            <input 
              type="number"
              min="0"
              max="100"
              id="reward"
              placeholder="Number"
              v-model="reward" 
              @blur="updateReward" 
              :class="{invalid: $v.reward.$error}"
              >
            <span>Reward points for attendance</span>
            <error-label 
              v-if="$v.reward.$error" 
              message="Between 0 and 100">
            </error-label>
          </div>
        </div>
    </div>
</template>

<script>
import ErrorLabel from '../../components/UI_elements/ErrorLabel'
import { required, requiredIf, between } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    title: '',
    description: '',
    category: '',
    paid_event: false,
    fee: '',
    reward: '',
    show: false
  }),
  computed: {
    categories () {
      return this.$store.getters.categories
    },
    wordCount () {
      return 140 - this.description.length
    }
  },
  components: {
      ErrorLabel
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
  },
  methods: {
    updateTitle () {
      this.$v.title.$touch()
      if(!this.$v.title.$invalid) {
        this.$store.commit('updateTitle', this.title)
      }
    },
    updateDescription () {
      this.$v.description.$touch()
      if (!this.$v.description.$invalid) { 
        this.$store.commit('updateDescription', this.description)
      }
    },
    updateCategory () {
      this.$store.commit('updateCategory', this.category)
    },
    updatePayment () {
      this.$store.commit('updatePayment', this.paid_event)
    },
    updateFee () {
      this.$v.fee.$touch()
      if(!this.$v.fee.$invalid) {
        this.$store.commit('updateFee', this.fee) 
      }
    },
    updateReward () {
      this.$v.reward.$touch()
      if (!this.$v.reward.$invalid) {
        this.$store.commit('updateReward', this.reward)
      }
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
  padding-right 5px

.bottomline
  width 450px;
  display inline-block
  padding-left 125px
  font-style italic
  font-size 12px
  color #cccccc

#noJump
  min-height 32px
  display inline-block
  vertical-align middle

#noJumpSpan
  vertical-align -6px
</style>


