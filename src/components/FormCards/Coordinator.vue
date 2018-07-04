<template>
    <div class="card">
      <div class="card-heading">
        Coordinator
        <hr>
      </div>
      <div class="card-form">
        <div class="line">
            <label for="resp">RESPONSIBLE</label>
            <select
              id="resp" 
              v-model="selected"
              @blur="updateId"
              @focus="prefix = false"
              >
              <optgroup label="Me">
                <option :value="current.id">{{current.name + ' ' + current.lastname}}</option>
              </optgroup>
              <optgroup label="Others">
                <option 
                v-for="user in users" 
                :key="user.id"
                :value="user.id"
                >
                {{user.name +' '+ user.lastname}}
                </option>
              </optgroup>
            </select>
        </div>
        <div class="line">
            <label for="email" :class="{invalid: $v.email.$error}">EMAIL</label>
            <input 
              type="email" 
              id="email"
              placeholder="Email"
              @blur="updateEmail"
              v-model="email"
              :class="{invalid: $v.email.$error}"
              >
              <ErrorLabel v-if="$v.email.$error" message="Incorrect email format"></ErrorLabel>
        </div>
      </div>
    </div>
</template>

<script>
import ErrorLabel from '../../components/ErrorLabel'
import { email, required } from 'vuelidate/lib/validators'
export default {
  props:['current'],
  data: () => ({
    email: '',
    selected: ''
  }),
  computed: {
    users () {
      return this.$store.getters.users
    },
    defaultUser () {
      return this.name
    }
  },
  methods: {
    updateId () {
      this.$store.commit('updateCoordinatorId', this.selected)
      if (this.selected === this.current.id) {
        this.prefix = true
      }
    },
    updateEmail () {
      this.$v.$touch()
      if(!this.$v.$invalid){
        this.$store.commit('updateEmail', this.email)
      }
    }
  },
  components: {
    ErrorLabel
  },
  validations: {
    email: {
      email
    }
  },
  created () {
    this.selected = this.current.id
    this.updateId()
  }
}
</script>

<style lang="stylus">

</style>
