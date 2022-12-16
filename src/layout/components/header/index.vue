<template>
  <div class="app-header">
    <div class="breadcrumb-wrap">
      <el-icon
        size="24"
        @click="handleUnfold"
        class="el-icon"
      >
        <IEpFold v-if="!isCollapse" />
        <IEpExpand v-else />
      </el-icon>
      <breadcrumb />
    </div>
    <div>
      <dropdown />
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumb from './components/breadcrumb.vue'
import dropdown from './components/dropdown.vue'
import { ref } from 'vue'
const emit = defineEmits(['changeCollapse'])
const isCollapse = ref(false)
const handleUnfold = () => {
  isCollapse.value = !isCollapse.value
  emit('changeCollapse', isCollapse.value)
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .el-breadcrumb {
    margin-left: 10px;
  }
  .breadcrumb-wrap {
    display: flex;
    align-items: center;
  }
  .avatar:hover,
  .el-icon:hover {
    cursor: pointer;
  }
}
</style>
