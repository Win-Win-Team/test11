<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <nav-bar />
      <app-main />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Sidebar, AppMain, NavBar } from "@/layout/components";
import { useSettingsStore } from "@/store/modules/settings.modules";
const settingsStore = useSettingsStore();
const menuWidth = computed(() => `${settingsStore.menuWidth}px`);
console.log(menuWidth);
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;

  .sidebar-container {
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    transition: width 0.28s;
    font-size: 0;
  }

  .main-container {
    position: relative;
    min-height: 100%;
    margin-left: v-bind(menuWidth);
    transition: margin-left 0.28s;

    .fixed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      background-color: #f5f5f5;
      height: 90px;
      border-bottom: 1px solid #333;
      position: fixed;
      width: 100vw;

      .tags-view {
        flex: 1;
        margin-right: 10px;
      }
    }

    .main-scrollbar {
      // navbar height 50 padding 上下各20
      height: calc(100vh - 90px);
    }
  }
}
</style>
