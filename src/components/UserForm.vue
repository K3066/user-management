<script setup lang="ts">
import { ref } from 'vue'
import { useAccountsStore } from '@/stores/accounts'
import type { FormInst, FormRules } from 'naive-ui'
import UserFormRow from '../components/UserFormRow.vue'

const formRef = ref<FormInst | null>(null)
const store = useAccountsStore()

const rules: FormRules = {
  tags: [{ required: true, trigger: 'blur' }],
  type: [{ required: true, trigger: 'change' }],
  login: [{ required: true, trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur' }],
}
</script>

<template>
  <div class="user-form">
    <n-form
      ref="formRef"
      :model="store.accounts"
      :rules="rules"
      :show-label="false"
      :show-feedback="false"
      class="user-form__form"
    >
      <div class="user-form__scroll">
        <user-form-row
          v-for="(item, index) in store.accounts"
          :key="item.id"
          v-model="store.accounts[index]"
          :index="index"
          @remove="store.removeAccount"
        />
      </div>
    </n-form>
  </div>
</template>

<style lang="sass" scoped>
.user-form
  display: flex
  flex-direction: column
  flex: 1
  min-height: 0

  &__form
    display: flex
    flex-direction: column
    flex: 1
    min-height: 0

  &__scroll
    flex: 1
    min-height: 0
    overflow-y: auto
    display: flex
    flex-direction: column
    gap: 12px
</style>
