<template>
  <div id="root-mobile">
    <main ref="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>

    <footer ref="footer">
      <nav class="nav-bar" v-show="isShowNavBar">
        <c-tab-bar v-model="currentView" @click="clickHandler" @change="changeHandler">
          <c-tab class="nav-item" v-for="(item) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
            <!-- name为icon的插槽 -->
            <i slot="icon" :class="['iconfont',`icon-${item.icon}`]">
            </i>
          </c-tab>
        </c-tab-bar>
      </nav>
    </footer>

  </div>
</template>
<script>
// import { mapGetters, mapActions } from "vuex";
let tabs = [
  {
    label: "主页",
    icon: "home"
  },
  {
    label: "分类",
    icon: "iconfontchazhaofenlei"
  },
  {
    label: "购物车",
    icon: "cart"
  },
  {
    label: "个人中心",
    icon: "me"
  }
];
export default {
  name: "mobileRoot",
  mounted() {
    //某些需要在mounted之后完成的初始化
    let vm = this;
    this.$nextTick()
      .then(() => {
        vm.$emit("mounted", vm.$el);
      })
      .catch(error => {
        console.error(error);
      });
    console.log("mounted");
  },
  props: {},
  data() {
    return {
      isShowNavBar: true,
      isShowHomeHeader: true,
      transitionName: "",
      currentView: tabs[0].label,
      tabs
    };
  },
  computed: {},
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log("clickHandler", label);
      console.log("main Rect", this.$refs.main.getBoundingClientRect());
    },
    changeHandler(label) {
      console.log("value has changed, now is", label);
    }
  },
  components: {
    "c-button": () =>
      import(/* webpackChunkName: "c-container" */ "@cube/button/button"),
    "c-tab": () =>
      import(/* webpackChunkName: "c-container" */ "@cube/tab-bar/tab"),
    "c-tab-bar": () =>
      import(/* webpackChunkName: "c-container" */ "@cube/tab-bar/tab-bar"),
    "c-loading": () =>
      import(/* webpackChunkName: "c-container" */ "@cube/loading/loading")
  }
};
</script>

<style lang="scss">
#root-mobile {
  height: 100%;
  font-size: 1rem;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  > header {
    height: 3rem;
  }
  > main {
    flex: 1;
    margin: auto 0;
  }
  > footer {
    > .nav-bar {
      height: 3rem;
      @include elevation2();
      .nav-item {
        position: relative;
        .iconfont {
          font-weight: 900;
          font-size: 1rem;
        }
        .label {
          margin-top: 0.1rem;
          font-size: 0.8rem;
          &::before {
            content: " ";
            position: absolute;
            // background: #000;
            // opacity: 0.3;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
