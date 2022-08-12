<template>
  <div demo-bg>
    <ScrollBoard
      :config="config"
      style="width: 100%; height: 180px"
      @mouseover="mouseoverHandler"
      @click="clickHandler"
    />
    <div class="more-btn" @click="handleMoreClick">更多</div>
  </div>
</template>
<script lang="ts" setup>
import { ScrollBoard } from '@kjgl77/datav-vue3';

const emits = defineEmits(['more-click']);

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

const handleMoreClick = () => {
  emits('more-click');
};
</script>

<style lang="scss" scoped>
::v-deep(.header) {
  background-color: #254c87 !important;
}

.more-btn {
  margin: 8px 0;
  text-align: right;
  font-size: 14px;
  color: #a5ccf2;
  cursor: pointer;
}

// ::v-deep(span.index) {
//   background-color: #254c87 !important;
// }
</style>
