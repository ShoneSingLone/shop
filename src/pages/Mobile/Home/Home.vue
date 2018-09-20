<template>
  <transition>
    <div class="mobile-home">
      <transition name="fade">
        <div v-show="isShowAdvertisement" class="advertisement" :style="`background: url('https://shonesinglone.leanapp.cn/imgs/login-background.jpg') center /cover no-repeat fixed #f2f2f2`">
          <h1>这是一个硬广告</h1>
        </div>
      </transition>
      <header ref="header">
        <header-home> </header-home>
        <div class="nav-wrapper" :style="navWrapperStyle">
          <div class="nav-tabs-wrapper" :style="navTabsStyle">
            <c-scroll ref="scrollNav" direction="horizontal">
              <c-tab-bar class="nav-tabs" v-model="selectedLabel" showSlider>
                <c-tab class="nav-item" v-for="(item, index) in tabs" :label="item.title" :key="index">
                  <span class="title">{{item.title}}</span>
                </c-tab>
              </c-tab-bar>
            </c-scroll>
          </div>
          <div class="nav-display" ref="dispaly" @click="changeCurrentCategory">
            <i class="iconfont icon-right"></i>
          </div>
        </div>
      </header>

      <c-tab-panels v-model="selectedLabel">
        <c-tab-panel v-for="(tab, index) in tabs" :label="tab.title" :key="index">
          <ul class="content-wrapper" :style="contentWrapperStyle">
            <c-scroll ref="scrollContent">
              <li class="content">
                <transition name="fade">
                  <div class="exposure-wrapper" v-show="tab.title===selectedLabel" :style="{width:`${appWidth}px`}">
                    <div class="exposure" v-for="(item, subIndex) in tab.list" :key="subIndex">
                      <!-- <img :src="item.imgUrl" alt=""> -->
                      <div class="img" :style="{background:`url('${item.imgUrl}') center center/ auto 100% no-repeat`}"></div>
                      <div class="tag"></div>
                      <div class="info">
                        <p class="name">{{ item.name }}</p>
                        <p class="des">文字介绍</p>
                        <p class="price">
                          <span class="small">￥</span> 998
                        </p>
                      </div>
                    </div>
                  </div>
                </transition>
              </li>
            </c-scroll>
          </ul>
        </c-tab-panel>
      </c-tab-panels>

    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "mobileHome",
  mounted() {
    this.setThemeColor("#132d84");
    //某些需要在mounted之后完成的初始化
    setTimeout(() => {
      // 固定高宽都是为了scroll
      this.contentWrapperStyle.height =
        this.appHeight -
        this.$refs.header.offsetHeight -
        this.footerHeight +
        "px";
      this.navWrapperStyle.width = this.appWidth + "px";
      this.navTabsStyle.width =
        this.appWidth - this.$refs.dispaly.offsetWidth + "px";
      this.setThemeColor("#f2f2f2");
      this.isShowAdvertisement = false;
      //DOM渲染完成后才是scroll初始化的有效时机
      // 用广告代替
      //总之，再refresh一次，第一屏是肯定没问题的
      setTimeout(() => {
        this.$refs.scrollContent[0].refresh();
      }, 300);
    }, 1000 * 2);
    console.log("mounted");
  },
  props: {},
  data() {
    return {
      isShowAdvertisement: true,
      contentWrapperStyle: {
        height: "0"
      },
      navWrapperStyle: {
        width: "0"
      },
      navTabsStyle: {
        width: "0"
      },
      selectedLabel: "手机 电话卡",
      tabs: [
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm6.png",
              name: "小米6"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/max2.png",
              name: "小米Max2"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mi5c.png",
              name: "小米5C"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiaomiNOTE2.jpg",
              name: "小米Note 2"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/MIX.jpg",
              name: "小米MIX"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm5s.jpg",
              name: "小米5s"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/5splus.jpg",
              name: "小米5s Plus"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hmn4x.jpg",
              name: "红米Note 4X"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4x.jpg",
              name: "红米4X"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4.jpg",
              name: "红米4"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4a.png",
              name: "红米4A"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/compare.jpg",
              name: "对比手机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mimobile.jpg",
              name: "小米移动 电话卡"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/4g+.jpg",
              name: "移动4G+专区"
            }
          ],
          title: "手机 电话卡"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/bijiben12.5.jpg",
              name: "笔记本12.5英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/bijiben13.3.jpg",
              name: "笔记本13.3英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mipad3.png",
              name: "小米平板3"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/usbc-dyspq.jpg",
              name: "USB-C电源适配器"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/usbc-zjq.jpg",
              name: "USB-C转接器"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/neidanbao.jpg",
              name: "小米笔记本内胆包"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/ymjp.jpg",
              name: "悦米机械键盘"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/shubiao.jpg",
              name: "小米便携鼠标"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/wxsb.png",
              name: "小米无线鼠标"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmsbd.jpg",
              name: "鼠标垫"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/USBC.jpg",
              name: "DisplayPort转接器"
            }
          ],
          title: "笔记本 平板"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_49.png",
              name: "小米电视4 49英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_55.png",
              name: "小米电视4 55英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_65.png",
              name: "小米电视4 65英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_43.png",
              name: "小米电视4A 43英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_49.png",
              name: "小米电视4A 49英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_55.jpg",
              name: "小米电视4A 55英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_65.jpg",
              name: "小米电视4A 65英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s48.jpg",
              name: "小米电视3s 48英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s55.png",
              name: "小米电视3s 55英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s60.png",
              name: "小米电视3s 60英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s65.png",
              name: "小米电视3s 65英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3sqm65.jpg",
              name: "小米电视3s 65英寸 曲面"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s70.png",
              name: "小米电视3 70英寸"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mihezi3s.png",
              name: "小米盒子3s"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mihezi3c.png",
              name: "小米盒子3c"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hezi3s.jpg",
              name: "小米盒子3 增强版"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jtyx.jpg",
              name: "家庭音响"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/azfw.png",
              name: "安装服务"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/dianshipeijian.jpg",
              name: "电视盒子配件"
            }
          ],
          title: "电视 盒子"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/phcplus.jpg",
              name: "九号平衡车"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jiqiren.jpg",
              name: "米家扫地机器人及配件"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/VRPLAY3.png",
              name: "小米VR眼镜"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/luyouqi.jpg",
              name: "小米路由器"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zxc.jpg",
              name: "电助力折叠自行车"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/shuihu.jpg",
              name: "米家恒温电水壶"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/czjhq.jpg",
              name: "米家车载空气净化器"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/dianhuashoubiao.jpg",
              name: "手表"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/dianfanbao.jpg",
              name: "米家智能电饭煲"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiaobai.jpg",
              name: "智能摄像机/相机/微单"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/jinghuaqilvxin.jpg",
              name: "净化器及滤芯"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/jingshuiqiandlvxin.jpg",
              name: "净水器及滤芯"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/shouhuan.jpg",
              name: "手环及配件"
            },
            {
              link:
                "https://search.mi.com/search_%E7%B1%B3%E5%85%94%E7%A7%AF%E6%9C%A8%E6%9C%BA%E5%99%A8%E4%BA%BA",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mijiqiren.jpg",
              name: "米兔积木机器人及配件"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zhinengdeng.jpg",
              name: "智能灯"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/gushiji.jpg",
              name: "米兔智能故事机"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/zhinengjiatingtaozhuang.jpg",
              name: "智能家庭组合"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xueyaji.jpg",
              name: "血压计"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tizc.jpg",
              name: "体重秤 / 体脂秤"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/huabanche.jpg",
              name: "电动滑板车"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/wurenji.jpg",
              name: "小米无人机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jly.jpg",
              name: "米家行车记录仪"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/djj.jpg",
              name: "小米米家对讲机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/znyjdaohang.jpg",
              name: "全部智能硬件"
            }
          ],
          title: "路由器 智能硬件"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/dianyuan.jpg",
              name: "小米移动电源"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/cxb.jpg",
              name: "插线板"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/pinpaidianyuan.jpg",
              name: "品牌移动电源"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/dianyuanfujian.jpg",
              name: "移动电源附件"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/chongdianqi.jpg",
              name: "充电器"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/5Battery2.jpg",
              name: "彩虹5号电池"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/7Battery2.jpg",
              name: "彩虹7号电池"
            }
          ],
          title: "移动电源 电池 插线板"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/toudai.jpg",
              name: "小米头戴式耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tdsqs.jpg",
              name: "头戴式耳机轻松版"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmjzej.jpg",
              name: "小米降噪耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/qtpro.jpg",
              name: "小米圈铁耳机 Pro"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/quantie.jpg",
              name: "小米圈铁耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jiaonang.jpg",
              name: "小米胶囊耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/huosai.jpg",
              name: "小米活塞耳机清新版"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/bluetoothheadset.jpg",
              name: "小米蓝牙耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/yundong.jpg",
              name: "小米运动蓝牙耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/pinpai.jpg",
              name: "品牌耳机"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/wlyx.jpg",
              name: "小米网络音响"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/pocketaudio.png",
              name: "小米蓝牙音箱"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/suishen.jpg",
              name: "小米随身蓝牙音箱"
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/xiaogangpao2-hei.jpg",
              name: "小钢炮音箱 2"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/fhzlyyx.jpg",
              name: "小米方盒子蓝牙音箱2"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/fhz.jpg",
              name: "小米方盒子蓝牙音箱"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/naozhong.jpg",
              name: "小米音乐闹钟"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mituyx.jpg",
              name: "小米米兔音箱"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/chechong.jpg",
              name: "音乐蓝牙车充"
            }
          ],
          title: "耳机 音响"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tiemo.jpg",
              name: "贴膜"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/baohutao.jpg",
              name: "保护套/保护壳"
            }
          ],
          title: "保护套 贴膜"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiancai.jpg",
              name: "线材"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zipaigan.jpg",
              name: "自拍杆"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zhijia.jpg",
              name: "手机支架"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/cunchu.jpg",
              name: "存储卡"
            }
          ],
          title: "线材 支架 存储卡"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiangbao.jpg",
              name: "箱包"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/lvxingxiang.jpg",
              name: "90分旅行箱"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/huise2.jpg",
              name: "服饰"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/ydx.jpg",
              name: "米家运动鞋 智能版"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tyj.jpg",
              name: "TS 尼龙偏光太阳镜"
            }
          ],
          title: "箱包 服饰"
        },
        {
          list: [
            {
              link: "http://mitu.mi.com/",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitu.jpg",
              name: "米兔玩偶"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zhoubian1.jpg",
              name: "生活周边"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zazhi.jpg",
              name: "《小米》会刊"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mj.jpg",
              name: "毛巾/浴巾"
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/rjcd.jpg",
              name: "8H乳胶床品"
            }
          ],
          title: "兔米 生活周边"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["appWidth", "appHeight"]),
    ...mapGetters("mobile.home", ["headerHeight", "footerHeight"])
  },
  methods: {
    ...mapMutations(["setThemeColor"]),
    headerMounted(headerDOM) {
      let display = headerDOM.childNodes;
      console.log(display);
    },
    changeCurrentCategory() {
      if (!this.changeCurrentCategory.count) {
        this.changeCurrentCategory.count = 0;
      }
      this.selectedLabel = this.tabs[this.changeCurrentCategory.count++].title;
      if (this.changeCurrentCategory.count === this.tabs.length) {
        this.changeCurrentCategory.count = 0;
      }
    },
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      console.log("value has changed, now is", label);
    }
  },
  components: {
    "header-home": () =>
      import(/* webpackChunkName: "c-container" */ "./components/HeaderHome"),

    "c-tab": () => import(/* webpackChunkName: "c-tab" */ "@cube/tab-bar/tab"),
    "c-tab-bar": () =>
      import(/* webpackChunkName: "c-tab-bar" */ "@cube/tab-bar/tab-bar"),
    "c-scroll": () =>
      import(/* webpackChunkName: "c-scroll" */ "@cube/scroll/scroll"),
    "c-tab-panels": () =>
      import(/* webpackChunkName: "c-tab-panels" */ "@cube/tab-panels/tab-panels"),
    "c-tab-panel": () =>
      import(/* webpackChunkName: "c-tab-panel" */ "@cube/tab-panels/tab-panel"),
    "c-slide": () =>
      import(/* webpackChunkName: "c-slide" */ "@cube/slide/slide"),
    "c-slide-item": () =>
      import(/* webpackChunkName: "c-slide-item" */ "@cube/slide/slide-item")
  }
};
</script>

<style lang="scss" >
.mobile-home {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  .advertisement {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2rem;
      @include text-shadow();
    }
  }
  header {
    position: relative;
    z-index: 1;
    width: 100%;
    @include elevation2();
    .nav-wrapper {
      background-color: #f2f2f2;
      color: #666;
      // outline: 1px solid rebeccapurple;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      > .nav-tabs-wrapper {
        @include scroll-horizontal();

        .nav-tabs {
          white-space: nowrap;
          .nav-item {
            line-height: 2.5rem;
            position: relative;
            width: 5rem;
            padding: 0 0.25rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;

            .title {
              display: inline-block;
              font-size: 0.8rem;
              &::before {
                content: " ";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }
            }
          }
        }
      }
      > .nav-display {
        // outline: 1px solid rebeccapurple;
        padding: 0 0.25rem;
        width: 2rem;
        line-height: 3rem;
      }
    }
  }
  .content-wrapper {
    .content {
      .exposure-wrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        align-content: center;

        .exposure {
          padding: 0.5rem;
          flex: 1;
          min-width: 45%;
          height: 10rem;
          // outline: 1px solid rebeccapurple;
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          .img {
            width: 50%;
            height: 60%;
            margin-bottom: auto;
          }
          .tag {
            position: absolute;
          }
          .info {
            text-align: center;
            padding: 0.5rem;
            .name {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 0.7rem;
            }
            .des {
              margin: 0.1rem 0;
              font-size: 0.6rem;
              color: rgba(0, 0, 0, 0.54);
            }
            .price {
              font-size: 0.7rem;
              color: #ea625b;
              line-height: 1rem;
              position: relative;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
