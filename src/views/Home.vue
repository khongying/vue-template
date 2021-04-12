<template>
  <DefaultLayout>
    <b-container class="line-space-y">
      <div class="home">watch :</div>
    </b-container>
  </DefaultLayout>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorldVue from "@/components/helloWorld/HelloWorld.vue";

import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/helloWorld/HelloWorld";
import { AuthInitState } from "@/interface/auth.interface";

@Component({
  name: "Home",
  components: {
    HelloWorld: HelloWorldVue
  }
})
export default class Home extends Vue {
  public auth = {} as AuthInitState;

  async mounted() {
    try {
      // await this.$loading.loading(true);
      await this.$loading.loading(true);
      await this.$toasts.danger("assdddd", "dddd");
      await this.$users.getUsers();
      console.log(this.$users.state.users);
      await this.$loading.loading(false);
      return null;
    } catch (e) {
      this.$toasts.danger(e.message);
    }
  }
}
</script>
