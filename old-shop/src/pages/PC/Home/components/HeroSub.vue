<template>
  <div class="hero-sub">
    <div class="channel-wrapper">
      <ul class="channel-list">
        <li class="channel" v-for="(channel, index) in channelList" :key="index">
          <a @click="goTo" href="javascript:void(0)">
            <span :class="['iconfont',`icon-${channel.icon}`]"></span>
            <span class="name">{{channel.name}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="promo-wrapper">
      <ul class="promo-list">
        <li @click="goTo" class="promo" :style="{'background':`url(${promo.imgUrl}) center center/cover no-repeat`}" v-for="(promo, index) in promoList" :key="index">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "heroSub",
  data() {
    return {
      channelList: [
        {
          name: "选购手机",
          icon: "service"
        },
        {
          name: "企业团购",
          icon: "liwu"
        },
        {
          name: "一元活动",
          icon: "15tianwuliyoutuihuo"
        },
        {
          name: "小米移动",
          icon: "liuliangqia"
        },
        {
          name: "以旧换新",
          icon: "old-new"
        },
        {
          name: "话费充值",
          icon: "huafei"
        }
      ],
      promoList: [
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad-hm4x.jpg"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad-xm5c.jpg"
        },
        {
          imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmad-xmyp.jpg"
        }
      ]
    };
  },
  methods: {
    goTo() {
      this.$router.push({ name: "p.p" });
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 170px;
$listWidth: 240px;
$width: 1226px;

.hero-sub {
  width: $width;
  height: $height;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  > .channel-wrapper {
    background-color: #5f5750;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    width: $listWidth;
    justify-content: center;
    align-content: stretch;

    > .channel-list {
      width: $listWidth;
      display: flex;
      flex-flow: row wrap;
      > .channel {
        flex: 1 0 76px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        > a {
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-content: center;
          > .iconfont {
            position: relative;
            margin-bottom: 10px;
            font-size: 24px;
            left: 50%;
            transform: translateX(-50%);
          }
          > .name {
            font-size: 10px;
          }
        }
        &:hover {
          > a {
            color: #fff;
          }
        }
      }
    }
  }
  > .promo-wrapper {
    flex: 1 1 auto;
    > .promo-list {
      display: flex;
      justify-content: flex-end;
      > .promo {
        display: inline-block;
        width: 316px;
        margin-left: 15px;
        height: $height;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
