<template>
  <div class="container">
    <Alert v-if="submit"></Alert>
    <div v-else>
      <About></About>
      <Coordinator :name="currentUser" :current="currentUser"></Coordinator>
      <When></When>
      <div class="submit">
        <button class="publish">PUBLISH EVENT</button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Alert'
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
    },
    submit: false
  }),
  components: {
    About,
    Coordinator,
    When,
    Alert
  },
  created() {
    this.$store.dispatch('getUser')
    this.$store.dispatch('getCategories')
  },
  computed: {
    currentUser () {
      return this.$store.getters.currentUser.name + ' ' + this.$store.getters.currentUser.lastname
    }
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
  padding 20px 40px 5px 40px

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

.line
  padding 15px 0 15px 0
  vertical-align middle

#title, #desc, #email
  display inline
  width 440px

#title, #desc, #email, #resp, #cat, #reward, #time, #dur, #fee, #date
  font-size 15px
  color #7c7c7c
  padding 0px 7px 0 7px
  display inline-block
  border 1px solid #d8d8da
  border-radius 2px
  background-color white
  background-image none
  -webkit-appearance none
  -moz-appearance none 
  height 30px
  &:focus
    border 1px solid #8ca2c2
    outline none
  &.invalid
    border 1px solid #ffb2b2

#resp, #cat
  width 448px
  height 34px

#reward, #fee, #dur
  width 70px
  text-align center

::placeholder, ::-webkit-input-placeholder
  color #d8d8da

#desc 
  height 120px
  width 436px
  vertical-align top
  resize none
  padding 5px 

label
  display inline-block
  vertical-align middle
  width 120px
  color #8ca2c2
  &.invalid
    color #ffb2b2

span
  vertical-align middle
  margin 0 5px 0 5px
  color #7c7c7c

hr
  opacity 80%

.submit
  text-align center

.publish
  box-sizing border-box
  text-align center
  background-color #ff8e1d
  width 164px
  height 50px
  color white
  font-size 13px
  border none

.required:after
  content ' *'
  font-size 15px
  color #ffb2b2

[type="radio"]
  -moz-appearance none
  -webkit-appearance none
  outline none
  display inline-block
  vertical-align middle
  width 20px
  height 20px
  border 1px solid #8ca2c2
  border-radius 10px
  text-align center
  position relative
  
[type ="radio"]:checked:after
  content ''
  width 10px
  height 10px
  border-radius 5px
  background-color #8ca2c2
  display inline-block
  outline none
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)

</style>
