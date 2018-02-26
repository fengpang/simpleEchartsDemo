// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import {AutoShowTip} from "./js/tools";
//import axios from 'axios'
import frameHeader from './components/frameHeader.vue'

echarts.AutoShowTip = AutoShowTip;  //将自动轮播对象添加到charts对象上
Vue.prototype.$echarts = echarts;
//Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.component('frame-header',frameHeader);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
