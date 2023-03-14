import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon.vue";
import "@/styles/index.scss";

const pinia = createPinia();

const app = createApp(App);
app.use(router).use(pinia).component("SvgIcon", SvgIcon);

app.mount("#app");
