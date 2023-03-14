import { RouteRecordRaw } from "vue-router";

// 路由meta
export type TRouteMeta = {
  title?: string; // 页面标题
  icon?: string; // 侧边菜单栏图标
  activeMenu?: string;
  slideHidden?: boolean; // 侧边菜单栏中是否需要隐藏
  breadcrumb?: boolean; // 页面面包屑中是否需要显示当前路由
  auth?: string | number; // 权限
};

// 路由对象
export type TRouteRecordRaw = {
  meta?: TRouteMeta;
} & RouteRecordRaw;

export type TMenuRaw = {
  label: string | undefined;
  path: string;
  children?: TMenuRaw[] | undefined;
};
