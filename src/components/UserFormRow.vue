<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import type { Account } from '@/stores/accounts.ts'

const props = defineProps<{
  modelValue: Account
  index: number
}>()

const typeOptions = [
  { label: 'LDAP', value: 'ldap' },
  { label: 'Локальная', value: 'local' },
]

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'remove', index: number): void
}>()

function update<K extends keyof Account>(key: K, value: Account[K]) {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value,
  })
}
function updateTags<K extends keyof Account>(key: K, value: string) {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: Array.from(value.split('; ')),
  })
}
</script>

<template>
  <n-grid :x-gap="8" :y-gap="8">
    <n-form-item-gi :path="`${index}tags`" span="6">
      <n-input
        :value="modelValue.tags"
        type="textarea"
        maxlength="50"
        :autosize="{ minRows: 1, maxRows: 2 }"
        placeholder="Метки"
        @update:value="(val: string) => updateTags('tags', val)"
      />
    </n-form-item-gi>

    <n-form-item-gi path="type" span="5">
      <n-select
        :value="modelValue.type"
        :options="typeOptions"
        @update:value="(val: string) => update('type', val)"
      />
    </n-form-item-gi>

    <n-form-item-gi path="login" :span="modelValue.type === 'local' ? 6 : 12">
      <n-input
        :value="modelValue.login"
        placeholder="Логин"
        @update:value="(val: string) => update('login', val)"
      />
    </n-form-item-gi>

    <n-form-item-gi v-if="modelValue.type === 'local'" path="password" span="6">
      <n-input
        :value="modelValue.password"
        type="password"
        placeholder="Пароль"
        show-password-on="mousedown"
        @update:value="(val: string) => update('password', val)"
      />
    </n-form-item-gi>
    <n-gi span="1">
      <n-button ghost @click="$emit('remove', index)">
        <n-icon size="20">
          <svg-icon icon="TrashIcon" />
        </n-icon>
      </n-button>
    </n-gi>
  </n-grid>
</template>

<style scoped lang="sass"></style>
