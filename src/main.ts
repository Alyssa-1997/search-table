import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

//按需引入
import {Form,Button,Select,Pagination} from 'element-ui'

import 'element-ui/lib/theme-chalk/form.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/select-dropdown.css'
import 'element-ui/lib/theme-chalk/scrollbar.css'
import 'element-ui/lib/theme-chalk/popper.css'
import 'element-ui/lib/theme-chalk/option.css'
import 'element-ui/lib/theme-chalk/option-group.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/pagination.css'
import 'element-ui/lib/theme-chalk/dropdown.css'
import 'element-ui/lib/theme-chalk/dropdown-menu.css'
import 'element-ui/lib/theme-chalk/dropdown-item.css'


Vue.use(ElementUI)
Vue.use(Form)
Vue.use(Select)
Vue.use(Button)
Vue.use(Pagination)

new Vue({
  el: '#app',
  render: h => h(App)
})
