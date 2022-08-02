<template>
  <div>
    <BorderBox8>
      <div class="video-wrapper" padding="10px">
        <video autoplay="true" loop="true" class="video_around video_around_chose" title="循环监控01">
          <source class="video" title="主监控位" src="../../../../assets/video/test_mv02.mov" />
        </video>
      </div>
    </BorderBox8>
  </div>
</template>

<script setup lang="ts">
import { BorderBox8 } from '@kjgl77/datav-vue3';
</script>

<style lang="scss" scoped>
.video-wrapper {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin: 0 5px;

  video {
    width: 100%;
    height: 100%;
  }
}
</style>
