<template>
  <el-container>
    <el-aside>
      <Menu :is-collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <Header @changeCollapse="isCollapse = $event" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from './components/menu/index.vue'
import Header from './components/header/index.vue'
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<style scoped>
.el-container {
  height: 100vh;
  background-color: #ffffff;
}
.el-aside {
  background-color: #304156;
  height: 100vh;
  width: auto;
}
.el-header {
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 8px 0 rgba(0, 0, 0, 0.09);
}
.el-main {
  background-color: #ffffff;
  margin-top: 8px;
}
</style>
