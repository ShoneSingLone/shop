# shop

从杂货堆挖出来的一个项目：[原地址](https://github.com/ShoneSingLone/mindmap/tree/master/project/shop)
单独拎出来准备做个完整的项目移动端、PC端。购物车、注册、登录、支付。
讲道理，应该是有一个后台管理系统来CURD这些商品吧...没接触过电商，不知道（就是不用写后台管理系统的意思）。

---

- ![shophomepage](./src/assets/doc/shophomepage.gif)
- 一个仿[小米商城](https://www.mi.com/)项目，基于Vue技术栈。
- [leanCloud 访问Shop地址](https://shonesinglone.leanapp.cn/shop/)![leancloud_addr](./src/assets/doc/leancloud_addr.png)对比[Github.io 访问Shop地址](https://shonesinglone.github.io/shop/#/)，cleanCloud访问速度是肉眼可见的快得多，特别商品详情页几张大图，感觉就像CDN。

---
挖坑，未填

- [x] ~~产品概览页的nav与outline有竟态问题待解决（用timer解决了）~~
- [ ] `vue/no-reserved-keys`cube-UI ESLint没通过，醉了...

## 任务清单

- [ ] 主页
  - [ ] 焦点图
  - [ ] purchase
- [ ] 商品概览页
- [ ] 登录
- [ ] 购物车

## 记录

### 基建

- 第三方库`reset-css`在main.js中引用
- html,body,#app height置为100%，同时App.vue最为全局样式，不适用style scoped。

```css
html,
body,
#app {
  height: 100%;
  font-size: 16px;
  overflow: hidden;
}
#pc {
  height: 100%;
  font-size: 16px;
  overflow: hidden;
}
```

### PC

---
 在App.vue中
- 完成对APP size的变化的监听，以满足所谓响应式。
- 响应size的变化而跳转相应的视图。
  - setCurrentMode MODE.pc:1;MODE.mobile:2；
  - created 检测当前path设置currentPath
  - appWidth 变动
  - 如果currentMode undefined（默认的是假值0）；
  - 如果currentMode 已配置（在created中检测当前的path是否为主页）判断当前与配置是否一致，一致则跳转currentPath，否则setCurrentMode为当前状态并跳回主页；

```js
console.log(newW, oldW);
//Pixel2 411*731
// 判定是否为PC视图
let currentMode = newW < 420 ? MODE.mobile : MODE.pc;
if (currentMode === this.currentMode) {
  // App是第一个加载也是最后一个销毁
  this.$router.push({ path: this.currentPath });
} else {
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
}

```

### [Home](https://www.mi.com/)

- 整体布局是传统行列排版， 划分为row单独处理。 固定宽`1226px`居中 `margin:0 auto;`
- [iconfont](http://www.iconfont.cn/)找图标，购物车之类的，随便选了几个。[如何操作](http://www.iconfont.cn/help/detail?helptype=code)
- ![iconfont](./src/assets/doc/iconfont.png)

```js
//因为链接不是https，GitHub不会直接加载,所以最后还是打包进入了
(() => {
  function dynamicLoadingCSS(cssURL) {
    let linkTag = document.createElement("link");
    linkTag.setAttribute(
      "href",
      cssURL
    );
    linkTag.setAttribute("rel", "stylesheet");//不加这个不行? HTML5不是不
    document.head.appendChild(linkTag);
  }
  let cssURL = "http://at.alicdn.com/t/font_832872_7e1nwvara34.css"
  dynamicLoadingCSS(cssURL);
})();

```

---

- ![site-header](./src/assets/doc/site-header.png)
- header部分：都是常规居中布局，使用flex相比原网页的float简直谁用谁知道...
- search-input添加`autocomplete="off"`不然自动填充影响search-result框的正常显示。
- 比较有意思的地方是官网将nav和navItem处理为并列关系，并不像我以为的是父子关系（一般是hover的时候display：block子元素）。所以单独有变量`currentNavItem`来控制navItem的显隐。

方法一：每次动态渲染会有视觉上可感知的延迟（如果数据量够大）

```html
<ul class="menus">
  <li class="product" v-for="(tabItem, index) in tabItems[currentNavItem.type]" :key="index">
    <p class="info" v-if="tabItem.info">
      <span class="flag">{{tabItem.info}}</span>
    </p>
    <a :href="tabItem.link"><img :src="tabItem.imgUrl" :alt="tabItem.name"></a>
    <p class="name">{{tabItem.name}}</p>
    <p class="price">{{tabItem.price}}</p>
  </li>
</ul>

```

方法二：一次性全部渲染，只是动态切换显隐（注意：for of、 for in 、v-show 、v-if）

```html
<div class="header-nav-menu" @mouseenter="enterNavItem(currentNavItem)" @mouseleave="leaveNavItem()" v-show="currentNavItem">
  <ul class="menus" v-show="currentNavItem.type === key" v-for="(navTabItems, key) in tabItems" :key="key">
    <li class="product" v-for="(tabItem, subIndex) in navTabItems" :key="subIndex">
      <p class="info" v-if="tabItem.info">
        <span class="flag">{{tabItem.info}}</span>
      </p>
      <a :href="tabItem.link"><img :src="tabItem.imgUrl" :alt="tabItem.name"></a>
      <p class="name">{{tabItem.name}}</p>
      <p class="price">{{tabItem.price}}</p>
    </li>
  </ul>
</div>

```

- 为了下拉正常显示，z-index只要起作用（position为relative或者absolute且不为auto）就创建了层叠上下文（stacking order）先看大小，大小一样看先后。

- 搜索框hot-word是按像素手动居中，感觉很不优雅，求指导。

---

- category
- ![category](./src/assets/doc/category.png)

- 官网的category是headerNavList里的第一元素，也是有点6，不知道这么处理是什么原因。我是觉得有点扯，因为数据结构跟后面的数据不一致。有懂行的麻烦说一下。
- 然后这里的实现把结构单独拎出来，而且也没有像官网那样对item还有一个专门的list来限制展示的行列。(懒)

![category-mi](./src/assets/doc/category-mi.png)

就按照一般的父子关系处理，使用hover完成

```html
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
          </div>
        </li>
      </ul>
    </div>
  </li>
</ul>
```

- Carousel
- ![Carousel](./src/assets/doc/carousel.gif)

基于Vue，关注的是数据状态。

- setInterval持续切换当前展示的`currentSlide`; 
- 下标到达临界时的处理

```js
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
```

---

- FlashPurchase
- ![FlashPurchase](./src/assets/doc/flashpurchase.gif)
- 倒计时：首先获取当前时间，计算分钟数，用定时器修改时间表。

```js
    /**
     * 计时器，修改时间状态
     */
    function countTime() {
      let date = new Date();
      let now = date.getTime();
      let diffTime = end - now;
      if (diffTime >= 0) {
        let h = Math.floor((diffTime / 1000 / 60 / 60) % 24);
        let m = Math.floor((diffTime / 1000 / 60) % 60);
        let s = Math.floor((diffTime / 1000) % 60);
        if (h < 10) {
          h = "0" + h;
        }
        if (m < 10) {
          m = "0" + m;
        }
        if (s < 10) {
          s = "0" + s;
        }
        vm.timeInfoH = h;
        vm.timeInfoM = m;
        vm.timeInfoS = s;
      } else {
        end = getEndTiem();
      }
      setTimeout(countTime, 1000);
    }
```

- 按钮：利用transform translateX transition 位移，类似分页的功能total current之类的。

```js
  watch: {
    currentPage(currentPage, oldV) {
      console.log(currentPage, oldV);
      let translateX;

      if (currentPage === this.total) {
        translateX = this.listWidth - this.wrapperWidth;
      } else {
        translateX = (currentPage - 1) * this.wrapperWidth;
      }
      translateX = translateX === 0 ? 0 : `-${translateX}px`;
      this.listStyle = Object.assign({}, this.listStyle, {
        transform: `translateX(${translateX})`
      });
    }
  },
```

---

商品概览页

- 完成静态页面
- 添加初始化状态类
- 根据scrollY变动触发动画
- head 和 outline 的动画用JS想得有点绕，应该有更简单的（主要是动画不一致，且相互之间有先后联系。之前的版本没有加timer 适时取消，还导致了竟态问题，虽然现在解决了，但是很不优雅，有空再来优化...）

---

登录框

- 利用`background-attachment: fixed`所谓的视觉差,做了一个从设计上毫无美感的背景。
- ![login](./src/assets/doc/login.gif)

---
GitHub 第三方登录

- 官方文档都很详实，没有什么难点
- 主要是回调的处理，可能有双工通信这样的方式，但是我这里采用的是监听localstorage变动的方式。授权页面完成数据的客户端存储之后就`window.close()`，深藏功与名。
- 因为回调页面是`https://shonesinglone.github.io/oauth/`，所以只能登GitHub.io的页面才能用第三方登录。嗯，就是这样。

- ![login](./src/assets/doc/login.gif)

---

### Mobile

- [Cube-UI](https://didi.github.io/cube-ui/#/zh-CN)

- 通常情况，根据NavBar分页面，自顶向下逐个分解，利用Cube-UI的组件。

```bash
├─Home
├─Category
├─Trolley
└─User
```


---

### 

动画的本质是时间片。
transition有init初始状态和done完成状态两个时间帧。done state跟静态页面的最终效果是一致的。

- 复用

(挖坑)vue lazy load
