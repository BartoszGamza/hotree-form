<template>
    <div class="card">
      <div class="card-heading">
        About
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="title">TITLE</label>
            <input type="text" id="title" placeholder="Make it short and clear">
          </li>
          <li>
            <label for="desc">DESCRIPTION</label>
            <input type="text" id="desc" placeholder="Write about your event, be creative">
          <li>
            <label for="cat">CATEGORY</label>
            <select id="cat"></select>
          </li>
          <li>
            <label>PAYMENT</label>
            <input type="radio">
            <span>Free event</span>
            <input type="radio">
            <span>Paid event</span>
            <input type="text" id="fee" placeholder="Fee">
            <span>$</span>
          </li>
          <li>
            <label for="reward">REWARD</label>
            <input type="text" id="reward" placeholder="Number">
            <span>Reward points for attendance</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

