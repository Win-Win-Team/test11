<script setup lang="ts">
const router = useRouter();
const clickHandler_back = () => {
  router.go(-1);
};
</script>

<template>
  <div class="error-page">
    <el-result icon="error" title="找不到该路由" sub-title="">
      <template #extra>
        <el-button @click="clickHandler_back" type="primary"
          >返回上一页</el-button
        >
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
}
</style>
