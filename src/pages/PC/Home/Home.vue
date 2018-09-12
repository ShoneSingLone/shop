<template>
  <main class="main">
    <bn-bar></bn-bar>
    <top-bar></top-bar>
    <site-header></site-header>
    <div class="banner-wrapper">
      <carousel></carousel>
      <category></category>
    </div>
    <!--     <flash-purchase/>
    <site-footer></site-footer>
 -->
  </main>
</template>

<script>
export default {
  name: "home",
  mounted() {
    let metaInfo = {
      title: "首页", // set a title
      meta: [
        {
          // set meta
          name: "keyWords",
          content: "首页入口"
        }
      ]
    };
    console.log(metaInfo);
  },
  methods: {},
  computed: {},
  components: {
    "bn-bar": () =>
      import(/* webpackChunkName: "BnBar" */ "./components/BnBar"),
    "site-header": () =>
      import(/* webpackChunkName: "SiteHeader" */ "./components/SiteHeader"),
    "top-bar": () =>
      import(/* webpackChunkName: "TopBar" */ "./components/TopBar"),
    "flash-purchase": () =>
      import(/* webpackChunkName: "FlashPurchase" */ "./components/FlashPurchase"),
    carousel: () =>
      import(/* webpackChunkName: "Carousel" */ "./components/Carousel"),
    category: () =>
      import(/* webpackChunkName: "category" */ "./components/Category"),
    "site-footer": () =>
      import(/* webpackChunkName: "Footer" */ "./components/Footer")
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
// @import "../../assets/bootstrap/variables";

.main {
  height: 100%;
  overflow-y: scroll;
  > .banner-wrapper {
    position: relative;
    width: 1226px;
    margin: 0 auto 16px;
    height: 460px;
  }
  .container {
    position: relative;
    width: 1226px;
    margin: 0 auto;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }
}
</style >