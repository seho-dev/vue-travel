// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import ElementUI from 'element-ui';
import Mint from 'mint-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

// 把fastclick的库作用于document之上
fastClick.attach(document.body);
Vue.use(ElementUI);
Vue.use(Mint);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
