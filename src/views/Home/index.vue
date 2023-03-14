<template>
  <div class="home">
    <div class="bar-chart">
      <charts
        type="bar"
        :options="options"
        @chart-click="handleChartClick"
        @select-changed="selectChanged"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStaticDeviceByUserObject } from "./hooks";
const { options, handleChartClick, selectChanged } =
useStaticDeviceByUserObject();
</script>
<style lang="scss" scoped>
.bar-chart {
  height: 50vh;
}
</style>
