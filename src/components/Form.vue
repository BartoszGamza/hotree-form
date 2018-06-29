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
    post: {
      title: '',
      description: '',
      category_id: '',
      paid_event: '',
      event_fee: '',
      reward: '',
      date: '',
      duration: '',
      coordinator: {
        email: '',
        id: ''
      }
    }
  }),
  components: {
    About,
    Coordinator,
    When
  },
  created() {
    this.$store.dispatch('getUser')
    this.$store.dispatch('getCategories')
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
  padding 20px 40px 20px 40px


.card-form
  margin-left  auto
  margin-right auto

.card-heading
  font-size 25px
  color #436598

ul
  list-style none
  padding 0px

li 
  padding 15px 0 15px 0

#desc
  vertical-align top

#title, #desc, #email, #resp, #cat
  display inline
  width 450px

#title, #desc, #email, #resp, #cat, #reward, #time, #dur, #fee, #date
  display inline-block
  border 2px solid #d8d8da
  border-radius 2px
  background-color white
  background-image none
  height 25px
  &:focus
    border 2px solid #436598

#reward, #fee, #dur, #time
  width 60px

::placeholder
  color #d8d8da

#desc 
  height 150px

label
  display inline-block
  vertical-align middle
  width 120px
  height 25px

span
  vertical-align middle
  margin 0 5px 0 5px

hr
  opacity 80%
</style>
