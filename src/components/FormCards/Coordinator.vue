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
                <option selected>{{currentUser}}</option>
                <option 
                v-for="user in users" 
                :key="user.id"
                >
                {{user.name +' '+ user.lastname}}
                </option>
            </select>
            <div>name:{{name}}</div>
            <div>current {{currentUser}}</div>
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
    name: 'Walter Nelson',
    email: '',
    selected: true         
  }),
  computed: {
    users () {
      return this.$store.getters.users
    },
    currentUser () {
      return this.$store.getters.currentUser.name + ' ' + this.$store.getters.currentUser.lastname
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
