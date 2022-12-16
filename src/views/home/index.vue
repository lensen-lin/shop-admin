<template>
  <div><h1>首页</h1></div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store'
import { onMounted, ref } from 'vue'
import { login } from '@/api/login'
import { IBaseResponse } from '@/api/types/common'
const store = useCounterStore()
console.log(store)
/* eslint-disable-next-line */
const list = ref<IBaseResponse['code']>(0)
// console.log(list)
onMounted(() => {
  login({
    username: 'admin',
    password: 'admin123',
    uuid: '123',
    code: '1324'
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>
// @import "@/styles/variables.scss";
h1 {
  color: $color;
}
</style>
