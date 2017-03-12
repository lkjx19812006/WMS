import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import router from '../router/router.config';
import 'element-ui/lib/theme-default/index.css';
import '../assets/css/base.css';
import '../assets/iconfont/iconfont.css';

//vue 使用第三方插件
Vue.use(ElementUI);

var app = new Vue({
	el: '#app',//html中的根元素的ID
	// render: function(create){return create(App)}
	// 使用箭头函数
	// 渲染APP组件
	render: create => create(App),//渲染组件App
	//实例路由 实现按需加载
	router: router,
})