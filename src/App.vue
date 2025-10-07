<script setup lang="ts">
import UserForm from "@/components/UserForm.vue";
</script>

<template>
  <svg-holder/>
  <n-flex
    vertical
    align="center"
    style="height: 100%"
  >
    <n-card style="width: 1400px">
      <template #header>
        <div class="card--header">
          <h1>
            Учетные записи
          </h1>
          <n-button size="large">
            <n-icon size="20">
              <svg-icon icon="PlusIcon" />
            </n-icon>
          </n-button>
        </div>
      </template>
      <template #default>
        <n-grid>
          <n-gi span="6">Метки</n-gi>
          <n-gi span="5">Тип записи</n-gi>
          <n-gi span="6">Логин</n-gi>
          <n-gi span="6">Пароль</n-gi>
          <n-gi/>
        </n-grid>
        <user-form/>
      </template>
    </n-card>
  </n-flex>
</template>


<style scoped lang="sass" >
*
  user-select: none
.card
  &--header
    height: fit-content
    display : flex
    flex-direction : row
    align-items: center
    gap: 1rem
</style>
