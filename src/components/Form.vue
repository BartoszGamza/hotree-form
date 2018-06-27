<template>
  <div class="container">
    <div class="card">
      <div class="card-heading">
        About
        <hr>
      </div>
      <div class="card-form">
        <label for="title">TITLE</label>
        <input type="text" id="title" placeholder="Make it short and clear">
        <label for="desc">DESCRIPTION</label>
        <input type="text" id="desc" placeholder="Write about your event, be creative">
        
      </div>
    </div>
    <div class="card">
      <div class="card-heading">
        Coordinator
        <hr>
      </div>
      <div class="card-form">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident sequi neque itaque eos perferendis doloremque sunt cupiditate amet, eum culpa quas delectus reprehenderit suscipit rem minima assumenda odio nemo!
      </div>
    </div>
    <div class="card">
      <div class="card-heading">
        When
        <hr>
      </div>
      <div class="card-form">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus provident sequi neque itaque eos perferendis doloremque sunt cupiditate amet, eum culpa quas delectus reprehenderit suscipit rem minima assumenda odio nemo!
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
  padding 15px

.card-form
  padding 15px


</style>
