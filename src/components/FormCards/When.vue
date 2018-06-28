<template>
  <div class="card">
      <div class="card-heading">
        When
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="time">STARTS ON</label>
            <input type="text" id="date" v-model="date" placeholder="dd/mm/yyyy">
            <span>at</span>
            <input type="text" id="time" v-model="time" placeholder="--:--">
            <input type="radio" value="AM" v-model="AMPM">
            <span>AM</span>
            <input type="radio" value="PM" v-model="AMPM">
            <span>PM</span>
          </li>
          <li>
            <label for="dur">DURATION</label>
            <input type="text" id="dur" v-model="duration" placeholder="Number" >
            <span>hour</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    date: '',
    time: '',
    AMPM: 'AM',
    duration: ''
  })
}
</script>
