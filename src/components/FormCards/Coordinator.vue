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
            <select id="resp" v-model="coordinator.name">
              <option v-for="user in users" :key="user.id">{{user.name}}</option>
            </select>
          </li>
          <li>
            <label for="email">EMAIL</label>
            <input type="email" id="email" placeholder="Email" v-model="coordinator.email">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    coordinator: {
      name: '',
      email: ''         
    }
  }),
  computed: {
    users () {
      return this.$store.getters.users
    }
  }
}
</script>
