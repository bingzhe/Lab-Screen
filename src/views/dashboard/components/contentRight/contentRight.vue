<template>
  <div class="container">
    <div class="h455px w100%">
      <div class="chartline-title-wrapper">
        <Decoration7><div class="title-text">气瓶间实时压力Bar</div></Decoration7>
      </div>
      <div class="chartline-wrapper">
        <BorderBox13>
          <ChartLine class="chartline h400px"></ChartLine>
        </BorderBox13>
      </div>
    </div>

    <div class="h400px w100%">
      <div class="chartline-title-wrapper">
        <Decoration7><div class="title-text">气体总阀门</div></Decoration7>
      </div>
      <div class="scroll-table-wrapper">
        <BorderBox13>
          <!-- <ChartLine class="chartline h300px"></ChartLine> -->
          <!-- <ScrollTable class="scroll-table" /> -->
          <SwichList />
        </BorderBox13>
      </div>
    </div>

    <!-- <div class="flex justify-end w100% pr40px pt20px">
      <Decoration9 style="width: 130px; height: 130px">
        <div style="color: #a5ccf2; font-size: 28px">20℃</div>
      </Decoration9>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { Decoration7, BorderBox13, Decoration9 } from '@kjgl77/datav-vue3';
import ChartLine from './ChartLine';
// import ScrollTable from './ScrollTable.vue';
import SwichList from './SwichList.vue';
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
    height: 380px;
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
