import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/interface/main.interface";
import { authState } from "@/store/auth/auth.index";
import { loadingState } from "@/store/loading/loading.index";
Vue.use(Vuex);
const options: StoreOptions<RootState> = {
  state: {
    loading: false,
  },
  mutations: {},
  actions: {},
  modules: {
    auth: authState,
    loading: loadingState,
  },
};
export default new Vuex.Store(options);
