import { defineStore } from "pinia";
import baseRoute from "@/router";

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(
  roles: any[],
  route: { meta: { roles: string | any[] } }
) {
  if (route.meta && route.meta.roles) {
    return roles.some((role: any) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes: any[], roles: any) {
  const res: any[] = [];

  routes.forEach((route: any) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

export const usePermissionStore = defineStore("permission", {
  state: () => {
    return {
      routes: [],
      addRoutes: [],
    };
  },
  actions: {
    /**
     * @method generateRoutes 生成路由
     */
    generateRoutes(roles: string | string[]) {
      return new Promise((resolve) => {
        // const accessedRoutes = roles.includes("admin")
        //   ? baseRoute || []
        //   : filterAsyncRoutes(baseRoute, roles);
        // this.addRoutes = accessedRoutes;
        this.routes = baseRoute;
        console.log(this.routes);
        console.log(1212212121);
        resolve(baseRoute);
      });
    },
  },
});
