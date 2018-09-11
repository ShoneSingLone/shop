<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";

export default {
  name: "app",
  mounted() {
    console.log("App mounted");
    this.setAppSize(document.body.getBoundingClientRect());
    this.$nextTick(() => {
      window.addEventListener(
        "resize",
        debounce(() => {
          this.setAppSize(document.body.getBoundingClientRect());
          console.log(
            "this.appWidth",
            this.appWidth,
            "this.appHeight",
            this.appHeight
          );
        }, 150)
      );
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
      //Pixel2 411*731
      // 判定是否为PC视图
      let routePath = newW > 420 ? { name: "p.h" } : { name: "m.h" };
      // routePath可根据其他属性（currentShowView）改变以保持视图一致
      console.log("appWidth newW,oldW:", newW, oldW, routePath);
      this.$router.push(routePath);
    }
  }
};
</script>
<style lang="scss">
@import "./assets/style/iconfont.scss";
.iconfont {
  font-size: unset;
  margin: 0 0.25rem;
}
html,
body,
#app {
  height: 100%;
  font-size: 16px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
}
</style>
