<template>
  <div demo-bg>
    <ScrollBoard
      :config="config"
      style="width: 100%; height: 300px"
      @mouseover="mouseoverHandler"
      @click="clickHandler"
    />
  </div>
</template>
<script lang="ts" setup>
import { ScrollBoard } from '@kjgl77/datav-vue3';

const config = reactive({
  header: ['实验室', '压力1', '压力2', '压力3'],
  data: [
    ['实验室01', '200', '100', '300'],
    ['实验室02', '200', '100', '300'],
    ['实验室03', '200', '100', '300'],
    ['实验室04', '200', '100', '300'],
    ['实验室05', '200', '100', '300'],
    ['实验室06', '200', '100', '300'],
    ['实验室07', '200', '100', '300'],
    ['实验室08', '200', '100', '300'],
    ['实验室09', '200', '100', '300'],
    ['实验室10', '200', '100', '300'],
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
});

const mouseoverHandler = (e: any) => {
  console.log(e);
};

const clickHandler = (e: any) => {
  console.log(e);
};
</script>

<style lang="scss" scoped>
::v-deep(.header) {
  background-color: #254c87 !important;
}

// ::v-deep(span.index) {
//   background-color: #254c87 !important;
// }
</style>
