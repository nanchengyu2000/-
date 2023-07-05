import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import api from './axios/api'
import store from './store/index'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import {Container,Header,Main,Aside,Input,Button,Card,Collapse,CollapseItem,Tooltip,Dropdown
,DropdownItem,DropdownMenu,Upload,Dialog,Checkbox,Link} from 'element-ui'
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI({
    adapter: "vue"
  });
}
Vue.prototype.$api=api
Vue.config.productionTip = false
Vue.use(App).use(Container).use(Header).use(Main).use(Aside).use(Input).use(Button).use(Card).use(Collapse).use(CollapseItem)
.use(Tooltip).use(Dropdown).use(DropdownItem).use(DropdownMenu).use(Upload).use(Dialog).use(Checkbox).use(Link)
Vue.component(CollapseTransition.name, CollapseTransition)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
