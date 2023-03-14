<template>
  <div class="sidebar-container">
    <Logo v-if="showLogo" :menu-collapse="menuCollapse" />
    <el-scrollbar class="vertical-menus-scrollbar">
      <el-menu
        mode="vertical"
        :default-active="activeMenu"
        :collapse="menuCollapse"
        :background-color="menuBackgroundColor"
        :text-color="menuTextColor"
        :active-text-color="menuActiveTextColor"
        :unique-opened="menuUniqueOpened"
        class="vertical-menus"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from "@/store/modules/settings.modules";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { baseRoute } from "@/router/route";
import SidebarItem from "./SidebarItem.vue";
import Logo from "./Logo.vue";

const settingsStore = useSettingsStore();

const showLogo = computed(() => settingsStore.menuLogo);
const menuCollapse = computed(() => settingsStore.menuCollapse);
const menuBackgroundColor = computed(() => settingsStore.menuBackgroundColor);
const menuTextColor = computed(() => settingsStore.menuTextColor);
const menuActiveTextColor = computed(() => settingsStore.menuActiveTextColor);
const menuUniqueOpened = computed(() => settingsStore.menuUniqueOpened);
const menuActiveBackgroundColor = computed(
  () => settingsStore.menuActiveBackgroundColor
);

const menuWidth = computed(() =>
  settingsStore.menuCollapse ? "64px" : settingsStore.menuWidth + "px"
);

const menuHeight = computed(() =>
  showLogo.value ? `calc(100% - 50px)` : "100%"
);

const route = useRoute();
const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const routes = ref<any[]>(baseRoute);
console.log(routes);
</script>

<style lang="scss" scoped>
.sidebar-container {
  transition: width 0.3s;
  width: v-bind(menuWidth);
  background-color: v-bind(menuBackgroundColor);

  .vertical-menus-scrollbar {
    height: v-bind(menuHeight);

    .vertical-menus {
      border: none;
      user-select: none;
    }
  }
}
</style>

<style lang="scss">
.vertical-menus {
  .el-sub-menu .svg-icon,
  .el-menu-item .svg-icon {
    width: 24px;
  }

  .el-menu-item.is-active {
    background-color: v-bind(menuActiveBackgroundColor);
  }
}
</style>
