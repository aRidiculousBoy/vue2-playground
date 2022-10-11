import "vui-design/dist/style/vui-design.css";
import Vue from 'vue'
import App from './App.vue'

import VuiDesign from "vui-design";
// 导入指令
import directives from '@/directives'

Vue.config.productionTip = false

// 注册全局指令
Vue.use(directives)
Vue.use(VuiDesign);

new Vue({
  render: h => h(App),
}).$mount('#app')
