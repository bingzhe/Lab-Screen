<template>
  <div>
    <div class="h250px pl20px pr20px">
      <BorderBox11 title="氧含量信息">
        <el-carousel trigger="click" height="250px" :interval="5000">
          <el-carousel-item v-for="item in 2" :key="item">
            <div class="box-content flex justify-between items-center p40px pt80px w100% h100%">
              <WaterLevelPond :config="{ data: [66], shape: 'roundRect' }" class="w80px h120px" />
              <WaterLevelPond :config="{ data: [44], shape: 'roundRect' }" class="w80px h120px" />
              <WaterLevelPond :config="{ data: [55], shape: 'roundRect' }" class="w80px h120px" />
              <WaterLevelPond :config="{ data: [22], shape: 'roundRect' }" class="w80px h120px" />
            </div>
          </el-carousel-item>
        </el-carousel>
        <!-- <div class="box-content flex w100% h100% justify-between items-center p40px pt80px">
          <WaterLevelPond :config="{ data: [66], shape: 'roundRect' }" class="w80px h120px" />
          <WaterLevelPond :config="{ data: [44], shape: 'roundRect' }" class="w80px h120px" />
          <WaterLevelPond :config="{ data: [55], shape: 'roundRect' }" class="w80px h120px" />
          <WaterLevelPond :config="{ data: [22], shape: 'roundRect' }" class="w80px h120px" />
        </div> -->
      </BorderBox11>
    </div>

    <div class="h230px pl20px pr20px">
      <BorderBox11 title="用气点实时压力">
        <div class="box-content flex w100% h100% items-center p40px">
          <div class="flex flex-col items-center justify-center h100% pr10px pt30px">
            <img class="w30px h30px" src="../../../../assets/images/door1.png" />
            <span class="white">开关级状态</span>
            <el-switch :value="true"></el-switch>
          </div>
          <div class="flex flex-col items-center justify-center h100% pr10px pt30px">
            <img class="w30px h30px" src="../../../../assets/images/door2.png" />
            <span>开关级状态</span>
            <el-switch :value="true"></el-switch>
          </div>
          <div class="flex flex-col items-center justify-center h100% pr10px pt30px">
            <img class="w30px h30px" src="../../../../assets/images/door1.png" />
            <span class="white">开关级状态</span>
            <el-switch :value="true"></el-switch>
          </div>
          <div class="flex flex-col items-center justify-center h100% pr10px pt30px">
            <img class="w30px h30px" src="../../../../assets/images/door2.png" />
            <span>开关级状态</span>
            <el-switch :value="true"></el-switch>
          </div>
        </div>
      </BorderBox11>
    </div>

    <div class="box-wrapper warning-wrapper">
      <BorderBox11 title="告警详情">
        <div class="warning-content">
          <WarningTable @more-click="handleMoreClick" />
        </div>
      </BorderBox11>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BorderBox11, WaterLevelPond } from '@kjgl77/datav-vue3';
import WarningTable from './warningTable.vue';

const handleMoreClick = () => {
  console.log('more click');
};
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
</style>
