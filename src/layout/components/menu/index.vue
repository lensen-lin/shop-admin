<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="props.isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><IEpHomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/busi">
      <template #title>
        <el-icon><IEpGrid /></el-icon>
        <span>业务管理</span>
      </template>
      <el-menu-item index="/busi/recommendposition">
        <template #title>
          <el-icon><IEpNotification /></el-icon>
          <span>推荐位管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/busi/productMsg">
        <template #title>
          <el-icon><IEpChatDotRound /></el-icon>
          <span>产品消息</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/busi/template">
        <template #title>
          <el-icon><IEpPostcard /></el-icon>
          <span>消息模板</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><IEpMenu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><IEpSetting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
