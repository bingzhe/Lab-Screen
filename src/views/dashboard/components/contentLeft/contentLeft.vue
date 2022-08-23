<template>
  <div>
    <div class="h250px pl20px pr20px">
      <BorderBox11 title="氧含量信息">
        <el-carousel trigger="click" height="250px" :interval="5000">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="box-content flex justify-between items-center p40px pt80px w100% h100%">
              <WaterLevelPond
                v-if="showWaterLevelPond"
                :config="{ data: [10], shape: 'roundRect', colors: ['red', 'red'] }"
                class="w80px h120px"
              />
              <WaterLevelPond
                v-if="showWaterLevelPond"
                :config="{ data: [44], shape: 'roundRect' }"
                class="w80px h120px"
              />
              <WaterLevelPond
                v-if="showWaterLevelPond"
                :config="{ data: [17], shape: 'roundRect', colors: ['yellow', 'yellow'] }"
                class="w80px h120px"
              />
              <WaterLevelPond
                v-if="showWaterLevelPond"
                :config="{ data: [22], shape: 'roundRect' }"
                class="w80px h120px"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="o2 more-btn" @click="handleMoreClick">更多</div>
      </BorderBox11>
    </div>

    <div class="h350px pl20px pr20px">
      <BorderBox11 title="用气点实时压力">
        <el-carousel trigger="click" height="340px" :interval="5000">
          <el-carousel-item>
            <div class="p40px pt60px pb60px">
              <gasTable title="实验室一" />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="p40px pt60px pb60px">
              <gasTable title="实验室二" />
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="p40px pt60px pb60px">
              <gasTable title="实验室三" />
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="o2 more-btn" @click="handleMoreClick">更多</div>
      </BorderBox11>
    </div>

    <div class="box-wrapper warning-wrapper">
      <BorderBox11 title="告警详情">
        <div class="warning-content">
          <WarningTable @more-click="handleMoreClick" />
        </div>
      </BorderBox11>
    </div>

    <tableModal ref="tableModalRef" title="实验室氧含量信息" />
  </div>
</template>

<script setup lang="ts">
import { BorderBox11, WaterLevelPond } from '@kjgl77/datav-vue3';
import { ref, onMounted } from 'vue';
import WarningTable from './warningTable.vue';
import gasTable from './gasTable.vue';
import tableModal from './tableModal.vue';

const tableModalRef = ref(null);

const showWaterLevelPond = ref(false);

const handleMoreClick = () => {
  console.log('more click');
  (tableModalRef.value as any).open();
};

onMounted(() => {
  setTimeout(() => {
    showWaterLevelPond.value = true;
  }, 500);
  // showWaterLevelPond.value = true;
});
</script>

<style lang="scss" scoped>
.box-wrapper {
  padding: 0 20px;
  height: 200px;
}

.box-content {
  color: #fff;
  box-sizing: border-box;
}

.warning-wrapper {
  padding: 0 20px;
  height: 300px;

  .warning-content {
    padding: 75px 20px 20px;
  }
}

.o2.more-btn {
  margin: 8px 0;
  text-align: right;
  font-size: 14px;
  color: #a5ccf2;
  cursor: pointer;
  position: relative;
  right: 20px;
  bottom: 45px;
}
// test
</style>
