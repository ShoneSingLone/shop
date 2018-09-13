<template>
  <div class="flashPurchase-warpper">
    <div class="box-hd">
      <h2 class="title ">闪购</h2>
      <div class="more ">
        <div class="control-group">
          <a :class="['control','prev',{disable:currentPage===1}]" @click="changePage(-1)" href="javascript: void(0);">
            <span class="iconfont icon-left"></span>
          </a>
          <a :class="['control','next',{disable:currentPage===total}]" @click="changePage(1)" href="javascript: void(0);">
            <span class="iconfont icon-right"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="box-body">
      <flashPurchase-countdown/>
      <flashPurchase-carousel :currentPage="currentPage" @changePage="changePage" @changeTotal="changeTotal"></flashPurchase-carousel>
    </div>
  </div>

</template>

<script>
import countdown from "./FlashPurchaseCountdown";
import carousel from "./FlashPurchaseCarousel";

export default {
  name: "flashuPrchase",
  methods: {
    changeTotal(total) {
      this.total = total;
    },
    changePage(count) {
      count = this.currentPage + count;
      if (count < 1 || count > this.total) return;
      this.currentPage = count;
    }
  },
  computed: {},
  data() {
    return {
      currentPage: 1,
      total: 1
    };
  },
  components: {
    "flashPurchase-countdown": countdown,
    "flashPurchase-carousel": carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../base";
@import "../../../../components/style/variables";

$width: 1226px;
$height: 340px;
.flashPurchase-warpper {
  margin: 15px auto 60px;
  width: $width;
  height: $height;
  overflow: visible;

  > .box-hd {
    // outline: 2px solid rebeccapurple;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      margin: 0 32px;
      font-weight: 200;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
    .more {
      .control-group {
        a {
          border: 2px solid #f0f0ff;
          color: #212121;
          text-decoration: none;
          width: 24px;
          height: 16px;
          padding: 3px 5px;
          border: 1px solid #e0e0e0;
          font-size: 16px;
          font-weight: 900;
          line-height: 16px;

          &:hover {
            color: $main-theme-color;
          }
          &:first-child {
            border-radius: 4px 0 0 4px;
            border-right: unset;
          }
          &:last-child {
            border-radius: 0 4px 4px 0;
          }
          &.disable {
            color: #f0f0ff;
            cursor: not-allowed;
          }
        }
      }
    }
  }
  > .box-body {
    height: $height;
    position: relative;
  }
}
</style>