<template>
  <div class="site-topbar">
    <div class="container">
      <!-- nav -->
      <ul class="topbar-nav">
        <li v-for="(nav, index) in navItems" :key="index">
          <a rel="nofollow" href="javascript:void(0)" @click="goTo({nav,index})">{{nav.name}}</a>
          <span class="sep">|</span>
          <!-- <span class="sep" v-if="index!==navItems.length-1">|</span> -->
        </li>
      </ul>
      <!-- nav end-->
      <!-- info -->
      <ul class="topbar-info">
        <li v-for="(info, index) in infoItems" :key="index">
          <span class="message">
            <a rel="nofollow" href="javascript:void(0)" @click="goTo({route:info.route})">{{info.name}}
              <i class=""></i>
            </a>
          </span>
          <span class="sep">|</span>
        </li>
      </ul>
      <!-- info end-->

      <!-- car -->
      <div class="topbar-cart">
        <a rel="nofollow" class="cart-mini" href="javascript:void(0)">
          <i class="iconfont icon-cart"></i>购物车(0)
        </a>
        <div class="cart-menu">
          <div class="loading">
            <div class="loader">购物车中还没有商品，赶紧选购吧！</div>
          </div>
        </div>
      </div>
      <!-- car end-->
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "topBar",
  data() {
    return {
      navItems: [
        { name: "小米商城", url: "product" },
        { name: "MIUI", url: "product" },
        { name: "IoT", url: "product" },
        { name: "云服务", url: "product" },
        { name: "金融", url: "product" },
        { name: "小爱开放平台", url: "product" },
        { name: "有品", url: "product" },
        { name: "政企服务", url: "product" },
        { name: "Select Region" }
      ],
      infoItems: [{ name: "登录", route: { name: "login" } }, { name: "注册" }],
      cartStatus: false
    };
  },
  methods: {
    goTo({ nav, route, index, href }) {
      console.log(nav, route, index, href);
      if (href) {
        let origin = new URL(location.href);
        origin.hash = `#${href}`;
        window.open(origin);
      } else {
        this.$router.push(route);
      }
    },
    isEnter: function() {
      this.cartStatus = true;
    },
    isLeave: function() {
      this.cartStatus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.site-topbar {
  width: 100%;
  height: 40px;
  // overflow: visiable;
  position: relative;
  font-size: 12px;
  color: #5c3a3a;
  background: #333;
  z-index: 1;

  > .container {
    width: 1226px;
    line-height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    > ul {
      display: flex;
      overflow: hidden;
      li {
        a {
          color: #b0b0b0;
          &:hover {
            color: #fff;
          }
        }
        > span.sep {
          margin: 0 0.5em;
          color: #424242;
        }
        &:last-child span.sep {
          display: none;
        }
      }
    }
    > .topbar-info {
      margin-left: auto;
    }
    > .topbar-cart {
      width: 120px;
      height: 40px;
      margin-left: 16px;
      position: relative;
      text-align: center;
      color: #b0b0b0;
      background: #424242;

      .cart-mini {
        position: relative;
        color: #b0b0b0;

        + .cart-menu {
          position: absolute;
          right: 0;
          top: 40px;
          font-size: 12px;
          text-align: center;
          width: 316px;
          line-height: 96px;
          color: #424242;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          transform: scaleY(0);
          transform-origin: left top;
          transition: all 0.5s;
        }
      }

      &:hover {
        background: #fff;
        .cart-mini {
          color: #ff6700;
          + .cart-menu {
            transform: scaleY(1);
          }
        }
      }
    }
  }
}
</style>