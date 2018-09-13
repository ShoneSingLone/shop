<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";

export default {
  name: "app",
  mounted() {
    console.log("App mounted");
    this.setAppSize(document.body.getBoundingClientRect());
    this.$nextTick(() => {
      window.addEventListener(
        "resize",
        debounce(() => {
          this.setAppSize(document.body.getBoundingClientRect());
          console.log(
            "this.appWidth",
            this.appWidth,
            "this.appHeight",
            this.appHeight
          );
        }, 150)
      );
    });
  },
  computed: {
    ...mapGetters(["appWidth", "appHeight"])
  },
  methods: {
    ...mapActions(["setAppSize"])
  },
  watch: {
    appWidth(newW, oldW) {
      //Pixel2 411*731
      // 判定是否为PC视图
      let routePath = newW > 420 ? { name: "p.h" } : { name: "m.h" };
      // routePath可根据其他属性（currentShowView）改变以保持视图一致
      console.log("appWidth newW,oldW:", newW, oldW, routePath);
      this.$router.push(routePath);
    }
  }
};
</script>
<style lang="scss">
// @import "./assets/style/iconfont.scss";
/* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* reset-css end */
.iconfont {
  font-size: unset;
  margin: 0 4px;
}
* {
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
  font-size: 16px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
}
.fade {
  &-enter-active {
    transition: all 0.3s 0.3s ease-in;
    opacity: 0;
  }

  &-leave-active {
    transition: all 0.3s ease-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }
}

.show {
  &-enter-active {
    transition: height 0.3s 0.3s ease-in;
    height: 0;
  }

  &-leave-active {
    transition: height 0.3s ease-out;
  }

  &-enter,
  &-leave-to {
    max-height: 666;
  }

  &-enter-to,
  &-leave {
    opacity: 1;
  }
}
</style>
