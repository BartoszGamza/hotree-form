<template>
  <div id="app">
    <div class="top"></div>
      <div class="header">
        <h1>New event</h1>
      </div>
    <div class="grid">
      <Form></Form>
    </div>
  </div>
</template>

<script>
import Form from './components/Form'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Form
  }
}
</script>

<style lang="stylus">
body
  font-family: 'Roboto', sans-serif
  font-size 15px
  background-color #f7f7f7
  margin 0
  color #afafaf
  overflow-y scroll
.top
  position fixed
  background-color #1e3b68 
  z-index 999
  height 15px
  top 0
  left 0
  right 0
.header
  background-color #355990
  color white
  z-index 10
  padding-left 15%
  position fixed
  padding-top 15px
  height 72px
  top 0
  left 0
  right 0
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
.grid
  position relative
  max-width 800px
  margin 0 auto
</style>
