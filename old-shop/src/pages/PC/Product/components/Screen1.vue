<template>
  <section class="screen-1" :style="{height:`${height}px`}">
    <div class="heading-wrapper">
      <div :class="['heading',headingDone?'':'init']">
        <p>
          <b>AI双摄</b>小屏高性能</p>
        <p class="webfont">后置1200万 AI双摄 / 12nm八核处理器 / 5.45”高清全面屏 / AI 人脸解锁</p>
      </div>
    </div>
    <div class="phone-wrapper">
      <div :class="['phone',phoneDone?'':'init']"></div>
      <div :class="['shadow',shadowDone?'':'init']"></div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "section1",
  mounted() {
    this.toggleAnimate();
    this.isAnimateDone = true;
    this.$emit("mounted", { name: "screen1", el: this.$el });
  },
  methods: {
    toggleAnimate() {
      this.toggleHeading();
      this.togglePhone();
      this.toggleShadow();
    },
    toggleHeading() {
      this.headingDone = !this.headingDone;
    },
    togglePhone() {
      this.phoneDone = !this.phoneDone;
    },
    toggleShadow() {
      this.shadowDone = !this.shadowDone;
    }
  },
  computed: {
    ...mapState("pc.product", ["scrollY"])
  },
  watch: {
    scrollY: function(newV, oldV) {
      console.log(newV, oldV);
      console.log(
        "this.$el.getBoundingClientRect() screen1",
        this.$el.getBoundingClientRect()
      );
    }
  },
  components: {},
  props: {
    height: { type: Number, default: 800 },
    inViewport: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isAnimateDone: false,
      phoneDone: false,
      shadowDone: false,
      headingDone: false
    };
  }
};
</script>

<style lang='scss' scoped>
@import "../base";

.screen-1 {
  // outline: 1px solid rebeccapurple;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  color: rgb(0, 0, 0);
  text-align: center;
  background: linear-gradient(135deg, white 10%, rgb(236, 236, 236) 50%);
  position: relative;
  overflow: hidden;

  .heading-wrapper {
    position: relative;

    @include width();

    margin: 6rem auto 0;
    height: 12rem;

    .heading {
      margin-top: 5rem;
      width: 100%;
      font-size: 2.5rem;
      opacity: 1;

      transition: all 1.5s ease-in-out;
      &.init {
        transform: translate(0, 100%);
        opacity: 0;
      }

      p {
        margin-bottom: 1rem;
        b {
          color: $main-theme-color;
        }
        &.webfont {
          @include text-shadow();
          font-size: 1rem;
        }
      }
    }
  }

  .phone-wrapper {
    flex: 1;
    position: relative;
    @include width();
    margin: 0 auto;

    height: 100%;

    .phone {
      // outline: 1px solid rebeccapurple;
      position: absolute;
      top: 0;
      width: 100%;
      height: 20rem;
      background: url(https://shonesinglone.leanapp.cn/imgs/screen-1-phone.png)
        center center/70% auto no-repeat;
      z-index: 1;
      transform: translate(0, 20%);

      transition: all 1s ease-in-out 0.5s;
      &.init {
        opacity: 0;
        transform: translate(0, -100%);
      }
    }
    .shadow {
      // outline: 1px solid greenyellow;
      position: absolute;
      top: 8rem;
      width: 100%;
      height: 20rem;
      background: url(https://shonesinglone.leanapp.cn/imgs/screen-1-shadow.png)
        center center/contain no-repeat;
      transition: all 1s ease-in-out 0.5s;
      opacity: 1;
      &.init {
        opacity: 0;
        transform: translate(0, 100%);
      }
    }
  }
}
</style >