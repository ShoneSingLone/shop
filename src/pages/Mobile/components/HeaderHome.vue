<template>
    <transition :name="transitionName">
        <div class="home">
            <div class="logo">
            </div>
            <div class="search-box">
                <i class="iconfont icon-search"></i>搜索商品名称
            </div>
            <a class="user iconfont icon-me">
            </a>
        </div>
    </transition>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "headerHome",
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
    return { transitionName: "" };
  },
  computed: {},
  methods: {},
  components: {
    "c-h": () => import(/* webpackChunkName: "c-container" */ "@c/H")
  }
};
</script>

<style lang="scss" scoped>
* {
  //   outline: 1px solid rebeccapurple;
}
$height: 3rem;
.home {
  // @include elevation2();
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  color: #666;
  > .logo {
    display: inline-block;
    width: $height;
    height: $height;
    margin: 0 1rem;
    background: url("https://shonesinglone.leanapp.cn/imgs/mi-logo-text.png")
      center center/60% auto no-repeat;
  }
  > .search-box {
    flex: 1;
    border-radius: 0.2rem;
    border: 1px solid #f2f2f2;
    color: rgb(163, 158, 158);
    background-color: #fff;
    line-height: 2.2rem;

    > .iconfont {
      line-height: 2.2rem;
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
  > .user {
    display: inline-block;
    font-size: 1.5rem;
    margin: 0 1rem;
    width: $height;
    line-height: $height;
    text-align: center;
  }
}
</style>
