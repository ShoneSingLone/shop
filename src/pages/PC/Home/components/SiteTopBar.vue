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
      <div class="topbar-stamp"></div>
      <!-- info -->
      <div class="topbar-wrapper">
        <ul class="topbar-info login" v-if="userInfo">
          <li class="userinfo-wrapper">
            <span class="avatar" :style="`background:url('${userInfo.avatar}') center center /cover no-repeat;`"></span>
            <a class="user-name" rel="nofollow" href="javascript:void(0)">{{userInfo.name}}
              <i class="arrow iconfont icon-right"></i>
            </a>
          </li>
          <li class="userinfo-menu">
            <a href="javascript:void(0)" @click="logout">退出登录</a>
          </li>
        </ul>
        <ul class="topbar-info guest" v-else>
          <li v-for="(info, index) in infoItems" :key="index">
            <span class="message">
              <a rel="nofollow" href="javascript:void(0)" @click="goTo({route:info.route})">{{info.name}}
                <i class=""></i>
              </a>
            </span>
            <span class="sep">|</span>
          </li>
        </ul>
      </div>
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
import { mapGetters, mapMutations } from "vuex";

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
    ...mapMutations(["logout"]),
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
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../components/style/variables";

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
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
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
    > .topbar-stamp {
      margin: 0 auto;
    }
    > .topbar-wrapper {
      position: relative;
      height: 40px;
      z-index: 1;

      > .topbar-info {
        display: flex;
        &.guest {
          height: 40px;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        }

        &.login {
          flex-flow: column nowrap;
          > .userinfo-wrapper {
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;

            > .avatar {
              display: inline-block;
              width: 30px;
              height: 30px;
              margin-right: 5px;
              background-clip: content-box;
              border-radius: 50%;
            }
            > .user-name {
              > .arrow {
                display: inline-block;
                font-size: 16px;
                font-weight: 900;
                transition: all 0.5s;
              }
            }
            ~ .userinfo-menu {
              display: none;
              text-align: center;
              > a {
                line-height: 40px;
                margin: 0 5px;
                display: block;
                // width: 100%;
                position: relative;
              }
            }
          }
        }
      }
      &:hover {
        > .topbar-info {
          &.login {
            background: #fff;
            @include elevation2();
            .userinfo-wrapper {
              .avatar {
                @include elevation2();
              }
              .user-name {
                color: #ff6700;
                .arrow {
                  transform: rotate(810deg);
                }
              }
              ~ .userinfo-menu {
                display: block;
                &:hover {
                  background-color: #f5f5f5;
                  > a {
                    color: #ff6700;
                  }
                }
              }
            }
          }
        }
      }
    }
    > .topbar-cart {
      width: 120px;
      height: 40px;
      // margin-left: 16px;
      position: relative;
      text-align: center;
      color: #b0b0b0;
      background: #424242;

      .cart-mini {
        position: relative;
        line-height: 40px;
        vertical-align: middle;
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