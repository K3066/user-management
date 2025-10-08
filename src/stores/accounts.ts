import { defineStore } from 'pinia'

export interface Account {
  id: number
  tags: string
  type: 'local' | 'ldap'
  login: string
  password: string
}

export const useAccountsStore = defineStore('accounts', () => ({
  state: () => ({
    accounts: [] as Account[],
  }),
  actions: {
    addAccount() {
      this.accounts.unshift({
        id: Date.now(),
        tags: '',
        type: 'local',
        login: '',
        password: '',
      })
    },
    removeAccount(index: number) {
      this.accounts.splice(index, 1)
    },
  },
  persist: {
    paths: ['accounts'], // сохраняем только массив
  },
}))
