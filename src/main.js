// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import $ from 'jquery';
import '../node_modules/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
// 导入自己的样式
import './assets/css/index.css';
import './assets/font/iconfont.css'

// 引入树组件
import 'ztree/css/zTreeStyle/zTreeStyle.css'
import 'ztree'


Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})