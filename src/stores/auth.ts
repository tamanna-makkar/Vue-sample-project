import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { userDetailsType, loggedInUserType } from '@/types'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  // state
  const allUsers = ref([
    {
      id: 1,
      email: 'abc@gmail.com',
      password: 'test123',
      details: [
        {
          id: '01',
          name: 'SW Zero Personalisation 1',
          sent: 520,
          clicked: 39,
          opened: 202,
          replied: 4,
          positive_reply: 0
        },
        {
          id: '02',
          name: 'SW Zero Personalisation 1',
          sent: 520,
          clicked: 39,
          opened: 202,
          replied: 4,
          positive_reply: 0
        },
        {
          id: '03',
          name: 'SW Zero Personalisation 1',
          sent: 520,
          clicked: 39,
          opened: 202,
          replied: 4,
          positive_reply: 0
        }
      ]
    },
    {
      id: 2,
      email: 'abc2@gmail.com',
      password: 'test123',
      details: [
        {
          name: 'SW Zero Personalisation 1',
          sent: 520,
          clicked: 39,
          opened: 202,
          replied: 4,
          positive_reply: 0
        },
        {
          name: 'SW Zero Personalisation 1',
          sent: 520,
          clicked: 39,
          opened: 202,
          replied: 4,
          positive_reply: 0
        }
      ]
    }
  ])
  const loggedInUser = ref<loggedInUserType>({} as loggedInUserType)
  const login = async (payload: userDetailsType) => {
    const isUserExist = allUsers.value.find((item) => item.email == payload.email)
    if (isUserExist && isUserExist.password == payload.password) {
      return isUserExist.id
    }
  }

  const getUser = async (payload: number) => {
    const currentUser = allUsers.value.find((item) => (item.id = payload))
    if (currentUser) {
      loggedInUser.value.id = currentUser?.id
      loggedInUser.value.email = currentUser?.email
      loggedInUser.value.details = currentUser?.details
    }
  }

  const logout = () => {
    loggedInUser.value = {
      email: '',
      details: []
    }
    router.push({ name: 'account' })
  }

  return { login, getUser, loggedInUser, logout }
})
