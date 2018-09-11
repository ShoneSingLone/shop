<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  mounted() {
    console.log("App mounted");
    this.setAppSize(this.$el.getBoundingClientRect());
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.setAppSize(this.$el.getBoundingClientRect());
        console.log(this.appWidth);
        console.log(this.appHeight);
      });
    });
  },
  computed: {
    ...mapGetters(["appWidth", "appHeight"])
  },
  methods: {
    ...mapActions(["setAppSize"])
  },
  watch: {
    appWidth(newW, oldW) {
      console.log("appWidth newW,oldW:", newW, oldW);
      //Pixel2 411*731
      // 判定是否为PC视图
      let routePath = newW > 411 ? { name: "p.h" } : { name: "m.h" };
      // routePath可根据其他属性（currentShowView）改变以保持视图一致
      this.$router.push(routePath);
    }
  }
};
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  font-size: 16px;
  overflow: hidden;
}
</style>
