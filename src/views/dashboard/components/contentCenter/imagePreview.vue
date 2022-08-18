<template>
  <el-dialog v-model="dialogTableVisible" custom-class="cutom-img-preview-dilog" :show-close="false" :modal="false">
    <el-image class="h300px w100%" src="../../../../src/assets/images/lab.png" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogTableVisible = ref(false);

function open() {
  dialogTableVisible.value = true;
}

defineExpose({
  open,
});
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.cutom-img-preview-dilog .el-dialog__body {
  padding: 0;
}
</style>
