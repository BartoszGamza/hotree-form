<template>
  <div class="container">
    <About></About>
    <Coordinator></Coordinator>
    <When></When>
  </div>
</template>

<script>
import About from './FormCards/About'
import Coordinator from './FormCards/Coordinator'
import When from './FormCards/When'
export default {
  data: () => ({

  }),
  components: {
    About,
    Coordinator,
    When
  }
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

#desc
  vertical-align top

#title, #desc, #email, #resp, #cat
  display inline
  width 500px

#title, #desc, #email, #resp, #cat, #reward, #time, #dur, #fee, #date
  border 1px solid #d8d8da
  border-radius 2px
  background-color white
  background-image none
  height 25px
  &:focus 
    border 1px solid black -5%

#reward, #fee, #dur, #time
  width 60px

::placeholder
  color #d8d8da

#desc 
  height 150px

label
  display inline-block
  vertical-align middle
  width 20%

span
  vertical-align middle
  margin 0 5px 0 5px

hr
  color #d8d8da
  width 95%
</style>
