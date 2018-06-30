<template>
    <div class="card">
      <div class="card-heading">
        Coordinator
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="resp" :class="{required: $v.name.$invalid}">RESPONSIBLE</label>
            <select 
              id="resp" 
              v-model="name"
              @blur="$v.name.$touch()"
              :class="{invalid: $v.name.$error}"
              >
              <option 
                v-for="user in users" 
                :key="user.id">
                {{user.name +' '+ user.lastname}}
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
import { email, required } from 'vuelidate/lib/validators'
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
    },
    name: {
      required
    }
  }
}
</script>

<style lang="stylus">

</style>
