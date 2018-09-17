

  <template>
  <div class="login">
    <header>
      <a href="javascript:void(0)" class="logo" @click="goTo({route:{name:'p.h'}})"></a>
      <a href="javascript:void(0)" class="logo-text">Shop</a>
    </header>
    <main :style="`background: url('https://shonesinglone.leanapp.cn/imgs/login-background.jpg') center /auto ${bgWidth}% no-repeat fixed`">
      <section class="login-section">
        <div class="form-wrapper">
          <form>
            <div class="nav-tabs">
              <span class="account">账号登录</span>
              <span class="division vertical"></span>
              <span class="scan">扫描登录</span>
            </div>

            <div class="input-wrapper account">
              <label for="name" class="sr-only">name</label>
              <input type="email" id="name" class="form-control" placeholder="邮箱/手机号码/小米ID" required="" autofocus="" autocomplete="off">
            </div>
            <div class="input-wrapper pwd">
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="密码" required="" autocomplete="off">
            </div>
            <div class="input-wrapper submit">
              <a href="javascript:void(0)">登录</a>
            </div>
            <div class="other">
              <a href="javascript:void(0)" class="third-register">手机短信登录/注册</a>
              <div class="side">
                <a href="javascript:void(0)" class="register">立即注册</a>
                <span class="division vertical">|</span>
                <a href="javascript:void(0)" class="forget-pwd">忘记密码</a>
              </div>
            </div>
          </form>
          <div class="third-login">
            <div class="tips">
              <span class="division horizontal"></span>
              <span>其他方式登录</span>
              <span class="division horizontal"></span>
            </div>
            <div class="third-icon">
              <a href="javascript:void(0)" class="github"></a>
            </div>
          </div>

        </div>
      </section>
    </main>
    <site-footer></site-footer>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "login",
  mounted() {
    console.log("localStorage.clear();");
    localStorage.setItem("shop.test", Date.now());
    // window.close();
    //某些需要在mounted之后完成的初始化
    this.$el.addEventListener("scroll", event => {
      let { scrollHeight, scrollTop, clientHeight } = event.target;
      this.bgWidth = Math.ceil(
        100 * (scrollTop / (scrollHeight - clientHeight + 1) + 0.5)
      );
      console.log(this.bgWidth);
    });
    this.$emit("mounted", this.$el);
  },
  beforeRouteEnter: (to, from, next) => {
    console.warn("beforeRouteEnter Login");
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
    return { bgWidth: 50 };
  },
  computed: {},
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
    }
  },
  components: {
    "site-footer": () => import(/* webpackChunkName: "Footer" */ "@c/PC/Footer")
  }
};
</script>

<style lang="scss" scoped>
@import "../../components/style/variables";

.login {
  overflow-y: scroll;
  height: 100%;

  > header {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background: url("https://shonesinglone.leanapp.cn/imgs/mi-logo.png")
        center center/55px no-repeat #ff6700;
      &-text {
        margin-left: 10px;
        line-height: 100px;
        font-size: 30px;
        vertical-align: middle;
      }
    }
  }
  > main {
    width: 100%;

    > .login-section {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      > .form-wrapper {
        // outline: 1px solid rebeccapurple;
        display: flex;
        height: 540px;
        margin-top: 30px;
        margin-bottom: 30px;
        flex-flow: column nowrap;
        background: #fff;
        @include elevation2();

        > form {
          flex: 1;

          > .nav-tabs {
            display: flex;
            width: 410px;
            text-align: center;
            justify-content: center;
            align-items: center;

            > span {
              display: inline-block;
              line-height: 83px;
              font-size: 24px;

              &.account {
                flex: 1;
                color: #f56600;
              }
              &.division.vertical {
                width: 1px;
                height: 24px;
                border: 1px solid #e0e0e0;
                text-align: center;
                font-size: 24px;
                color: #e0e0e0;
              }
              &.scan {
                color: #666;
                flex: 1;
              }
            }
          }
          > .input-wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            margin: 0 30px 10px;
            position: relative;
            > input {
              display: inline-block;
              position: absolute;
              width: 100%;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: 0 5px;
              outline: 0;
              border: 0;
              &:focus {
                outline: 0;
              }
            }
            &.account {
              display: block;
              > input {
              }
            }
            &.pwd {
              > input {
              }
            }
            &.submit {
              border: unset;
              margin: 20px 30px 0;
              text-align: center;
              position: relative;

              > a {
                display: inline-block;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                line-height: 50px;
                color: #fff;
                background-color: #f56600;
                // transition: all 0.5s ease-in-out;
                @include elevation2();

                &:hover {
                  background-color: darken(#f56600, 0.9);
                  @include elevation4();
                }
                &:active {
                  background-color: darken(#f56600, 0.9);
                  @include elevation2();
                }
              }
            }
          }
          > .other {
            display: flex;
            justify-content: space-between;
            margin: 10px 30px;
            font-size: 14px;

            > .third-register {
              color: darken(#ff6700, 0.9);
              &:hover {
                color: #ff6700;
              }
            }
            > .side {
              > .register {
                color: rgb(153, 153, 153);
                &:hover {
                  color: #ff6700;
                }
              }
              > .division {
                &.vertical {
                  color: rgb(153, 153, 153);
                }
              }
              > .forget-pwd {
                color: rgb(153, 153, 153);
                &:hover {
                  color: #ff6700;
                }
              }
            }
          }
        }
        > .third-login {
          flex-basis: 120px;
          margin: 10px 30px;

          > .tips {
            display: flex;
            justify-content: center;
            > .division.horizontal {
              position: relative;
              transform: translateY(7px);
              flex: 1;
              border-top: 1px solid rgb(153, 153, 153);
              line-height: 14px;
              font-size: 14px;
              margin: 0 5px;
            }
            > span {
              color: rgb(153, 153, 153);
            }
          }
          > .third-icon {
            text-align: center;
            padding-top: 10px;

            > .github {
              display: inline-block;
              height: 25px;
              width: 25px;
              background: url("https://shonesinglone.leanapp.cn/imgs/github.svg")
                center/cover;
              border-radius: 50%;
              @include elevation2();
              &:hover {
                @include elevation4();
              }
            }
          }
        }
      }
    }
  }
}
</style>



