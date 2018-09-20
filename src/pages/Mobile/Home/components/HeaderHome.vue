<template>
  <div class="home">
    <a class="logo" href="javascript:void(0);" @click="goTo({name:'m.h'})">
    </a>
    <div class="search-box">
      <i class="iconfont icon-search"></i>搜索商品名称
    </div>
    <a class="user iconfont icon-me">
    </a>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "headerHome",
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 3rem;
.home {
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
