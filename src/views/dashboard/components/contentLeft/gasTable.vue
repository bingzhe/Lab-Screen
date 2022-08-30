<template>
  <el-table class="custome-table" :data="tableData" size="small">
    <el-table-column :label="title" align="center">
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
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
const prop = defineProps({
  title: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['more-click']);

const tableData = [
  { type: 'PCO2', q1: '1', q2: '13', q3: '2' },
  { type: 'N2', q1: '3', q2: '2', q3: '1' },
  { type: 'Ar', q1: '4', q2: '2', q3: '15' },
  { type: 'NH3', q1: '5', q2: '3', q3: '3' },
  { type: 'Ar MIX', q1: '2', q2: '4', q3: '4' },
  { type: 'PAr', q1: '12', q2: '5', q3: '5' },
];

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
// ::v-deep(.header) {
//   background-color: #254c87 !important;
// }

// .more-btn {
//   margin: 8px 0;
//   text-align: right;
//   font-size: 14px;
//   color: #a5ccf2;
//   cursor: pointer;
// }

// ::v-deep(span.index) {
//   background-color: #254c87 !important;
// }

// .custome-table {
//   background: transparent !important;
// }
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
</style>

<style lang="scss">
.custome-table.el-table--small .el-table__cell {
  padding: 0;
}
.custome-table.el-table--small .cell {
  padding: 0;
  line-height: 28px;
}
</style>
