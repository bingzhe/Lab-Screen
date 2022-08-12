<template>
  <div class="flex w100% h100% items-center pt40px pb40px box-border flex-wrap">
    <div v-for="(item, index) in list" :key="index" class="flex flex-col items-center justify-center w25%">
      <img class="w30px h30px" src="../../../../assets/images/door2.png" />
      <span class="switch-name">{{ item.name }}</span>
      <el-switch :value="true"></el-switch>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    name: '101房间氯气',
  },
  {
    name: '102房间氯气',
  },
  {
    name: '103房间氯气',
  },
  {
    name: '104房间氯气',
  },
  {
    name: '111房间氯气',
  },
  {
    name: '112房间氯气',
  },
  {
    name: '113房间氯气',
  },
  {
    name: '113房间氯气',
  },
]);

// const mouseoverHandler = (e: any) => {
//   console.log(e);
// };

// const clickHandler = (e: any) => {
//   console.log(e);
// };
</script>

<style lang="scss" scoped>
::v-deep(.header) {
  background-color: #254c87 !important;
}

.switch-name {
  color: #a5ccf2;
}

// ::v-deep(span.index) {
//   background-color: #254c87 !important;
// }
</style>
