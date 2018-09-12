<template>
  <div class="carousel">
    asdfasdfasdfasdf
    <div class="banner" id="banner" v-on:mouseover="carousel.mouseover" v-on:mouseout="carousel.mouseout">
      <a href="javascript:void(0);" v-for="(slideItem, index) in carousel.slides" :key="index" @click="goTo">
        <div :class="['slide',slideItem.imgClass, (carousel.currentSlide===index?'active':'')]"></div>
      </a>
    </div>
    <a href="javascript:void(0)" class="button prev" id="prev" @click="carousel.clickPrev"></a>
    <a href="javascript:void(0)" class="button next" id="next" @click="carousel.clickNext"></a>
    <div class="dots" id="dots">
      <span :class="{active:carousel.currentSlide === index}" v-for="(dotItem, index) in carousel.slides" :key="index" @click="carousel.clickDots(index)"></span>
    </div>
    asdfasdfasdfasdf
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>