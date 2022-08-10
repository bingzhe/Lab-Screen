<template>
  <div demo-bg>
    <ScrollBoard
      :config="config"
      style="width: 100%; height: 180px"
      @mouseover="mouseoverHandler"
      @click="clickHandler"
    />
  </div>
</template>
<script lang="ts" setup>
import { ScrollBoard } from '@kjgl77/datav-vue3';

const config = reactive({
  header: ['告警时间', '告警详情'],
  data: [
    ['2011-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
    ['2022-8-17 00:17:56', '告警详情'],
  ],
  index: true,
  columnWidth: [50],
  align: ['center'],
  rowNum: 3,
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
