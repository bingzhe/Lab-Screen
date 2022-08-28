<template>
  <div>
    <div class="relative">
      <img class="w100% h550px pt30px" src="../../../../assets/images/lab1.jpg" />

      <dot class="absolute top-210px left-475px cursor-pointer" @click="handleDotClick('3110')" />
      <dot class="absolute top-400px left-490px cursor-pointer" @click="handleDotClick('3113')" />
      <dot class="absolute top-340px left-385px cursor-pointer" @click="handleDotClick('3118')" />
      <dot class="absolute top-190px left-270px cursor-pointer" @click="handleDotClick('3440')" />
      <dot class="absolute top-150px left-230px cursor-pointer" @click="handleDotClick('3445')" />
    </div>

    <div class="flex pt30px pb30px">
      <videoItem class="w33.3%" />
      <videoItem class="w33.3%" />
      <videoItem class="w33.3%" />
    </div>

    <div class="flex justify-between">
      <div class="w33.3% flex justify-center">
        <BorderBox10 class="lab-name-item">实验室01</BorderBox10>
      </div>
      <div class="w33.3% flex justify-center">
        <BorderBox10 class="lab-name-item">实验室02</BorderBox10>
      </div>
      <div class="w33.3% flex justify-center">
        <BorderBox10 class="lab-name-item">实验室03</BorderBox10>
      </div>
    </div>

    <imagePreview ref="imagePreviewRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BorderBox10 } from '@kjgl77/datav-vue3';
import videoItem from './videoItem.vue';
import dot from './dot.vue';
import imagePreview from './imagePreview.vue';

const imagePreviewRef = ref(null);

const handleDotClick = (type: string) => {
  (imagePreviewRef.value as any).open(type);
};
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
