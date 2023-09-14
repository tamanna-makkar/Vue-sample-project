<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import logoMark from '@/components/icons/logo/logoMark.vue';
import IconStar from '../icons/IconStar.vue';
import IconQuestion from '../icons/IconQuestion.vue';
import IconGifts from '../icons/IconGifts.vue';
import IconProfileImg from '../icons/IconProfileImg.vue';
import { useAuthStore } from '@/stores/auth'
const { logout } = useAuthStore()
const { loggedInUser } = storeToRefs(useAuthStore())
const showDetails = ref(false)
const openUserDetails = () => {
  showDetails.value = !showDetails.value
}
const logoutUser = async () => {
  await logout()
}
</script>
<template>
   <div class="logo-section">
       <div class="container">
            <div class="logo-inner-section"><logoMark /></div>
            <div class="right-section" v-if="loggedInUser.email">
                <div class="trails-block">
                  <IconStar/>
                   <p>Trail expires in 12 days</p>
                </div>
                <div class="queries-block">
                  <IconQuestion/>
                </div>
                <div class="more-info">
                  <IconGifts/>
                </div>
                <div class="account-bloc" @click="openUserDetails">
                  <IconProfileImg/>
                  <div v-if="showDetails">
                    <p>{{ loggedInUser.email }}</p>
                    <p @click="logoutUser">Logout</p>
                  </div>
                </div>
            </div>
       </div>
    </div>
</template>
<style lang="sass" scoped>
.logo-section
  .container
    display: flex
    justify-content: space-between
    padding: 18px
    height: 100%
    align-items: center
    margin: auto
    width: 100%
    .logo-inner-section
        display: flex
.right-section
  display: flex
  gap: 20px
  align-items: center
  .trails-block
    display: flex
    color: #fff
    font-size: 12px
    background-color: rgba(255, 255, 255, 0.2)
    align-items: center
    border-radius: 46px
    gap: 10px
    padding: 7px 12px 7px 12px
  .account-bloc
    cursor: pointer
    position: relative
    div
      position: absolute
      background: #fff
      right: 0
      top: 100%
      padding: 15px
      border-radius: 3px
      font-size: 14px
      display: flex
      flex-direction: column
      gap: 6px
      width: 200px
      z-index: 1
      box-shadow: 0px 2px 10px 0px rgb(20 20 20 / 5%)
</style>