<template>
  <div>
    <div class="box-wrapper">
      <BorderBox11 title="门禁监测">
        <div class="box-content"></div>
      </BorderBox11>
    </div>

    <div class="box-wrapper">
      <BorderBox11 title="消防监测">
        <div class="box-content"></div>
      </BorderBox11>
    </div>

    <div class="box-wrapper warning-wrapper">
      <BorderBox11 title="告警详情">
        <div class="warning-content">
          <WarningTable />
        </div>
      </BorderBox11>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BorderBox11 } from '@kjgl77/datav-vue3';
import WarningTable from './warningTable.vue';
</script>

<style lang="scss" scoped>
.box-wrapper {
  padding: 0 20px;
  height: 200px;

  .box-content {
  }
}

.warning-wrapper {
  padding: 0 20px;
  height: 400px;

  .warning-content {
    padding: 75px 20px 20px;
  }
}
</style>
