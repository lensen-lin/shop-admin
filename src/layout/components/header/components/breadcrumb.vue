<template>
  <el-breadcrumb>
    <el-breadcrumb-item
      :to="{ path: item.path }"
      v-for="item in routes"
      :key="item.name"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()

const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>

<style lang="scss" scoped>

</style>
