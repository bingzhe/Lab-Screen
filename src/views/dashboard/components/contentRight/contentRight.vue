<template>
  <div class="container">
    <div class="h360px w100%">
      <div class="chartline-title-wrapper">
        <Decoration7><div class="title-text">气体压力监控</div></Decoration7>
      </div>
      <div class="chartline-wrapper">
        <BorderBox13>
          <ChartLine class="chartline h300px"></ChartLine>
        </BorderBox13>
      </div>
    </div>

    <div class="h580px w100%">
      <div class="chartline-title-wrapper">
        <Decoration7><div class="title-text">实验室信息展示</div></Decoration7>
      </div>
      <div class="scroll-table-wrapper">
        <BorderBox13>
          <!-- <ChartLine class="chartline h300px"></ChartLine> -->
          <ScrollTable class="scroll-table" />
        </BorderBox13>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Decoration7, BorderBox13 } from '@kjgl77/datav-vue3';
import ChartLine from './ChartLine';
import ScrollTable from './ScrollTable.vue';
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  margin: 0 20px;

  .chartline-title-wrapper {
    height: 60px;
    color: #a5ccf2;
    font-size: 20px;

    .title-text {
      padding: 0 30px;
    }
  }
  .chartline-wrapper {
    height: 300px;
    width: 100%;
  }

  .chartline {
    padding: 20px;
  }
  .scroll-table-wrapper {
    height: 340px;
    width: 100%;
  }

  .scroll-table {
    padding: 20px;
  }
}
</style>
