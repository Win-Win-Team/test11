import Layout from "@/layout/index.vue";

export default {
  path: "home",
  component: Layout,
  meta: {
    title: "首页",
  },
  children: [
    {
      path: "",
      redirect: "/home/index",
    },
    {
      path: "index",
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: "首页",
      },
    },
  ],
};
