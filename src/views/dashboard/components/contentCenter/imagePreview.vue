<template>
  <el-dialog v-model="dialogTableVisible" custom-class="cutom-img-preview-dilog" :show-close="false" :modal="false">
    <el-image class="w100%" :src="img" />
    <template #header>
      <div class="my-header"></div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import p3110pic from '@/assets/images/3110.jpg';
import p3113pic from '@/assets/images/3113.jpg';
import p3118pic from '@/assets/images/3118.jpg';
import p3440pic from '@/assets/images/3440.jpg';
import p3445pic from '@/assets/images/3445.jpg';
import lab2pic from '@/assets/images/lab2.jpg';

const dialogTableVisible = ref(false);
const img = ref('');

function open(type: string) {
  dialogTableVisible.value = true;

  if (type === '3110') {
    img.value = p3110pic;
  } else if (type === '3113') {
    img.value = p3113pic;
  } else if (type === '3118') {
    img.value = p3118pic;
  } else if (type === '3440') {
    img.value = p3440pic;
  } else if (type === '3445') {
    img.value = p3445pic;
  } else if (type === 'lab2') {
    img.value = lab2pic;
  }
}

defineExpose({
  open,
});
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.cutom-img-preview-dilog .el-dialog__body {
  padding: 0;
  font-size: 0;
}
.cutom-img-preview-dilog .el-dialog__header {
  padding: 0;
}
</style>
