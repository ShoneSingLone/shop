<template>
  <div class="site-header">
    <div class="container">
      <div class="wrapper">
        <a href="javascript:void(0)" class="logo"></a>
        <a href="javascript:void(0)" class="pic-gif"></a>
        <div class="header-nav">
          <ul class="nav-wrap">
            <li v-for="(navItem, index) of navItems" :key="index" class="item" @mouseenter="enterNavItem(navItem)" @mouseleave="leaveNavItem()">
              <a href="javascript: void(0);">{{navItem.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- search -->
      <div :class="['header-search',{focus:isInputFocus}]">
        <transition name="fadeOut">
          <ul class="hot-wrap" v-show="!isInputFocus">
            <li v-for="(hotItem, index) in hotItems" :key="index" class="item">{{hotItem}}</li>
          </ul>
        </transition>

        <label class="search-input" for="search-input" autocomplete="off">
          <input type="text" autocomplete="off" id="search-input" class="search-ipt" @focus="searchInputFocus" @blur="searchInputBlur">
        </label>
        <div class="search-btn">
          <a href="javascript:void(0)" class="iconfont icon-search"></a>
        </div>
        <div class="search-result">
          <ul class="result-wrap">
            <li v-for="(resultItem, index) in resultItems" :key="index" class="item">
              <span class="item-name">{{resultItem.Key}}</span>
              <span class="item-num">约有{{resultItem.Rst}}件</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- search end-->
    </div>

    <transition name="show">
      <div class="header-nav-menu" @mouseenter="enterNavItem(currentNavItem)" @mouseleave="leaveNavItem()" v-show="currentNavItem">
        <ul class="menus">
          <li class="product" v-for="(tabItem, index) in tabItems[currentNavItem.type]" :key="index">
            <p class="info" v-if="tabItem.info">
              <span class="flag">{{tabItem.info}}</span>
            </p>
            <a :href="tabItem.link"><img :src="tabItem.imgUrl" :alt="tabItem.name"></a>
            <p class="name">{{tabItem.name}}</p>
            <p class="price">{{tabItem.price}}</p>
          </li>
        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "siteHeader",
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
  beforeRouteEnter: (to, from, next) => {
    console.warn("beforeRouteEnter Sample");
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // next(vm => {});
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.warn("beforeRouteUpdate Sample");
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.warn("beforeRouteLeave Sample");
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  },
  props: {},
  data() {
    return {
      isInputFocus: false,
      currentNavItem: false,
      timer: {},
      navItems: [
        { name: "小米手机", type: "xiaomi" },
        { name: "红米", type: "redmi" },
        { name: "平板·笔记本", type: "mipad" },
        { name: "电视", type: "mitv" },
        { name: "盒子·影音", type: "mibox" },
        { name: "路由器", type: "mirouter" },
        { name: "智能硬件", type: "mihardware" },
        { name: "服务", type: "" },
        { name: "社区", type: "" }
      ],
      hotItems: ["小米8", "小米6x"],
      resultItems: [
        { Key: "小米6", Rst: 7 },
        { Key: "红米Note 4X", Rst: 8 },
        { Key: "小米MIX", Rst: 1 },
        { Key: "小米Max2", Rst: 3 },
        { Key: "小米手机5c", Rst: 3 },
        { Key: "手环", Rst: 6 },
        { Key: "耳机", Rst: 19 },
        { Key: "充电宝", Rst: 19 },
        { Key: "运动鞋", Rst: 2 },
        { Key: "路由器", Rst: 17 },
        { Key: "小米盒子", Rst: 8 }
      ],
      tabItems: {
        xiaomi: [
          {
            name: "小米6",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm6.png",
            link: "",
            price: "2499元起",
            info: "新品",
            showStatus: true
          },
          {
            name: "小米Max 2",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/max2.png",
            link: "",
            price: "1699元起",
            info: "现货",
            showStatus: true
          },
          {
            name: "小米Note 2",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiaomiNOTE2.jpg",
            link: "",
            price: "2799元起",
            info: "立减300",
            showStatus: true
          },
          {
            name: "小米MIX",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/MIX.jpg",
            link: "",
            price: "3499元起",
            info: "特惠250",
            showStatus: true
          },
          {
            name: "小米5s Plus",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/5splus.jpg",
            link: "",
            price: "2299元起",
            info: "立减200",
            showStatus: true
          },
          {
            name: "小米手机5c",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/mi5c.png",
            link: "",
            price: "1499元起",
            info: "立减200",
            showStatus: true
          }
        ],

        redmi: [
          {
            name: "红米Note 4X",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/hmn4x.jpg",
            link: "",
            price: "799元起",
            info: "热卖",
            showStatus: true
          },
          {
            name: "红米4X",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4x.jpg",
            link: "",
            price: "699元起",
            info: "热卖",
            showStatus: true
          },
          {
            name: "红米4A",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4a.png",
            link: "",
            price: "599元起",
            info: ""
          },
          {
            name: "红米4",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4.jpg",
            link: "",
            price: "799元起",
            info: ""
          }
        ],

        mipad: [
          {
            name: "小米平板3 64GB",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/mipad3.png",
            link: "",
            price: "1499元",
            info: ""
          },
          {
            name: "小米笔记本Air 12.5",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/bijiben12.5.jpg",
            link: "",
            price: "3599元",
            info: ""
          },
          {
            name: "小米笔记本Air 13.3",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/bijiben13.3.jpg",
            link: "",
            price: "4999元",
            info: "新品",
            showStatus: true
          }
        ],
        mitv: [
          {
            name: "小米电视4 49英寸",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_49.png",
            link: "",
            price: "3499元",
            info: "新品",
            showStatus: true
          },
          {
            name: "小米电视4 55英寸",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_55.png",
            link: "",
            price: "3999元起",
            info: "新品",
            showStatus: true
          },
          {
            name: "小米电视4 65英寸",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_65.png",
            link: "",
            price: "9999元",
            info: "新品",
            showStatus: true
          },
          {
            name: "小米电视4A 43英寸",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_43.png",
            link: "",
            price: "2099元",
            info: ""
          },
          {
            name: "小米电视4A 49英寸",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_49.png",
            link: "",
            price: "2599元",
            info: ""
          },
          {
            name: "查看全部",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/70dianshi.png",
            link: "",
            price: "小米电视",
            info: ""
          }
        ],
        mibox: [
          {
            name: "小米盒子3s",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/mihezi3s.png",
            link: "",
            price: "299元",
            info: ""
          },
          {
            name: "小米盒子3c",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/mihezi3c.png",
            link: "",
            price: "199元",
            info: ""
          },
          {
            name: "小米盒子3 增强版",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/hezi3s.jpg",
            link: "",
            price: "399元",
            info: ""
          },
          {
            name: "小米家庭影院",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/jtyy.png",
            link: "",
            price: "1999元",
            info: ""
          },
          {
            name: "小米家庭音响 标准版",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/putonban.jpg",
            link: "",
            price: "699元",
            info: ""
          }
        ],
        mirouter: [
          {
            name: "小米路由器 HD/Pro",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/HD-Pro.png",
            link: "",
            price: "499元起",
            info: ""
          },
          {
            name: "小米路由器 3G",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/3G.png",
            link: "",
            price: "249元",
            info: "新品",
            showStatus: true
          },
          {
            name: "小米路由器 3",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmlyq3.png",
            link: "",
            price: "149元起",
            info: "包邮",
            showStatus: true
          },
          {
            name: "小米路由器 3C",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/3C.png",
            link: "",
            price: "99元",
            info: "包邮",
            showStatus: true
          },
          {
            name: "小米WiFi电力猫",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/dlm.png",
            link: "",
            price: "249元",
            info: ""
          },
          {
            name: "小米WiFi放大器 2",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/fdq2.jpg",
            link: "",
            price: "49元",
            info: ""
          }
        ],
        mihardware: [
          {
            name: "小米体脂秤",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/tzc.jpg",
            link: "",
            price: "199元",
            info: ""
          },
          {
            name: "小米手环2",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/sh2.png",
            link: "",
            price: "149元",
            info: "包邮",
            showStatus: true
          },
          {
            name: "小米净水器",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/jsqcs.png",
            link: "",
            price: "1499元起",
            info: "新品",
            showStatus: true
          },
          {
            name: "小米VR眼镜 PLAY2",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmvrplay2.png",
            link: "",
            price: "99元",
            info: "新品",
            showStatus: true
          },
          {
            name: "米家IH电饭煲",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/dfb.jpg",
            link: "",
            price: "399元",
            info: ""
          },
          {
            name: "查看全部",
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/air2.jpg",
            link: "",
            price: "智能硬件",
            info: ""
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    searchInputFocus() {
      this.isInputFocus = true;
    },
    searchInputBlur() {
      this.isInputFocus = false;
    },
    enterNavItem(navItem) {
      if (navItem && navItem.type) {
        this.currentNavItem = navItem;
      } else {
        this.currentNavItem = false;
      }
      clearTimeout(this.timer);
    },
    leaveNavItem() {
      this.timer = setTimeout(() => {
        debugger;
        this.currentNavItem = false;
      }, 300);
    }
  },
  components: {
    "c-h": () => import(/* webpackChunkName: "c-container" */ "@c/H")
  }
};
</script>

<style lang="scss" scoped>
.site-header {
  width: 100%;
  > .container {
    width: 1226px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    > .wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      > .logo {
        width: 55px;
        height: 55px;
        background: url(../../../../assets/img/mi-logo.png) center center
          no-repeat #ff6700;
      }
      > .pic-gif {
        width: 163px;
        height: 55px;
        margin-left: 10px;
        background: url(../../../../assets/img/boom.gif) center center / contain
          no-repeat;
      }
      > .header-nav {
        position: relative;
        > .nav-wrap {
          display: flex;
          line-height: 100px;
          > .item {
            font-size: 16px;
            padding: 0 10px;
            a {
              color: #333;
            }
            &:hover a {
              color: #ff6700;
            }
          }
        }
      }
    }

    > .header-search {
      display: inline-block;
      position: relative;
      z-index: 0;
      height: 50px;
      outline: 1px solid #e0e0e0;
      width: 295px;
      right: 0;
      // transition: all 0.5s ease-in-out;

      &:hover {
        outline: 1px solid #e0e0e0;
        > .search-btn {
          border-left: 1px solid #e0e0e0;
        }
      }
      &.focus {
        outline: 1px solid #ff6700;
        > .search-btn {
          border-left: 1px solid #ff6700;
        }
        > .search-result {
          display: block;
        }
      }
      > .hot-wrap {
        position: absolute;
        z-index: 1;
        top: 17px;
        right: 60px;
        direction: rtl;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > .item {
          font-size: 12px;
          display: inline-block;
          padding: 0.1rem 0.2rem;
          margin: 0 0.2rem;
          color: #757575;
          background: #e0e0e0;
          top: 1px;
          &:hover {
            cursor: pointer;
            color: #fff;
            background: #ff6700;
          }
        }
      }

      > .search-input {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 51px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // background: #ff6700;
        > .search-ipt {
          display: inline-block;
          margin: 0 2px;
          width: 240px;
          height: 48px;
          border: 0;
          outline: none;
        }
      }

      > .search-btn {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        border-left: 1px solid #e0e0e0;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        > .iconfont {
          line-height: 50px;
          font-weight: 900;
          font-size: 1.2rem;
          color: #424242;
        }
        &:hover {
          background: #ff6700;
          > .iconfont {
            color: #fff;
          }
        }
      }

      > .search-result {
        display: none;
        position: absolute;
        left: -1px;
        top: 50px;
        width: 244px;
        height: auto;
        margin: 0;
        padding: 0;
        list-style: none;
        border: 1px solid #ff6700;
        z-index: 11;
        background: #fff;
        li {
          padding: 7px 13px;
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          cursor: pointer;
          &:hover {
            background: #eee;
          }
          .item-name {
            font-size: 12px;
          }
          .item-num {
            font-size: 10px;
            color: #b0b0b0;
          }
        }
      }
    }
  }

  .header-nav-menu {
    // outline: 1px solid rebeccapurple;
    position: relative;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 230px;
    background: #fff;
    outline: 1px solid #ccc;
    box-shadow: 0 1px 5px #ccc;
    .menus {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      li {
        position: relative;
        width: 180px;
        padding: 35px 12px 0;
        text-align: center;
        a {
          padding: 0 10px;
          border-right: 1px solid #ccc;
        }
        &:nth-last-child(1) {
          a {
            border-right: 0;
          }
        }
        > .info {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          font-size: 12px;
          text-align: center;
          .flag {
            display: inline-block;
            height: 18px;
            padding: 1px 20px;
            border: 1px solid #ff6700;
            color: #ff6700;
          }
        }
        > a {
          margin: 5px auto 16px;
          text-align: center;
          border-right: 1px solid #ccc;
          display: inline-block;
          > img {
            width: 160px;
            height: 110px;
          }
        }
        > .price {
          line-height: 20px;
          color: #ff6700;
        }
        > .name {
          line-height: 20px;
          color: #333;
        }
      }
    }
  }
}
</style>
