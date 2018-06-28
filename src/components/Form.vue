<template>
  <div class="container">
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
          </li>
          <li>
            <label for="cat">CATEGORY</label>
            <select id="cat"></select>
          </li>
          <li>
            <label>PAYMENT</label>
            <input type="checkbox">
            <span>Free event</span>
            <input type="checkbox">
            <span>Paid event</span>
          </li>
          <li>
            <label for="reward">REWARD</label>
            <input type="text" id="reward" placeholder="Number">
            <span>Reward points for attendance</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-heading">
        Coordinator
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="resp">RESPONSIBLE</label>
            <select id="resp"></select>
          </li>
          <li>
            <label for="email">EMAIL</label>
            <input type="email" id="email" placeholder="Email">
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-heading">
        When
        <hr>
      </div>
      <div class="card-form">
        <ul>
          <li>
            <label for="time">STARTS ON</label>
            <input type="text" id="time" placeholder="dd/mm/yyyy">
            <span>at</span>
            <input type="time">
            <input type="checkbox">
            <span>AM</span>
            <input type="checkbox">
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
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
.container
  padding-top 87px
  padding-bottom 25px
.card
  box-sizing border-box
  margin-left  auto
  margin-right auto
  margin-top 25px
  margin-bottom 25px
  max-width 800px
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  background-color white
  border-radius 5px
.card-heading
  color #436598
  padding 15px 15px 0 15px

.card-form
  
ul
  list-style none
li 
  padding 15px

</style>
