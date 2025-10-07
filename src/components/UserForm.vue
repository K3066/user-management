<script setup lang="ts">
import { ref } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'
import SvgIcon from "@/components/SvgIcon.vue";

const formRef = ref<FormInst | null>(null)

const formValue = ref({
  tags: '',
  type: 'local' as 'local' | 'ldap',
  login: '',
  password: ''
})

const typeOptions = [
  { label: 'LDAP', value: 'ldap' },
  { label: 'Локальная', value: 'local' }
]

const FormRules = ref({
  type: {
    required: true,
    trigger: 'blur',
    message: "Тип обязателен"
  },
  login: {
    required: true,
    trigger: 'blur',
    message: "Логин обязателен"
  },
  password: {
    required: () => formValue.value.type === 'local',
    trigger: 'blur',
    message: "Пароль обязателен"
  },
})
</script>


<template>
  <n-space>
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="FormRules"
      :show-label="false"
    >
      <n-grid  :x-gap="8" :y-gap="8">
        <n-form-item-gi path="tags" span="6">
          <n-input v-model:value="formValue.tags" type="textarea" maxlength="50" :autosize="{minRows: 1, maxRows: 2}" placeholder="Метки" />
        </n-form-item-gi>

        <n-form-item-gi path="type" span="5">
          <n-select
            v-model:value="formValue.type"
            :options="typeOptions"
          />
        </n-form-item-gi>

        <n-form-item-gi
          path="login"
          :span="formValue.type === 'local' ? 6 : 12"
        >
          <n-input v-model:value="formValue.login" placeholder="Логин" />
        </n-form-item-gi>

        <n-form-item-gi
          v-if="formValue.type === 'local'"
          path="password"
          span="6"
        >
          <n-input
            v-model:value="formValue.password"
            type="password"
            placeholder="Пароль"
            show-password-on="mousedown"
          />
        </n-form-item-gi>
        <n-gi span="1">
          <n-button quaternary>
            <n-icon size="20">
              <svg-icon icon="TrashIcon" />
            </n-icon>
          </n-button>
        </n-gi>
      </n-grid>
    </n-form>
  </n-space>
</template>

<style scoped lang="sass">
</style>
