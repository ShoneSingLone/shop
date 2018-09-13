<template>
  <div class="flashPurchase-carousel-wrapper" ref="flashPurchase-carousel-wrapper">
    <ul class="flashPurchase-list" v-bind:style="listStyle" @click="goTo">
      <li class="item " :style="itemStyle" v-for="(flashPurchase, index) in flashPurchaseList " :key="index ">
        <div @click="goTo" :class="['content',`rainbow-${flashPurchase.rainbow}`]">
          <div class="bg">
          </div>
          <a class="thumb exposure" :style="{'background':`url(${flashPurchase.imgUrl}) center center/cover`}"> </a>
          <h3 class="title ">
            {{flashPurchase.name}}
          </h3>
          <p class="desc">{{flashPurchase.desc}}</p>
          <p class="price ">
            <span class="value ">{{flashPurchase.price}}</span>&nbsp;
            <span class="unit ">元</span>&nbsp;
            <span class="del ">{{flashPurchase.del}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
function getReac(ele) {
  return {
    top: ele.getBoundingClientRect().top,
    bottom: ele.getBoundingClientRect().bottom,
    left: ele.getBoundingClientRect().left,
    right: ele.getBoundingClientRect().right,
    height: ele.getBoundingClientRect().height
  };
}
export default {
  name: "flashPurchaseCarousel", // 闪购轮播图
  mounted() {
    this.wrapperRect = getReac(this.$refs["flashPurchase-carousel-wrapper"]);
    this.wrapperWidth = Math.floor(
      this.wrapperRect.right - this.wrapperRect.left
    );
    this.itemWidth = Math.floor(this.wrapperWidth / 4);
    this.listWidth = this.itemWidth * this.flashPurchaseList.length;
    this.$emit(
      "changeTotal",
      (this.total = Math.ceil(this.flashPurchaseList.length / 4))
    );
    this.itemStyle = { width: this.itemWidth + "px" };
    this.listStyle = { width: this.listWidth + "px" };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  },
  methods: {
    goTo() {
      this.$router.push({ name: "p.p" });
    }
  },
  watch: {
    currentPage(currentPage, oldV) {
      console.log(currentPage, oldV);
      let translateX;

      if (currentPage === this.total) {
        translateX = this.listWidth - this.wrapperWidth;
      } else {
        translateX = (currentPage - 1) * this.wrapperWidth;
      }
      translateX = translateX === 0 ? 0 : `-${translateX}px`;
      this.listStyle = Object.assign({}, this.listStyle, {
        transform: `translateX(${translateX})`
      });
    }
  },
  data() {
    return {
      wrapperRect: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 0
      },
      total: 1,
      wrapperWidth: 0,
      itemWidth: 0,
      listWidth: 0,
      itemStyle: "",
      listStyle: "",
      flashPurchaseList: [
        {
          rainbow: "orange",
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm5s-64g.png",
          name: "小米5s 64GB",
          price: "1999元",
          desc: "“暗夜之眼”超感光相机"
        },
        {
          rainbow: "blue",
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm5sp.png",
          name: "小米5s Plus",
          price: "2299元起",
          desc: '5.7" 大屏双摄像头，轻薄金属机身'
        },
        {
          rainbow: "red",
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmmix.png",
          name: "小米MIX",
          price: "3499元起",
          desc: '6.4" 全面屏，全陶瓷机身'
        },
        {
          rainbow: "green",
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_49.png",
          name: "小米电视4A 49英寸 标准版",
          price: "2299元",
          desc: "直降300元，全高清HDR "
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmbjb.png",
          name: "小米笔记本",
          price: "3599元起",
          desc: "更轻更薄，像杂志一样随身携带"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmyddy.png",
          name: "10000mAh小米移动电源2",
          price: "79元",
          desc: "双向快充，高密度锂聚合物电芯"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmsh.png",
          name: "小米手环 2",
          price: "149元",
          desc: "OLED 显示屏幕，升级计步算法"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmdfb.jpg",
          name: "米家压力IH电饭煲",
          price: "999元",
          desc: "智能烹饪，压力IH加热技术"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/mjjhq.png",
          name: "米家空气净化器Pro",
          price: "1499元",
          desc: "OLED显示屏幕，激光颗粒物传感器"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmwf.png",
          name: "小米路由器3",
          price: "149元",
          desc: "更快更强，不止四天线"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
@import "../../../../components/style/variables";

.flashPurchase-carousel-wrapper {
  // outline: 16px solid red;
  position: absolute;
  top: 0;
  left: 246px;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .flashPurchase-list {
    // outline: 16px solid red;
    height: 99%;
    transition: all 0.5s ease-in-out;

    .item {
      transition: width 1.5s ease-in;
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      height: 100%;
      padding: 2px 0 0 1.9px;
      background-clip: content-box;
      transition: all 1s;

      a {
        color: #212121;
        text-decoration: none;
      }

      .rainbow {
        &-orange {
          border-top: 1px solid;
          border-top-color: #ffac13;
        }
        &-green {
          border-top: 1px solid;
          border-top-color: #83c44e;
        }
        &-blue {
          border-top: 1px solid;
          border-top-color: #2196f3;
        }
        &-red {
          border-top: 1px solid;
          border-top-color: #e53935;
        }
      }

      .content {
        // outline: 1px solid rebeccapurple;
        margin: 1px 5px 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        .bg {
          // outline: 1px solid rebeccapurple;
          background: rgba(0, 0, 0, 0.01);
          padding: 2px 0 2px 1.9px;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          cursor: pointer;
        }

        .thumb {
          color: #757575;
          text-decoration: none;
          width: 160px;
          height: 160px;
        }
        .title {
          margin: 2px 0 4px;
          font-size: 16px;
          width: 100%;
          text-align: center;
          font-weight: 400;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .desc {
          text-align: center;
          height: 18px;
          margin: 0 20px 12px;
          width: 100%;
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #b0b0b0;
        }
        .price {
          .value,
          .unit {
            color: #ff6709;
          }
          .del {
            color: #757575;
            text-decoration: line-through;
          }
        }
        @include elevation4();
      }
    }
  }
}
</style>

