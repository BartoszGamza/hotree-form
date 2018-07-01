<template>
  <div class="card">
      <div class="card-heading">
        When
        <hr>
      </div>
      <div class="card-form">
        
          <div class="line">
            <label for="time" :class="{required: $v.date.$invalid}">STARTS ON</label>
            <input 
              type="text" 
              id="date"
              placeholder="dd/mm/yyyy"
              v-model="date"
              @blur="$v.date.$touch()"
              :class="{invalid: $v.date.$error}"
              >
            <span>at</span>
            <input 
              type="text"
              id="time"
              placeholder="--:--" 
              v-model="time"
              min="00:00"
              max="12:00"
              @blur="$v.time.$touch()"
              :class="{invalid: $v.time.$error}"
              >
            <input type="radio" value="AM" v-model="AMPM">
            <span>AM</span>
            <input type="radio" value="PM" v-model="AMPM">
            <span>PM</span>
          </div>
          <div class="line">
            <label for="dur">DURATION</label>
            <input 
              type="number" 
              id="dur" v-model="duration" 
              placeholder="Number"
              @input="$v.duration.$touch()"
              :class="{invalid: $v.duration.$error}"
              >
            <span>hour</span>
          </div>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
import { required, between, helpers} from 'vuelidate/lib/validators'
export const minDate = (value) => moment(value, "DD/MM/YYYY", true).isSameOrAfter(moment().format("DD/MM/YYYY"))
export const timeFormat = helpers.regex('timeFormat', /^(1[0-2]|0?[1-9]):[0-5][0-9]*$/)
export default {
  data: () => ({
    date: '',
    time: '',
    AMPM: 'AM',
    duration: ''
  }),
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
      duration: between(0, 12)
    }
  },
  computed: {
    toDateTime () {
      let TimeString = this.time + ':00' + ' ' + this.AMPM
      let TimeFormat = moment(TimeString, "hh:mm A").format("HH:mm")
      return this.date + 'T' + TimeFormat
    },
    toSeconds () {
      return this.duration * 3600
    }
  }
}
</script>

