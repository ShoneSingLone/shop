<template>
  <div class="container">
    <div :class="['header-wrapper',{'hide':isHeaderHide},{'none':isHeaderNone}]">
      <header id="header" class="header">
        <a href="javascript:void(0);" class="logo" @click="goHome"></a>
        <nav>
          <ul class="nav">
            <li @click="toScreen(index)" :class="['item', 'item_i_'+(index+1),{active:currentNavItem===index}]" v-for="(navItem, index) in navItems" :key="index">
              <a href="javascript:void(0);">{{navItem}}</a>
            </li>
            <li class="item item_custom_button">
              <a href="javascript:void(0);">立即购买</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>

    <screen1 id="screen1" :inViewport="isInViewport.screen1" :height="appHeight" @mounted="mountedCompletedProgress" />
    <screen2 id="screen2" :inViewport="isInViewport.screen2" :height="appHeight" @mounted="mountedCompletedProgress" />
    <screen3 id="screen3" :inViewport="isInViewport.screen3" :height="appHeight" @mounted="mountedCompletedProgress" />
    <screen4 id="screen4" :inViewport="isInViewport.screen4" :height="appHeight" @mounted="mountedCompletedProgress" />
    <screen5 id="screen5" :inViewport="isInViewport.screen5" :height="appHeight" @mounted="mountedCompletedProgress" />

    <!-- <buy/> -->

    <div :class="['back',{'hide':isOutlineHide},{'none':isOutlineNone}]">
      <a @click="scrollTo(0)" href="javascript:void(0)" class="glyphicon glyphicon-save"></a>
    </div>

    <site-footer></site-footer>

    <div :class="['outline',{ 'hide':isOutlineHide},{ 'none':isOutlineNone}] ">
      <a @click="toScreen(index)" href="javascript:void(0); " :class="[ 'item', 'item_i_'+(index+1),currentNavItem===index? 'active': ''] " v-for="(navItem, index) in navItems " :key="index ">{{navItem}}</a>
    </div>
  </div>

</template>

<script>
import heading from "./components/Heading";
import screen1 from "./components/Screen1";
import screen2 from "./components/Screen2";
import screen3 from "./components/Screen3";
import screen4 from "./components/Screen4";
import screen5 from "./components/Screen5";
import { throttle } from "lodash";
import { mapMutations, mapGetters, mapState } from "vuex";

function getReac(id) {
  return {
    top: document.getElementById(id).getBoundingClientRect().top,
    bottom: document.getElementById(id).getBoundingClientRect().bottom,
    left: document.getElementById(id).getBoundingClientRect().left,
    right: document.getElementById(id).getBoundingClientRect().right,
    height: document.getElementById(id).getBoundingClientRect().height
  };
}

const buy = () => import(/* webpackChunkName: "xxr.Buy" */ "./components/Buy");

const SCREEN = {
  screen1: 0,
  screen2: 1,
  screen3: 2,
  screen4: 3,
  screen5: 4
};
const SCREEN_ARRAY = ["screen1", "screen2", "screen3", "screen4", "screen5"];

export default {
  name: "product",
  metaInfo: {
    title: "产品概览", // set a title
    meta: [
      {
        // set meta
        name: "keyWords",
        content: "XXR不明说是什么，全靠页面，所见即所得"
      }
    ]
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.addEventListener(
        "scroll",
        throttle(
          () => {
            this.setScrollY(this.$el.scrollTop);
          },
          300,
          { trailing: true }
        )
      );
      this.rect.header = { ...getReac("header") };
    });
    console.log();
  },
  computed: {
    ...mapGetters(["appHeight"]),
    ...mapState("pc.product", ["scrollY"])
  },
  methods: {
    ...mapMutations("pc.product", ["setScrollY"]),
    mountedCompletedProgress({ name, el }) {
      let {
        bottom,
        height,
        left,
        right,
        top,
        width,
        x,
        y
      } = el.getBoundingClientRect();

      this.rect[name] = {
        bottom,
        height,
        left,
        right,
        top,
        width,
        x,
        y
      };
      return this.mountedCompleted++;
    },

    initScreenRect() {
      try {
        this.rect.header = { ...getReac("header") };
        this.rect.screen1 = { ...getReac("screen1") };
        this.rect.screen2 = { ...getReac("screen2") };
        this.rect.screen3 = { ...getReac("screen3") };
        this.rect.screen4 = { ...getReac("screen4") };
        this.rect.screen5 = { ...getReac("screen5") };
      } catch (error) {
        console.log(error);
      }
    },
    scrollTo(top) {
      this.$el.scrollTo({
        top,
        behavior: "smooth"
      });
    },
    toScreen(index) {
      this.scrollTo(this.rect[SCREEN_ARRAY[index]].top);
    },
    goHome() {
      this.$router.push({
        name: "p.h"
      });
    },
    show(component) {
      let isHide = "is" + component + "Hide";
      let isNone = "is" + component + "None";
      // header之前为隐藏（true），转为show
      this[isNone] = false;
      // 立马变为block但是opacity为0
      setTimeout(() => {
        this[isHide] = false;
      }, 1);
      return this;
    },
    hide(component) {
      let isHide = "is" + component + "Hide";
      let isNone = "is" + component + "None";
      // header之前为Show转为渐隐
      this[isHide] = true;
      // hide过程1s，1s之后display为none
      setTimeout(() => {
        this[isNone] = true;
      }, 1000 * 1);
      return this;
    },
    setCurrentInViewport(newV, oldV) {
      console.log(newV, oldV);
      if (
        newV < this.rect.screen5.bottom &&
        newV >= this.rect.screen5.top - this.rect.header.height - 120
      ) {
        this.currentInViewport = "screen5";
      } else if (
        newV < this.rect.screen4.bottom &&
        newV >= this.rect.screen4.top - this.rect.header.height - 120
      ) {
        this.currentInViewport = "screen4";
      } else if (
        newV < this.rect.screen3.bottom &&
        newV >= this.rect.screen3.top - this.rect.header.height - 120
      ) {
        this.currentInViewport = "screen3";
      } else if (
        newV < this.rect.screen2.bottom &&
        newV >= this.rect.screen2.top - this.rect.header.height - 120
      ) {
        this.currentInViewport = "screen2";
      } else if (
        newV < this.rect.screen1.bottom &&
        newV >= this.rect.screen1.top - this.rect.header.height - 120
      ) {
        this.currentInViewport = "screen1";
      }
    }
  },
  watch: {
    mountedCompleted(newV) {
      console.log(newV);
    },
    scrollY: function(newV, oldV) {
      // 当scrollY变化时处理各个状态
      // watch currentInViewport的变化，导航条响应变化
      this.setCurrentInViewport(newV, oldV);

      // nav与outline的显影处理
      if (this.scrollY <= this.headerHeight) {
        if (oldV <= this.headerHeight) return false;
        this.show("Header").hide("Outline");
      } else {
        if (oldV > this.headerHeight) return false;
        this.show("Outline").hide("Header");
      }
    },
    currentInViewport: function(newV, oldV) {
      // screen与导航条的处理
      console.log(oldV, newV);
      // let oldIndex = screen[oldV]
      let newIndex = SCREEN[newV];
      this.currentNavItem = newIndex;
      console.log("this.currentNavItem", this.currentNavItem);
      console.log((this.isInViewport[oldV] = false));
      console.log((this.isInViewport[newV] = true));
    }
  },
  components: {
    heading,
    screen1,
    screen2,
    screen3,
    screen4,
    screen5,
    buy,
    "site-footer": () => import(/* webpackChunkName: "Footer" */ "@c/PC/Footer")
  },
  data() {
    return {
      mountedCompleted: 0,
      isHeaderHide: false,
      isHeaderNone: false,
      isOutlineHide: true,
      isOutlineNone: true,
      navItems: ["外观", "配置", "型号", "说明", "其他"],
      headerHeight: 64,
      rect: {
        screen1: {},
        screen2: {},
        screen3: {},
        screen4: {},
        screen5: {}
      },
      currentInViewport: "",
      isInViewport: {
        screen1: true,
        screen2: false,
        screen3: false,
        screen4: false,
        screen5: false
      },
      currentNavItem: 0
    };
  }
};
</script>


<style lang='scss' scoped>
@import "../../../components/style/variables";
@import "./base";

.container {
  height: 100%;
  overflow-y: scroll;
  a {
    color: #14191e;
    text-decoration: none;
    &:hover {
      color: $main-theme-color;
    }
  }

  .header-wrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
    background-color: #fafafa;
    @include elevation4();
    min-width: 800px;
    transition: all 1s;

    &.hide {
      opacity: 0;
      transform: translateY(-100%);
    }
    &.none {
      display: none;
    }

    .header {
      // outline: 0.25rem solid rebeccapurple;
      height: 4rem;
      width: 1226px;
      margin: 0 auto;
      color: #292e35;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      opacity: 1;

      .logo {
        &::after {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background-color: $main-theme-color;
          z-index: -1;
        }
        position: relative;
        height: 55px;
        width: 55px;
        display: block;
        font-size: 18px;

        background: url("https://shonesinglone.leanapp.cn/imgs/mi-logo.png")
          center no-repeat;
        &:hover {
          background: url("https://shonesinglone.leanapp.cn/imgs/logo.png")
            center center no-repeat;
          color: black;
        }
      }

      ul.nav {
        // outline: 0.1rem solid cyan;
        position: relative;
        margin-right: 0.6rem;

        li.item {
          // outline: 0.2rem solid rebeccapurple;
          // padding: 0 5px;
          font-size: 14px;
          display: inline-block;
          width: 48px;
          text-align: center;
          line-height: 40px;
          cursor: pointer;

          &:hover {
            color: $main-theme-color;
          }
          &.active a {
            color: $main-theme-color;
          }
        }
        li.item:hover ~ li.item::before {
          background-color: red;
          left: 0;
        }
        li.item_custom_button {
          width: 64px;
          padding: 5px 0;
          border-radius: 0.25rem;
          a {
            color: #fff;
          }
          background: $main-theme-color;
          &:hover {
            background: darken($main-theme-color, 10%);
          }
        }
      }
      .active {
        color: $main-theme-color;
      }
    }
  }
  .back {
    position: fixed;
    background: transparent;
    a {
      &.glyphicon {
        transform: rotate(180deg);
      }
      width: 2rem;
      height: 2rem;
      font-size: 2rem;
    }

    bottom: 5rem;
    right: 1rem;
    z-index: 1;
    transition: all 1s;
    opacity: 1;

    &.hide {
      opacity: 0;
    }
    &.none {
      display: none;
    }
  }
  .footer {
    // outline: 1rem solid #fff;
    height: 5rem;
    line-height: 5rem;
    background-color: #07111b;
    text-align: center;
    color: #fff;
  }

  .outline {
    position: fixed;
    padding: 5px 0.6rem;
    bottom: 120px;
    right: 0;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0px 4px 12px 0px rgba(7, 17, 27, 0.1);
    transition: all 1s;
    @include box-shadow();
    opacity: 1;

    &.hide {
      opacity: 0;
      transform: translateX(100%);
    }
    &.none {
      display: none;
    }

    .item {
      display: block;
      width: 40px;
      height: 30px;
      line-height: 30px;
      padding: 5px 0;
      background: rgb(255, 255, 255);
      margin: 5px 0px 0px;
      border-top: 1px solid #eee;
      text-align: center;
      color: #93999f;
      &:first-child {
        border: none;
      }
      &.active {
        color: $main-theme-color;
      }
    }
  }
}
</style >