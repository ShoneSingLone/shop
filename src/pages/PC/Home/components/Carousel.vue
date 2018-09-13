<template>
  <div class="carousel">
    <div class="banner" id="banner" v-on:mouseover="carousel.mouseover" v-on:mouseout="carousel.mouseout">
      <a href="javascript:void(0);" v-for="(slideItem, index) in carousel.slides" :key="index" @click="goTo">
        <div :class="['slide',{'active':(carousel.currentSlide===index)}]" :style="{'background-image':`url(${slideItem.imgUrl})`}"></div>
      </a>
    </div>
    <a href="javascript:void(0)" class="button prev iconfont icon-left" id="prev" @click="carousel.clickPrev"></a>
    <a href="javascript:void(0)" class="button next iconfont icon-right" id="next" @click="carousel.clickNext"></a>
    <div class="dots" id="dots">
      <span :class="{active:carousel.currentSlide === index}" v-for="(dotItem, index) in carousel.slides" :key="index" @click="carousel.clickDots(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  mounted() {
    this.carousel.startAutoPlay();
  },
  data() {
    return {
      carousel: (function(vm) {
        let slides = [
          {
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad1.jpg"
          },
          {
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad2.jpg"
          },
          {
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad3.jpg"
          },
          {
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad4.jpg"
          },
          {
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad5.jpg"
          },
          {
            imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad6.jpg"
          }
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
        // handle event
        function mouseover() {
          stopAutoPlay();
        }
        function mouseout() {
          startAutoPlay();
        }
        function startAutoPlay() {
          startAutoPlay.timer = setInterval(function() {
            clickNext();
          }, 1000 * 3);
        }
        // 清除定时器,停止自动播放
        function stopAutoPlay() {
          if (startAutoPlay.timer) {
            clearInterval(startAutoPlay.timer);
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
      })(this)
    };
  },
  methods: {
    goTo(item = "") {
      console.log(item);
      // this.$router.push({ name: "product", params: item });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../../../../components/style/variables";

$height: 460px;
$listWidth: 240px;
$width: 1226px;

.carousel {
  .banner {
    height: $height;
    position: relative;

    .slide {
      position: absolute;
      width: $width;
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
    }
  }
  .button {
    // outline: 1px solid rebeccapurple;
    position: absolute;
    top: 50%;
    left: $listWidth;
    height: 90px;
    width: 40px;
    margin-top: -40px;
    font-size: 70px;
    color: #fff;

    &:hover {
      background-color: #333;
      opacity: 0.8;
      filter: alpha(opacity = 80);
    }

    &.prev::before,
    &.next::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &.next {
      left: auto;
      right: 0;
    }
  }

  .dots {
    position: absolute;
    bottom: 10px;
    right: 0;
    text-align: right;
    padding-right: 10px;

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
</style>