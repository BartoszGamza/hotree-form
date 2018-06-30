<template>
    <div class="alert">
      <div class="alert-heading">
        Success
      </div>
      <div class="alert-message">
        Event has been created.
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
.alert
  box-sizing border-box
  margin-left  auto
  margin-right auto
  margin-top 25px
  margin-bottom 25px
  max-width 800px
  height 100px
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  background-color #f0fcf3
  border-radius 5px
  padding 20px 40px 5px 40px

.alert-heading
  font-size 25px
  color #80c684

.alert-message
  color #7c7c7c
  margin 10px 0 10px 0
</style>
