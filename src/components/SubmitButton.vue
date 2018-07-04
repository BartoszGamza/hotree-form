<template>
  <div>
    <button id="publish" @click="submit" :class="{disabled: !enabled}">PUBLISH EVENT</button>
  </div>
</template>

<script>
export default {
  props:['enabled'],
  methods: {
    submit () {
      this.$store.dispatch('submitEvent')
    }
  }
}
</script>

<style lang="stylus" scoped>
#publish
  box-sizing border-box
  text-align center
  background-color #ff8e1d
  width 164px
  height 50px
  color white
  font-size 13px
  border none
  outline none
  &:hover
    transform scale(1.01)
    cursor pointer 
  &.disabled
    opacity 0.8
  &.disabled:hover
    cursor default
    transform none 
</style>
