<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = zhCn;
</script>

<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-color: #11151b;
  overflow: hidden;
}
</style>
