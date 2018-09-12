<template>
  <div class="category-wrapper">
    <ul class="category">
      <li class="item" v-for="(category, index) in categoryList" :key="index">
        <div class="title-wrapper">
          <span>{{category.title}}</span>
          <span class="iconfont icon-right"></span>
        </div>
        <div class="detail-thumbtack">
          <ul class="detail-wrapper">
            <li class="detail" v-for="(detail, index) in category.list" :key="index">
              <div class="detail-inner">
                <a class="link" href="javascript:void(0)">
                  <img :src="detail.imgUrl" alt="" />
                  <span class="text-name">{{detail.name}}</span>
                </a>
                <a class="buy" v-show="detail.buyStatus" :href="detail.buyUrl">
                  选购
                </a>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "topBanner",
  data() {
    return {
      goodsStatus: false,
      categoryList: [
        {
          list: [
            {
              buyUrl: "https://item.mi.com/product/10000041.html",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm6.png",
              name: "小米6",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/product/10000057.html",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/max2.png",
              name: "小米Max2",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/mi5c",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mi5c.png",
              name: "小米5C",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/minote2",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiaomiNOTE2.jpg",
              name: "小米Note 2",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/mix",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/MIX.jpg",
              name: "小米MIX",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/mi5s",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xm5s.jpg",
              name: "小米5s",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/mi5splus",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/5splus.jpg",
              name: "小米5s Plus",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/redminote4x",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hmn4x.jpg",
              name: "红米Note 4X",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/redmi4x",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4x.jpg",
              name: "红米4X",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/buyphone/redmi4",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4.jpg",
              name: "红米4",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/product/10000039.html",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hm4a.png",
              name: "红米4A",
              buyStatus: true
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/compare.jpg",
              name: "对比手机",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mimobile.jpg",
              name: "小米移动 电话卡",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/4g+.jpg",
              name: "移动4G+专区",
              buyStatus: false
            }
          ],
          title: "手机 电话卡"
        },
        {
          list: [
            {
              buyUrl: "https://item.mi.com/product/10000032.html",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/bijiben12.5.jpg",
              name: "笔记本12.5英寸",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/product/10000061.html",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/bijiben13.3.jpg",
              name: "笔记本13.3英寸",
              buyStatus: true
            },
            {
              buyUrl: "https://item.mi.com/product/10000038.html",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mipad3.png",
              name: "小米平板3",
              buyStatus: true
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/usbc-dyspq.jpg",
              name: "USB-C电源适配器",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/usbc-zjq.jpg",
              name: "USB-C转接器",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/neidanbao.jpg",
              name: "小米笔记本内胆包",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/ymjp.jpg",
              name: "悦米机械键盘",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/shubiao.jpg",
              name: "小米便携鼠标",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/wxsb.png",
              name: "小米无线鼠标",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmsbd.jpg",
              name: "鼠标垫",
              buyStatus: false
            },
            {
              buyUrl: "//item.mi.com/buyphone/mi5",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/USBC.jpg",
              name: "DisplayPort转接器",
              buyStatus: false
            }
          ],
          title: "笔记本 平板"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_49.png",
              name: "小米电视4 49英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_55.png",
              name: "小米电视4 55英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds_65.png",
              name: "小米电视4 65英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_43.png",
              name: "小米电视4A 43英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_49.png",
              name: "小米电视4A 49英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_55.jpg",
              name: "小米电视4A 55英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmds4a_65.jpg",
              name: "小米电视4A 65英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s48.jpg",
              name: "小米电视3s 48英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s55.png",
              name: "小米电视3s 55英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s60.png",
              name: "小米电视3s 60英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s65.png",
              name: "小米电视3s 65英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3sqm65.jpg",
              name: "小米电视3s 65英寸 曲面",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitv3s70.png",
              name: "小米电视3 70英寸",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mihezi3s.png",
              name: "小米盒子3s",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mihezi3c.png",
              name: "小米盒子3c",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/hezi3s.jpg",
              name: "小米盒子3 增强版",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jtyx.jpg",
              name: "家庭音响",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/azfw.png",
              name: "安装服务",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/dianshipeijian.jpg",
              name: "电视盒子配件",
              buyStatus: false
            }
          ],
          title: "电视 盒子"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/phcplus.jpg",
              name: "九号平衡车",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jiqiren.jpg",
              name: "米家扫地机器人及配件",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/VRPLAY3.png",
              name: "小米VR眼镜",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/luyouqi.jpg",
              name: "小米路由器",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zxc.jpg",
              name: "电助力折叠自行车",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/shuihu.jpg",
              name: "米家恒温电水壶",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/czjhq.jpg",
              name: "米家车载空气净化器",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/dianhuashoubiao.jpg",
              name: "手表",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/dianfanbao.jpg",
              name: "米家智能电饭煲",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiaobai.jpg",
              name: "智能摄像机/相机/微单",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/jinghuaqilvxin.jpg",
              name: "净化器及滤芯",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/jingshuiqiandlvxin.jpg",
              name: "净水器及滤芯",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/shouhuan.jpg",
              name: "手环及配件",
              buyStatus: false
            },
            {
              link:
                "https://search.mi.com/search_%E7%B1%B3%E5%85%94%E7%A7%AF%E6%9C%A8%E6%9C%BA%E5%99%A8%E4%BA%BA",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mijiqiren.jpg",
              name: "米兔积木机器人及配件",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zhinengdeng.jpg",
              name: "智能灯",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/gushiji.jpg",
              name: "米兔智能故事机",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/zhinengjiatingtaozhuang.jpg",
              name: "智能家庭组合",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xueyaji.jpg",
              name: "血压计",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tizc.jpg",
              name: "体重秤 / 体脂秤",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/huabanche.jpg",
              name: "电动滑板车",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/wurenji.jpg",
              name: "小米无人机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jly.jpg",
              name: "米家行车记录仪",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/djj.jpg",
              name: "小米米家对讲机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/znyjdaohang.jpg",
              name: "全部智能硬件",
              buyStatus: false
            }
          ],
          title: "路由器 智能硬件"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/dianyuan.jpg",
              name: "小米移动电源",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/cxb.jpg",
              name: "插线板",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/pinpaidianyuan.jpg",
              name: "品牌移动电源",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/dianyuanfujian.jpg",
              name: "移动电源附件",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/chongdianqi.jpg",
              name: "充电器",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/5Battery2.jpg",
              name: "彩虹5号电池",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/7Battery2.jpg",
              name: "彩虹7号电池",
              buyStatus: false
            }
          ],
          title: "移动电源 电池 插线板"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/toudai.jpg",
              name: "小米头戴式耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tdsqs.jpg",
              name: "头戴式耳机轻松版",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xmjzej.jpg",
              name: "小米降噪耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/qtpro.jpg",
              name: "小米圈铁耳机 Pro",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/quantie.jpg",
              name: "小米圈铁耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/jiaonang.jpg",
              name: "小米胶囊耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/huosai.jpg",
              name: "小米活塞耳机清新版",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/bluetoothheadset.jpg",
              name: "小米蓝牙耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/yundong.jpg",
              name: "小米运动蓝牙耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/pinpai.jpg",
              name: "品牌耳机",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/wlyx.jpg",
              name: "小米网络音响",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/pocketaudio.png",
              name: "小米蓝牙音箱",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/suishen.jpg",
              name: "小米随身蓝牙音箱",
              buyStatus: false
            },
            {
              imgUrl:
                "https://shonesinglone.leanapp.cn/imgs/xiaogangpao2-hei.jpg",
              name: "小钢炮音箱 2",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/fhzlyyx.jpg",
              name: "小米方盒子蓝牙音箱2",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/fhz.jpg",
              name: "小米方盒子蓝牙音箱",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/naozhong.jpg",
              name: "小米音乐闹钟",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mituyx.jpg",
              name: "小米米兔音箱",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/chechong.jpg",
              name: "音乐蓝牙车充",
              buyStatus: false
            }
          ],
          title: "耳机 音响"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tiemo.jpg",
              name: "贴膜",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/baohutao.jpg",
              name: "保护套/保护壳",
              buyStatus: false
            }
          ],
          title: "保护套 贴膜"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiancai.jpg",
              name: "线材",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zipaigan.jpg",
              name: "自拍杆",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zhijia.jpg",
              name: "手机支架",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/cunchu.jpg",
              name: "存储卡",
              buyStatus: false
            }
          ],
          title: "线材 支架 存储卡"
        },
        {
          list: [
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/xiangbao.jpg",
              name: "箱包",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/lvxingxiang.jpg",
              name: "90分旅行箱",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/huise2.jpg",
              name: "服饰",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/ydx.jpg",
              name: "米家运动鞋 智能版",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/tyj.jpg",
              name: "TS 尼龙偏光太阳镜",
              buyStatus: false
            }
          ],
          title: "箱包 服饰"
        },
        {
          list: [
            {
              link: "http://mitu.mi.com/",
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mitu.jpg",
              name: "米兔玩偶",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zhoubian1.jpg",
              name: "生活周边",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/zazhi.jpg",
              name: "《小米》会刊",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/mj.jpg",
              name: "毛巾/浴巾",
              buyStatus: false
            },
            {
              imgUrl: "https://shonesinglone.leanapp.cn/imgs/rjcd.jpg",
              name: "8H乳胶床品",
              buyStatus: false
            }
          ],
          title: "兔米 生活周边"
        }
      ]
    };
  },
  ready() {},
  methods: {
    isEnter(currType) {
      this.currGoods = this[currType];
      this.goodsStatus = true;
    },
    isLeave() {
      this.goodsStatus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../components/style/variables";

$width: 235px;
$height: 460px;

.category-wrapper {
  position: relative;
  width: 1226px;
  margin: 0 auto;
  > .category {
    position: absolute;
    left: 0;
    top: 0;
    width: $width;
    height: $height;
    padding: 20px 0;
    background: rgba(51, 51, 51, 0.6);
    > .item {
      > .title-wrapper {
        width: 100%;
        line-height: 42px;
        font-size: 14px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        text-align: center;
        cursor: pointer;
        > .iconfont {
          font-weight: bold;
          font-size: 16px;
        }
      }
      > .detail-thumbtack {
        position: absolute;
        left: $width;
        top: 0;
        display: none;

        > .detail-wrapper {
          position: relative;
          // border: 1px solid #e0e0e0;
          // outline: 1px solid yellowgreen;
          height: 460px;
          width: auto;
          background: #fff;
          display: flex;
          flex-flow: column wrap;
          justify-content: flex-start;
          align-items: flex-start;
          // align-content: center;
          // @include box-shadow();

          > .detail {
            // flex: 1 1 75px;
            display: flex;
            height: 75px;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            // outline: 1px solid red;

            > .detail-inner {
              flex: 1;
              transform: scale(0.9, 0.9);
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              align-items: center;
              transition: all 0.5s ease-in-out;
              &:hover {
                transform: scale(0.95, 0.95);
                @include box-shadow();
              }
              > .link {
                // outline: 1px dashed rebeccapurple;
                display: flex;
                // flex-flow: nowrap;
                justify-content: flex-start;
                align-items: center;
                min-width: 170px;
                margin-left: 2px;
                color: $text-color2;

                > img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
                > .text-name {
                  padding-left: 10px;
                  font-size: 14px;
                }
              }
              > .buy {
                display: inline-block;
                width: 58px;
                line-height: 22px;
                margin-right: 4px;
                font-size: 12px;
                text-align: center;
                color: $main-theme-color;
                border: 1px solid $main-theme-color;
                &:hover {
                  color: #fff;
                  background: $main-theme-color;
                }
              }
            }
          }
        }
      }
      &:hover {
        display: flex;
        // @include box-shadow();
        > .title-wrapper {
          @include text-shadow();
          background: $main-theme-color;
        }
        > .detail-thumbtack {
          display: block;
        }
      }
    }
  }
}
</style>
