const Layout = () => import("@/layout/index.vue");
// import home from "./modules/home.module";
// import { TRouteRecordRaw, TMenuRaw } from "@/types/index";

export const baseRoute = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "",
    children: [
      {
        path: "",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页",
          icon: "dashboard",
        },
      },
    ],
  },
  {
    path: "/element",
    component: Layout,
    redirect: "/element/form",
    meta: {
      title: "element",
      icon: "example",
    },
    children: [
      {
        path: "form",
        component: () => import("@/views/element/Form/index.vue"),
        meta: {
          title: "Form",
          icon: "form",
        },
      },
      {
        path: "table",
        component: () => import("@/views/element/Table/index.vue"),
        meta: {
          title: "Table",
          icon: "table",
        },
      },
    ],
  },
  {
    path: "/error/:status",
    name: "error",
    component: () => import("@/views/error/404.vue"),
  },
  /* 错误路由 */
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/error/404.vue"),
  },
];
