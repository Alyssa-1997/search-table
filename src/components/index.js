import searchTable from './searchTable.vue'

searchTable.install = Vue => Vue.component(searchTable.name,searchTable); //注册组件
// if(typeof window !== 'undefined' && window.Vue){
//   install(window.Vue)
// }

export default searchTable