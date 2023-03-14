<template>
  <div class="app-main">
    <router-view v-slot="{ Component }" :key="key">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <div class="main-page">
            <component :is="Component" />
          </div>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useTagsViewStore } from "@/store/modules/tags.modules";

const route = useRoute();
const tagsViewStore = useTagsViewStore();
const cachedViews = computed(() => tagsViewStore.cachedViews);
const key = computed(() => route.path);
</script>

<style lang="scss" scoped>
.app-main {
  /* fade */
  background-color: #e9e9e9;
  height: calc(100vh - 50px);
  padding: 16px;
  overflow: hidden;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.28s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .main-page {
    width: 100%;
    height: 100%;
    padding: 16px;
    background-color: #fff;
  }
}
</style>
