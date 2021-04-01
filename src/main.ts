import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/style/main.scss";
import "vue-select/dist/vue-select.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { ToastsPlugin } from "@/plugins/toasts.plugin";
import { AuthPlugin } from "@/plugins/auth.plugin";
import { LoadingPlugin } from "@/plugins/loading.plugin";
import {
  faSignOutAlt,
  faBars,
  faHome,
  faEdit,
  faFolderOpen,
  faListUl,
  faHistory,
  faCog,
  faTrash,
  faTrashAlt,
  faPlus,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import LogoLayoutController from "@/layout/logo/logo.layout.vue";
import { BoxConfirmPlugin } from "@/plugins/boxConfirm.plugin";
import DefaultLayout from "./layout/default/default.layout.vue";

library.add(
  faSignOutAlt,
  faBars,
  faHome,
  faEdit,
  faFolderOpen,
  faListUl,
  faHistory,
  faCog,
  faTrash,
  faTrashAlt,
  faPlus,
  faTimesCircle
);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("DefaultLayout", DefaultLayout);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("LogoLayout", LogoLayoutController);
declare module "vue/types/vue" {
  interface Vue {
    $toasts: ToastsPlugin;
    $auth: AuthPlugin;
    $loading: LoadingPlugin;
    $boxConfirm: BoxConfirmPlugin;
  }
}
(async () => {
  Vue.prototype.$toasts = new ToastsPlugin();
  Vue.prototype.$auth = new AuthPlugin(store);
  Vue.prototype.$loading = new LoadingPlugin(store);
  Vue.prototype.$boxConfirm = new BoxConfirmPlugin();
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
})();
