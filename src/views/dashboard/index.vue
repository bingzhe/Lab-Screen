<template>
  <div ref="appRef" class="home">
    <div class="bigScreen">
      <HeaderTab />
      <div class="content">
        <ContentLeft class="contentLeft"></ContentLeft>
        <ContentCenter class="contentCenter"></ContentCenter>
        <ContentRight class="contentRight"></ContentRight>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useIndex from '@/utils/useDraw';
import HeaderTab from './components/headerTab/headerTab';
import ContentLeft from './components/contentLeft/contentLeft.vue';
import ContentRight from './components/contentRight/contentRight.vue';
import ContentCenter from './components/contentCenter/contentCenter.vue';

// * 适配处理
const { appRef, calcRate, windowDraw } = useIndex();
// 生命周期
onMounted(() => {
  // todo 屏幕适应
  windowDraw();
  calcRate();
});
</script>

<style lang="scss" scoped>
.home {
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .bigScreen {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/bg.jpg');
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      display: flex;
      justify-content: space-between;
      height: 90%;
      padding: 10px;
      .contentLeft {
        width: 28%;
      }
      .contentCenter {
        width: 42%;
      }
      .contentRight {
        width: 28%;
      }
    }
  }
}
</style>
