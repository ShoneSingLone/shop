<template>
  <main class="main">
    <bn-bar></bn-bar>
    <top-bar></top-bar>
    <site-header></site-header>
    <div class="banner-wrapper">
      <!-- <carousel></carousel> -->
      <category :menuList="menuList"></category>
    </div>
    <!--     <flash-purchase/>
    <site-footer></site-footer>
 -->
  </main>
</template>

<script>
export default {
  name: "index",
  metaInfo: {
    title: "首页", // set a title
    meta: [
      {
        // set meta
        name: "keyWords",
        content: "首页入口"
      }
    ]
  },
  mounted() {
    this.carousel.startAutoPlay();
  },
  methods: {
    goTo(item = "") {
      this.$router.push({
        name: "xxr",
        params: item
      });
    }
  },
  computed: {},
  components: {
    "bn-bar": () =>
      import(/* webpackChunkName: "BnBar" */ "./components/BnBar"),
    "site-header": () =>
      import(/* webpackChunkName: "SiteHeader" */ "./components/SiteHeader"),
    "top-bar": () =>
      import(/* webpackChunkName: "TopBar" */ "./components/TopBar"),
    "flash-purchase": () =>
      import(/* webpackChunkName: "FlashPurchase" */ "./components/FlashPurchase"),
    carousel: () =>
      import(/* webpackChunkName: "Carousel" */ "./components/Carousel"),
    category: () =>
      import(/* webpackChunkName: "category" */ "./components/Category"),
    "site-footer": () =>
      import(/* webpackChunkName: "Footer" */ "./components/Footer")
  },
  data() {
    return {
      isInSubMenu: false,
      menuCurrentItemIndex: undefined,
      carousel: (function(vm) {
        let slides = [
          { imgClass: "slide1" },
          { imgClass: "slide2" },
          { imgClass: "slide0" },
          { imgClass: "slide2" },
          { imgClass: "slide1" },
          { imgClass: "slide2" },
          { imgClass: "slide0" }
        ];
        function clickNext() {
          vm.carousel.currentSlide++;
          if (vm.carousel.currentSlide >= slides.length) {
            vm.carousel.currentSlide = 0;
          }
        }
        function clickPrev() {
          vm.carousel.currentSlide--;
          if (vm.carousel.currentSlide <= -1) {
            vm.carousel.currentSlide = slides.length - 1;
          }
        }

        function clickDots(index) {
          vm.carousel.currentSlide = index;
        }

        // 图片自动轮播
        let timer;
        // handle event
        function mouseover() {
          stopAutoPlay();
        }
        function mouseout() {
          startAutoPlay();
        }
        function startAutoPlay() {
          timer = setInterval(function() {
            clickNext();
          }, 1000 * 3);
        }
        // 清除定时器,停止自动播放
        function stopAutoPlay() {
          if (timer) {
            clearInterval(timer);
          }
        }
        return {
          currentSlide: 0,
          slides,
          clickPrev,
          clickNext,
          clickDots,
          mouseover,
          mouseout,
          startAutoPlay
        };
      })(this),
      menuList: [
        {
          title: "手机、配件",
          subRow: [
            ["手机", "手机维修", "以旧换新"],
            ["手机壳", "手机存储卡", "数据线", "充电器"],
            ["中国联通", "中国移动", "中国电信"],
            ["智能手环", "智能家居", "智能手表"],
            ["耳机", "音响", "收音机", "麦克风"]
          ]
        },
        {
          title: "电脑",
          subRow: [
            ["笔记本", "平板", "一体机"],
            ["显示器", "CPU", "主板", "硬盘"],
            ["游戏机", "耳机", "游戏软件"],
            ["路由器", "网络机顶盒", "交换机", "存储卡"],
            ["鼠标", "键盘", "U盘", "移动硬盘"]
          ]
        },
        {
          title: "家用电器",
          subRow: [
            ["电视：", "国产品牌", "韩国品牌", "欧美品牌"],
            ["空调：", "柜式", "中央", "壁挂式"],
            ["冰箱：", "多门", "对开门", "双门"],
            ["洗衣机：", "滚筒式洗衣机", "迷你洗衣机", "洗烘一体机"],
            ["厨房电器：", "油烟机", "洗碗机", "燃气灶"]
          ]
        },
        {
          title: "家具",
          subRow: [
            ["被子", "枕头", "四件套", "床垫"],
            ["台灯", "顶灯", "节能灯", "应急灯"],
            ["厨具：", "烹饪锅具", "餐具", "菜板刀具"],
            ["家装：", "地毯", "沙发垫套", "装饰字画"],
            ["生活日用：", "收纳用品", "浴室用品", "雨伞雨衣"]
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
// @import "../../assets/bootstrap/variables";

.test {
  height: 100%;
  outline: 1px solid rebeccapurple;
  overflow-y: scroll;
  .inner {
    height: 5500px;
    opacity: 0.5;
    background: linear-gradient(cyan, transparent),
      linear-gradient(225deg, magenta, transparent),
      linear-gradient(45deg, yellow, transparent);
  }
}
$height: 440px;
$listWidth: 240px;
$width: 1226px;

.main {
  height: 100%;
  overflow-y: scroll;
  > .banner-wrapper {
    position: relative;
    width: 1226px;
    margin: 0 auto 16px;
    height: 460px;
  }
  .container {
    position: relative;
    width: 1226px;
    margin: 0 auto;
    .carousel {
      .banner {
        //   outline: 1px solid #f01414;
        height: $height;
        // overflow: hidden;
        position: relative;

        .slide {
          position: absolute;
          width: 1200px;
          height: $height;
          background-repeat: no-repeat;
          background-size: 100%;
          float: left;
          opacity: 0;
          transition: all 2s 1s;

          &.active {
            opacity: 1;
            transition: all 1s;
          }

          &.slide1 {
            background-image: url(./img/bg1.jpg);
          }

          &.slide2 {
            background-image: url(./img/bg2.jpg);
          }

          &.slide0 {
            background-image: url(./img/bg3.jpg);
          }
        }
      }
      .button {
        position: absolute;
        top: 50%;
        left: $listWidth;
        height: 90px;
        width: 40px;
        margin-top: -40px;
        background: url(./img/arrow.png) center center no-repeat;

        &:hover {
          background-color: #333;
          opacity: 0.8;
          filter: alpha(opacity = 80);
        }

        &.prev {
          transform: rotate(180deg);
        }

        &.next {
          left: auto;
          right: 0;
        }
      }

      .dots {
        position: absolute;
        bottom: 1.90px;
        right: 0;
        text-align: right;
        padding-right: 1.90px;
        line-height: 12px;

        span {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-left: 8px;
          background-color: rgba(7, 17, 27, 0.4);
          cursor: pointer;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8) inset;

          &.active {
            box-shadow: 0 0 0 2px rgba(7, 17, 27, 0.4) inset;
            background-color: #ffffff;
          }
        }
      }
    }
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }
}
</style >