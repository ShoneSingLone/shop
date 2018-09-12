<template>
  <div class="flashPurchase-warpper">
    <div class="box-hd">
      <h2 class="title ">闪购</h2>
      <!-- <span>{{flashPurchaseInfo.debuggerInfo}}</span> -->
      <div class="more ">
        <div class="control-group">
          <a :class="['control','prev',{disable:isDisablePre}]" href="javascript: void(0); " @click="flashPurchaseCarouselChange(-1)">
            <span class="glyphicon  glyphicon-chevron-left"></span>
          </a>
          <a :class="['control','next',{disable:isDisableNext}]" href="javascript: void(0); " @click="flashPurchaseCarouselChange(1)">
            <span class="glyphicon glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    </div>

    <div class="container ">
      <flashPurchase-countdown/>
      <flashPurchase-carousel/>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import countdown from './FlashPurchaseCountdown'
import carousel from './FlashPurchaseCarousel'

export default {
  name: 'flashuPrchase',
  methods: {
    ...mapActions('home', ['flashPurchaseCarouselChange'])
  },
  computed: {
    ...mapGetters('home', [
      'isDisablePre',
      'isDisableNext',
      'flashPurchaseInfo'
    ])
  },
  data () {
    return {}
  },
  components: {
    'flashPurchase-countdown': countdown,
    'flashPurchase-carousel': carousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../base";
@import "../../../../components/style/variables";

.flashPurchase-warpper {
  margin: 90px auto;
  .box-hd {
    // outline: 2px solid rebeccapurple;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      margin: 0 32px;
      font-size: 1.90px;
      font-weight: 200;
      line-height: 64px;
      color: #333;
    }
    .more {
      margin: 0 32px;

      .control-group {
        a {
          border: 2px solid #f0f0ff;
          color: #212121;
          text-decoration: none;
          &.disable {
            color: #f0f0ff;
            cursor: not-allowed;
          }

          &:first-child {
            border-radius: 0.48px 0 0 0.48px;
          }
          &:last-child {
            border-radius: 0 0.48px 0.48px 0;
          }
        }
      }
    }
  }
  .container {
    @include width();
    height: 320px;
    display: flex;
    flex-flow: row nowrap;
    @include box-shadow();
  }
}
</style>