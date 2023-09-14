<script setup lang="ts">
import inputTextControl from '@/components/atoms/InputTextControl.vue'
import CoreButton from '@/components/atoms/CoreButton.vue'
import { useAuthStore } from '@/stores/auth'
import TopBar from '@/components/molecules/TopBar.vue'
const authStore = useAuthStore()
import { ref } from 'vue'
import type { userDetailsType } from '@/types'
import router from '@/router'
const loginDetails= ref<userDetailsType>({
  email: '',
  password: ''
})
const validationError = ref('')
const onLogin = async () => {
  validationError.value = ''
  const res = await authStore.login(loginDetails.value)
  if (res) {
    router.push({ name: 'userDashboard', params: { id: res }})
  } else {
    validationError.value = 'Your Email or password is incorrect'
  }
}
</script>

<template>
  <div class="wrapper">
    <TopBar />
    <div class="wrap">
      <div class="inner-wrap">
      <div class="welcome-text">
        <h1>Welcome to Smartlead.ai</h1>
        <p>Log in to your account</p>
      </div>
      <div class="login-block">
          <div>
            <p>
              <label>Email</label>
            </p>
            <inputTextControl type="email" v-model="loginDetails['email']" />
          </div>
          <div>
            <p>
              <label>Password</label>
              <label class="forget-password">Forgot Password?</label>
            </p>
            <inputTextControl type="password" v-model="loginDetails['password']" />
          </div>
          <CoreButton text="Sign in" :is-disabled="loginDetails.email && loginDetails.password ? false : true" @onClick="onLogin"/>
          <p v-if="validationError" class="error">{{  validationError }}*</p>
      </div>
      </div>
    </div>
</div>
</template>
<style lang="sass">
.wrapper
  display: flex
  flex: 1
  flex-direction: column
  .logo-section 
    background-color: #00056A
    height: 80px
.wrap
  background-color: #F7F8FE
  width: 100%
  height: 100%
  min-height: 100vh
  .inner-wrap
    display: flex
    flex-direction: column
    background: #fff
    border-radius: 3px
    box-shadow: 0px 2px 4px 0px rgb(141 143 169 / 25%)
    padding: 62px 56px 67px
    margin: 60px auto
    max-width: 545px
    width: 100%
    justify-content: center
    .welcome-text
      text-align: center
      h1
        color: #000115
        font-size: 24px
        font-weight: 500
        line-height: 31.25pxpx
        letter-spacing: 0.2px
      p
        color: #000115
        line-height: 18.23px
        margin: 4px 0 0
    .login-block
      display: flex
      flex-direction: column
      gap: 15px
      margin: 24px 0 0   
      p
        display: flex
        justify-content: space-between
        label
          color: #7A7D9C
          font-size: 14px
          line-height: 24px
        label.forget-password
          color: #757AE9
      p.error
        font-size: 14px
        display: flex
        color: #e71010
</style>
