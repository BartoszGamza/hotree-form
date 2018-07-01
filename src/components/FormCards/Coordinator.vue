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
                <option value="" >{{currentUser.name + ' ' +currentUser.lastname}}</option>
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
            <label for="email">EMAIL</label>
            <input 
              type="email" 
              id="email"
              placeholder="Email"
              @blur="$v.email.$touch()" 
              v-model="email"
              :class="{invalid: $v.email.$error}"
              >
              <div>{{currentUser}}</div>
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
    },
    currentUser () {
      return this.$store.getters.currentUser
    },
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
