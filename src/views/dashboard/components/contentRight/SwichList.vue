<template>
  <div class="flex w100% h100% items-center pt40px pb40px box-border flex-wrap">
    <div v-for="(item, index) in list" :key="index" class="flex flex-col items-center justify-center w33.3%">
      <img class="w35px h35px" src="../../../../assets/images/door2.png" />
      <span class="switch-name">{{ item.name }}</span>
      <el-switch :value="true"></el-switch>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    name: '3445 PCO2',
  },
  {
    name: '3440/3445 N2',
  },
  {
    name: '3440/3445 Ar',
  },
  {
    name: '3110/3113 N2',
  },
  {
    name: '3440 NH3',
  },
  {
    name: '3110/3118/3113 Ar',
  },
  {
    name: '3113 Ar MIX',
  },
  {
    name: '3113 PAr',
  },
  {
    name: '3113 Ar',
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
