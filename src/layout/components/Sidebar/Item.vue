<template>
  <el-icon>
    <svg-icon v-if="props.icon" :name="props.icon" />
  </el-icon>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
});
console.log(props.icon);
</script>
