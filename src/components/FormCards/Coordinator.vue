<template>
    <div class="card">
      <div class="card-heading">
        Coordinator
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="resp">RESPONSIBLE</label>
            <select
              id="resp" 
              v-model="name"
              >
              <optgroup label="Me">
                <option selected>{{current}}</option>
              </optgroup>
              <optgroup label="Others">
                <option 
                v-for="user in users" 
                :key="user.id"
                >
                {{user.name +' '+ user.lastname}}
                </option>
              </optgroup>
            </select>
          </li>
          <li>
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
              <div v-if="!this.$v.$invalid">valid</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import ErrorLabel from '../../components/ErrorLabel'
import { email, required } from 'vuelidate/lib/validators'
export default {
  props:['name', 'current'],
  data: () => ({
    email: ''         
  }),
  computed: {
    users () {
      return this.$store.getters.users
    }
  },
  methods: {
    updateId () {
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
  }
}
</script>

<style lang="stylus">

</style>
