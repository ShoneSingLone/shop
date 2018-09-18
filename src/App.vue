<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import debounce from "lodash.debounce";
let MODE = {
  pc: 1,
  mobile: 2
};

export default {
  name: "app",
  created() {
    this.setUserInfo();
    let currentPath = location.hash.split("#");
    if (currentPath.length > 1 && currentPath[1].length > 1) {
      let flag = currentPath[1].split("/")[1];
      this.setCurrentMode(flag === "pc" ? MODE.pc : MODE.mobile);
      this.setCurrentPath(currentPath[1]);
    }
  },
  mounted() {
    console.log("App mounted");
    this.setAppSize(document.body.getBoundingClientRect());
    console.log("UserInfo", this.userInfo);
    // 全应用的监听事件
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

      window.addEventListener("storage", event => {
        try {
          let { key, newValue, oldValue, url } = event;
          let vm = this;
          let strategy = {
            userInfo: () => {
              if (newValue && newValue.length > 0) {
                vm.setUserInfo(JSON.parse(newValue));
              }
            }
          };
          console.warn(
            `from ${url},new key is ${key}, newValue is ${newValue}, old value is ${oldValue}`
          );
          strategy[key]();
        } catch (error) {
          console.log(error);
        }
      });
    });
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "appWidth",
      "appHeight",
      "currentPath",
      "currentMode"
    ])
  },
  methods: {
    ...mapActions([]),
    ...mapMutations([
      "setAppSize",
      "setCurrentPath",
      "setCurrentMode",
      "setUserInfo"
    ])
  },
  watch: {
    appWidth(newW, oldW) {
      console.log(newW, oldW);
      console.log("this.currentPath", this.currentPath);
      //Pixel2 411*731
      // 判定是否为PC视图
      let currentMode = newW < 420 ? MODE.mobile : MODE.pc;
      // App是第一个加载也是最后一个销毁
      console.log(
        "currentMode",
        currentMode,
        "this.currentMode",
        this.currentMode
      );
      if (currentMode !== this.currentMode) {
        this.setCurrentMode(currentMode);
        this.$router.push({
          name: (() => {
            let switchPathName = {
              [MODE.mobile]: "m.h",
              [MODE.pc]: "p.h"
            };
            return switchPathName[currentMode];
          })()
        });

        // this.$router.push({ path: this.currentPath });
      }
    },
    $route(newPath, oldPath) {
      console.log("newPath, oldPath", newPath, oldPath);
      this.setCurrentPath(newPath);
    }
  }
};
</script>
<style lang="scss">
@import "./assets/style/iconfont.scss";
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
/* custom */
a {
  text-decoration: none;
  color: #000;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  // clip: rect(0, 0, 0, 0);
  border: 0;
}

/* custom */
/* animate */
@keyframes rock {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(3deg);
  }

  20% {
    transform: rotate(-3deg);
  }

  30% {
    transform: rotate(2deg);
  }

  40% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(1deg);
  }

  60% {
    transform: rotate(-1deg);
  }

  70% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

/* animate end*/
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
