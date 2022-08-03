<template>
  <div>
    <img class="w100% h550px pt30px" src="../../../../assets/images/lab.png" />

    <div class="flex pt30px pb30px">
      <videoItem class="w33.3%" />
      <videoItem class="w33.3%" />
      <videoItem class="w33.3%" />
    </div>

    <div class="flex justify-between">
      <div class="w33.3% flex justify-center">
        <BorderBox8 class="lab-name-item">实验室01</BorderBox8>
      </div>
      <div class="w33.3% flex justify-center">
        <BorderBox8 class="lab-name-item">实验室02</BorderBox8>
      </div>
      <div class="w33.3% flex justify-center">
        <BorderBox8 class="lab-name-item">实验室03</BorderBox8>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Decoration11, BorderBox8 } from '@kjgl77/datav-vue3';
import videoItem from './videoItem.vue';
</script>

<style lang="scss" scoped>
.lab-name-item {
  width: 200px;
  height: 60px;
  font-size: 20px;
  line-height: 60px;
  color: #a5ccf2;
  text-align: center;
}
</style>
