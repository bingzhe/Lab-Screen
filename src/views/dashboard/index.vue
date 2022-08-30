<template>
  <div ref="appRef" class="home">
    <div class="bigScreen">
      <HeaderTab />
      <div class="content">
        <div class="lab-wrapper">
          <div class="lab-item active">首页</div>
          <div class="lab-item">3110</div>
          <div class="lab-item">3113</div>
          <div class="lab-item">3118</div>
          <div class="lab-item">3440</div>
          <div class="lab-item">3445</div>
        </div>
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

  // console.log(appRef.value);
  // if (appRef.value.requestFullscreen) {
  //   appRef.value.requestFullscreen();
  // } else if (appRef.value.webkitRequestFullscreen) {
  //   appRef.value.webkitRequestFullscreen();
  // } else if (appRef.value.mozRequestFullScreen) {
  //   appRef.value.mozRequestFullScreen();
  // } else if (appRef.value.msRequestFullscreen) {
  //   appRef.value.msRequestFullscreen();
  // }

  // appRef.value.requestFullscreen();
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
      .lab-wrapper {
        width: 8%;
        padding: 30px 0 0 35px;

        .lab-item {
          background-image: url('@/assets/images/box.png');
          background-size: cover;
          font-size: 20px;
          color: #a5ccf2;
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin-bottom: 20px;
          cursor: pointer;

          &.active {
            color: #ffb116;
          }
        }
      }
      .contentLeft {
        width: 26%;
      }
      .contentCenter {
        width: 40%;
      }
      .contentRight {
        width: 26%;
      }
    }
  }
}
</style>
