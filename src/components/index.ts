import searchTable from './searchTable.vue'
import Vue from "vue"

(searchTable as any).install = Vue => Vue.component(searchTable.name,searchTable); //注册组件
// if(typeof window !== 'undefined' && window.Vue){
//   install(window.Vue)
// }

export default searchTable