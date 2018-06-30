<template>
    <div class="card">
      <div class="card-heading">
        Coordinator
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="resp" class="req">RESPONSIBLE</label>
            <select 
              id="resp" 
              v-model="name">
              <option 
                v-for="user in users" 
                :key="user.id">
                {{user.name}}
              </option>
            </select>
          </li>
          <li>
            <label for="email">EMAIL</label>
            <input 
              type="email" 
              id="email"
              placeholder="Email"
              @blur="$v.email.$touch()" 
              v-model="email"
              :class="{invalid: $v.email.$error}"
              >
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { email } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    name: '',
    email: ''         
  }),
  computed: {
    users () {
      return this.$store.getters.users
    }
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
