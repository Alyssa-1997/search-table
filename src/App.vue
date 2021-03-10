<template>
  <div id="app">
    <search-table 
    :formConfig="formConfig" 
    :tableHeaderConfig="tableHeaderConfig" 
    :tbData.sync="tableData" 
    :filters.sync="filterData" 
    @search="getList" 
    :size="size"
    :formRules="formRules"
    :height="height"
    ></search-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import searchTable from "./components/searchTable.vue"
import res from "./res.json"


@Component({
  name:"App",
  components:{searchTable}
})
export default class App extends Vue {
  public formConfig = [
    {
      title:'姓名',
      code:'name',
      isRequired:true
    },
    {
      title:'性别',
      code:'sex',
      type:'select',
      isRequired:false,
      options:[
        {
          value:1,
          label:'女'
        },{
          value:2,
          label:'男'
        },{
          value:3,
          label:'还有'
        },{
          value:4,
          label:'还有'
        }
      ]
    },
    {
      title:'住址',
      code:'address',
      isRequired:false,
    },
  ]

  public tableHeaderConfig = [
    {
      prop:'name',
      label:'姓名'
    },{
      prop:'sex',
      label:'性别'
    },{
      prop:'phone',
      label:'电话'
    },{
      prop:'address',
      label:'住址'
    }
  ]
  public filterData:Object = {
    name:'',
    sex:''
  }
  public formRules:Object = {
    name:[
           {required: true, message:'请输入姓名', trigger:'blur'}
         ]
  }
  public tableData = []
  public size:String = 'small'
  public height:Number = document.getElementById("app").offsetHeight

  mounted(){

  }

  getList(params,num){
    setTimeout(() => {
      this.tableData = res;
    },300)
  }
}
 
</script>


<style lang="scss">
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  height: 90%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
