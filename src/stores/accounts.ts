import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PersistenceOptions } from 'pinia-plugin-persistedstate'

export interface Account {
  id: number
  tags: string
  type: 'local' | 'ldap'
  login: string
  password: string
}

export const useAccountsStore = defineStore(
  'accounts',
  () => {
    const accounts = ref([] as Account[])
    const addAccount = () => {
      accounts.value.unshift({
        id: Date.now(),
        tags: '',
        type: 'local',
        login: '',
        password: ''
      })
    }
    const removeAccount = (index: number) => {
      accounts.value.splice(index, 1)
    }
    return { accounts, addAccount, removeAccount }
  },
  {
    persist: {
      storage: localStorage, // можно использовать sessionStorage
      paths: ['accounts'] // какие поля сохранять
    } as PersistenceOptions
  }
)
