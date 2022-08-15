<template>
  <el-table :data="tableData" size="small">
    <el-table-column label="实验室一">
      <el-table-column prop="N2" label="气体种类" />
      <el-table-column prop="AR" label="用气点1" />
      <el-table-column prop="CO2" label="用气点2" />
      <el-table-column prop="H2" label="用气点3" />
      <el-table-column prop="NH3" label="用气点4" />
      <el-table-column prop="C12" label="C12" />
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
const emits = defineEmits(['more-click']);

const tableData = [
  { N2: 'N2', AR: '20', CO2: '59', H2: '1', NH3: '2', C12: '3' },
  { N2: 'AR', AR: '20', CO2: '30', H2: '44', NH3: '1', C12: '2' },
  { N2: 'CO2', AR: '20', CO2: '30', H2: '44', NH3: '1', C12: '2' },
  { N2: 'H2', AR: '20', CO2: '30', H2: '44', NH3: '1', C12: '2' },
  { N2: 'NH3', AR: '20', CO2: '30', H2: '44', NH3: '1', C12: '2' },
  { N2: 'C12', AR: '20', CO2: '30', H2: '44', NH3: '1', C12: '2' },
];

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
</style>
