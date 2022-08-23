<template>
  <el-dialog
    v-model="dialogTableVisible"
    title="实验室氧含量信息"
    custom-class="cutom-table-dilog"
    :show-close="false"
    :modal="false"
  >
    <BorderBox10>
      <el-table class="custome-table" :data="tableData" size="small">
        <el-table-column prop="type" label="气体种类" align="center" />
        <el-table-column prop="q1" label="用气点1" align="center">
          <template #default="scope">
            <div :style="{ background: scope.row.q1 > 10 ? 'red' : '' }">{{ scope.row.q1 }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="q2" label="用气点2" align="center">
          <template #default="scope">
            <div :style="{ background: scope.row.q2 > 10 ? 'red' : '' }">{{ scope.row.q2 }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="q3" label="用气点3" align="center">
          <template #default="scope">
            <div :style="{ background: scope.row.q3 > 10 ? 'red' : '' }">{{ scope.row.q3 }}</div>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="NH3" label="用气点4" align="center" /> -->
      </el-table>
    </BorderBox10>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BorderBox10 } from '@kjgl77/datav-vue3';

const dialogTableVisible = ref(false);

const tableData = [
  { type: 'N2', q1: '1', q2: '13', q3: '2' },
  { type: 'AR', q1: '3', q2: '2', q3: '1' },
  { type: 'CO2', q1: '4', q2: '2', q3: '15' },
  { type: 'H2', q1: '5', q2: '3', q3: '3' },
  { type: 'NH3', q1: '2', q2: '4', q3: '4' },
  { type: 'C12', q1: '12', q2: '5', q3: '5' },
];

function open() {
  dialogTableVisible.value = true;
}

defineExpose({
  open,
});
</script>

<style lang="scss" scoped>
.custome-table.el-table {
  --el-table-border: 1px solid #409eff;
  --el-table-header-bg-color: transparent;
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  --el-fill-color-light: transparent;
  --el-table-text-color: #a5ccf2;
  --el-table-border-color: #409eff;
  --el-table-header-text-color: #a5ccf2;
}
.cutom-table-dilog {
  --el-dialog-bg-color: #111d6c;
}
</style>

<style lang="scss">
.cutom-table-dilog {
  --el-dialog-bg-color: #111d6c;

  .el-dialog__title {
    color: #a5ccf2;
  }
}
// .cutom-table-dilog .el-dialog__body {
//   padding: 0;
// }
</style>
