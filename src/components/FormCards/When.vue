<template>
  <div class="card">
      <div class="card-heading">
        When
        <hr>
      </div>
      <div class="card-form">
        
          <div class="line">
            <label for="time" :class="{required: $v.date.$invalid || $v.time.$invalid, invalid: $v.date.$error || $v.time.$error }">STARTS ON</label>
            <input 
              type="text" 
              id="date"
              v-model="date"
              onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"
              placeholder="dd/mm/yyyy"
              @blur="$v.date.$touch()"
              :class="{invalid: $v.date.$error}"
              >
            
            <span>at</span>
            <input 
              type="text"
              id="time" 
              v-model="time"
              onfocus="(this.type='time')" onblur="if(!this.value)this.type='text'"
              placeholder="--:--"
              min="00:00"
              max="12:00"
              @blur="updateDate"
              :class="{invalid: $v.time.$error}"
              >
            <input type="radio" value="AM" v-model="AMPM" @change="updateDate">
            <span>AM</span>
            <input type="radio" value="PM" v-model="AMPM" @change="updateDate">
            <span>PM</span>
            <ErrorLabel v-if="$v.date.$error || $v.time.$error" message="Provide date and time"></ErrorLabel>
          </div>
          <div class="line">
            <label for="dur" :class="{invalid: $v.duration.$error}">DURATION</label>
            <input 
              type="number" 
              id="dur" v-model="duration" 
              placeholder="Number"
              @blur="updateDuration"
              :class="{invalid: $v.duration.$error}"
              >
            <span>hour</span>
            <ErrorLabel v-if="$v.duration.$error" message="Between 1 and 12"></ErrorLabel>
          </div>
      </div>
    </div>
</template>

<script>
import ErrorLabel from '../../components/ErrorLabel'
import moment from 'moment'
import { required, between, helpers} from 'vuelidate/lib/validators'
export const minDate = (value) => moment(value, "YYYY-MM-DD", true).isSameOrAfter(moment().format("YYYY-MM-DD"))
export const timeFormat = helpers.regex('timeFormat', /^(1[0-2]|0?[1-9]):[0-5][0-9]*$/)
export default {
  data: () => ({
    date: '',
    time: '',
    AMPM: 'AM',
    duration: ''
  }),
  components: {
      ErrorLabel
    },
  validations: {
    date: {
      required,
      minDate
    },
    time: {
      required,
      timeFormat
    },
    duration: {
      duration: between(1, 12)
    }
  },
  methods: {
    toDateTime () {
      let TimeString = this.time + ':00' + ' ' + this.AMPM
      let TimeFormat = moment(TimeString, "hh:mm A").format("HH:mm")
      return this.date + 'T' + TimeFormat
    },
    toSeconds () {
      return this.duration * 3600
    },
    updateDate () {
      this.$v.$touch()
      if(!this.$v.$invalid) {
        const dateTime = this.toDateTime()
        this.$store.commit('updateDate', dateTime)
      }
    },
    updateDuration () {
      this.$v.duration.$touch()
      if(!this.$v.duration.$invalid) {
        const seconds = this.toSeconds()
        this.$store.commit('updateDuration', seconds)
      }
    }
  }
}
</script>

<style lang="stylus">
.datepicker
  display inline-block
  appearance none
  -webkit-appearance none
  -moz-appearance none 
  
#date
  width 150px
#time
  width 75px

</style>
