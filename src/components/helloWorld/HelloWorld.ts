import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  mounted() {
    return null;
  }

  getFullName() {
    this.$toasts.success("done");
    return "nung pothi";
  }
}
