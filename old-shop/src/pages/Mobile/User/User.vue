<template>
    <transition>
        <div class="wrapper">
            <c-slide ref="slide" :data="items" @change="changePage">
                <c-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                    <a :href="item.url">
                        <img :src="item.image">
                    </a>
                </c-slide-item>
            </c-slide>
        </div>
    </transition>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "mobileUser",
  data() {
    return {
      items: [
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png"
        },
        {
          url: "http://www.didichuxing.com/",
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png"
        }
      ]
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  components: {
    "c-slide": () =>
      import(/* webpackChunkName: "c-slide" */ "@cube/slide/slide"),
    "c-slide-item": () =>
      import(/* webpackChunkName: "c-slide-item" */ "@cube/slide/slide-item")
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
}
</style>
