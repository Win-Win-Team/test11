import { defineStore } from "pinia";
import defaultSettings from "@/config/settings";

const {
  title,
  logo,
  menuBackgroundColor,
  menuTextColor,
  menuActiveBackgroundColor,
  menuActiveTextColor,
  menuUniqueOpened,
} = defaultSettings;

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      /**
       * 全局
       */
      // title
      title: title,
      // logo
      logo: logo,
      // 是否显示Logo
      menuLogo: true,

      /**
       * 侧边栏菜单
       */
      //菜单宽度(展开时)，单位px
      menuWidth: 200,
      // 是否水平折叠收起菜单
      menuCollapse: false,
      // 背景色
      menuBackgroundColor: menuBackgroundColor,
      // 文字颜色
      menuTextColor: menuTextColor,
      // 激活项背景色
      menuActiveBackgroundColor: menuActiveBackgroundColor,
      // 激活项文字色
      menuActiveTextColor: menuActiveTextColor,
      // 是否只保持一个子菜单的展开(手风琴)
      menuUniqueOpened: menuUniqueOpened,
    };
  },
  actions: {
    changeSetting({ key, value }: { key: any; value: any }) {
      this[key] = value;
    },
    restoreDefault() {
      // TODO
    },
    changeMenuCollapse() {
      this.menuCollapse = !this.menuCollapse;
      if (this.menuCollapse) {
        this.menuWidth = 64;
      } else {
        this.menuWidth = 200;
      }
    },
  },
});
