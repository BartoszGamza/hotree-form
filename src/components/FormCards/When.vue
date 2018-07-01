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
              type="date" 
              id="date"
              v-model="date"
              @blur="$v.date.$touch()"
              :class="{invalid: $v.date.$error}"
              >
              <div>{{$v.date}}</div>
              <div>{{date}}</div>
            <span>at</span>
            <input 
              type="time"
              id="time" 
              v-model="time"
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
import { required, between, minValue} from 'vuelidate/lib/validators'
export const minDate = (value) => moment(value, "YYYY-MM-DD", true).isSameOrAfter(moment().format("YYYY-MM-DD"))
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
      required
    },
    duration: {
      duration: between(0, 12)
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">

</style>
