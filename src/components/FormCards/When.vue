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
            <input type="text" id="date" placeholder="dd/mm/yyyy">
            <span>at</span>
            <input type="text" id="time" placeholder="--:--">
            <input type="radio">
            <span>AM</span>
            <input type="radio">
            <span>PM</span>
          </li>
          <li>
            <label for="dur">DURATION</label>
            <input type="text" placeholder="Number" id="dur">
            <span>hour</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>
