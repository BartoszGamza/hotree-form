<template>
  <div id="app">
    <div class="top"></div>
      <div class="header">
        <div class="header-wrapper">
          <h1>New event</h1>
        </div>
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
  data: () => ({
  }),
  components: {
    Form
  }
}
</script>

<style lang="stylus">
body
  font-family: 'Avenir'
  font-size 15px
  min-width 800px
  background-color #f7f7f7
  margin 0
  color #d8d8da
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
  position fixed
  padding-top 15px
  height 72px
  top 0
  left 0
  right 0
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
.grid, .header-wrapper
  position relative
  max-width 800px
  margin 0 auto
h1
  font-weight 100
  padding-left 40px
</style>

