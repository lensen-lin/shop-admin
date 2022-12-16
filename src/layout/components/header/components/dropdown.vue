<template>
  <el-dropdown trigger="click">
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      class="avatar"
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item class="person-content">
          个人中心
        </el-dropdown-item>
        <el-divider border-style="dashed" />
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

</script>

<style scoped>
.el-divider--horizontal {
  margin: 0;
}
</style>
