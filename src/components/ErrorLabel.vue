<template>
  <transition name="fade">
    <div class="errorLabel">
    {{message}}
    </div>
  </transition>  
</template>

<script>
export default {
  props: ['message']
}
</script>

<style lang="stylus" scoped>
.errorLabel
  background: #ffb2b2 !important
  color white
  font-weight 300
  font-size 11px 
  padding: 5px !important
  border-radius: 0 !important
  position: relative 
  display: inline-block !important
  margin-left 5px
  bottom 3px

.errorLabel::before
  content: ''
  width: 0  
  height: 0  
  border-top: 5px solid transparent
  border-bottom: 5px solid transparent
  border-right: 5px solid #ffb2b2
  position: absolute  
  left: -5px
  bottom: 6px 

.fade-enter-active, .fade-leave-active 
  transition opacity 1s

.fade-enter, .fade-leave-to 
  opacity 0

</style>
