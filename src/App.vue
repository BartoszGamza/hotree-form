<template>
  <div id="app">
    <header class="top">
      <div class="header">
        <h1>title</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  }
}
</script>

<style lang="stylus">
body
  font-family: 'Roboto', sans-serif
  font-size 15px
  background-color #f8f8fa
  margin 0
  padding-top 25px
  color #afafaf
  overflow-y scroll

.header
  background-color white
  padding-left 30%
  position fixed
  z-index 999
  height 25
  top 0
  left 0
  right 0
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
</style>
