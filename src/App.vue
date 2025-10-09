<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts'
import UserForm from '@/components/UserForm.vue'
import SvgHolder from '@/components/SvgHolder.vue'

const store = useAccountsStore()
</script>

<template>
  <svg-holder style="display: none" />
  <n-flex class="folder-wrapper" vertical align="center" style="height: 100%">
    <n-card class="management-card">
      <template #header>
        <div class="management-card__header">
          <div class="management-card__header-title">
            <h2>Учетные записи</h2>
          </div>
          <n-button size="medium" @click="store.addAccount">
            <n-icon size="20">
              <svg-icon icon="PlusIcon" />
            </n-icon>
          </n-button>
        </div>
      </template>
      <template #default>
        <div class="management-card__container">
          <n-grid :x-gap="8">
            <n-gi class="title-margin" span="6">Метки</n-gi>
            <n-gi class="title-margin" span="5">Тип записи</n-gi>
            <n-gi class="title-margin" span="6">Логин</n-gi>
            <n-gi class="title-margin" span="6">Пароль</n-gi>
            <n-gi class="title-margin" />
          </n-grid>
          <div class="management-card__accounts">
            <user-form />
          </div>
        </div>
      </template>
    </n-card>
  </n-flex>
</template>

<style scoped lang="sass">
*
  box-sizing: border-box
  user-select: none
.folder-wrapper
  padding: 40px
.title-margin
  margin-left: 12px
.management-card
  display: flex
  flex-direction: column
  width: 1400px
  overflow: hidden
  &__header
    height: fit-content
    flex-grow: 0
    display : flex
    flex-direction : row
    align-items: center
    gap: 1rem
    &-title
      margin-bottom: 2px
  &__accounts
    flex-grow: 1
    height: 500px
    overflow: auto
</style>
