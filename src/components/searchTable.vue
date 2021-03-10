<template>
  <div class="searchTable">
    <div id="myForm">
      <el-form ref="myForm" :inline="true" :model="filters" label-width="80px" label-position="right" :rules="formRules">
        <!-- <el-row> -->
          <!-- <el-col v-for="item in formConfig" :key="item.code" :span="8"> -->
            <el-form-item 
            :prop="item.code"
            :label="item.title + ':'" 
            v-for="item in formConfig" 
            :key="item.code" 
            style="margin-right:15px"
            :required="item.isRequired">
              <el-select 
                style="width:220px" 
                :size="size" v-if="item.type == 'select'" 
                v-model="filters[item.code]" 
                :placeholder="`请输入${item.title}`" 
                clearable
                filterable>
                <el-option
                  v-for="subItem in item.options"
                  :label="subItem.label"
                  :value="subItem.value"
                  :key="subItem.value"
                ></el-option>
              </el-select>
              <el-input 
                v-else 
                :prop="item.code"
                v-model="filters[item.code]" 
                :placeholder="`请输入${item.title}`" 
                :size="size"
                clearable
                filterable>
              </el-input>
            </el-form-item>
          <!-- </el-col> -->
          <el-form-item>
            <el-button type="primary" size="small" @click="search">查询</el-button>
            <el-button type="primary" size="small" @click="reset">重置</el-button>
          </el-form-item>
        <!-- </el-row> -->
      </el-form>
    </div>
    <div id="myTable">
      <el-table
        border
        :data="tbData"
        :height="tableHeight"
      >
        <el-table-column type="index" align="center" label="序号" width="80"></el-table-column>
        <el-table-column v-for="item in tableHeaderConfig" :prop="item.prop" :label="item.label" align="center"></el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        layout="prev, pager, next, jumper"
        class="pagination"
        :total="totalItem"
      ></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch} from 'vue-property-decorator'

  @Component({name:"searchTable"})
  export default class searchTable extends Vue {
    // 初始化数据
    public _copy:Object = {};
    public currentPage:Number = 1;
    public totalItem:Number = 1;
    public tableHeight:Number = 0;

    @Prop({default(){
      return 'small'
    }})
    size: 'small' | 'mini' | 'medium'

    @Prop({})
    filters: Object

    @Prop({})
    formRules: Object

    @Prop({default(){
      return []
    }})
    tbData:[]

    @Prop({default(){
      return []
    }})
    formConfig:[]

    @Prop({default(){
      return []
    }})
    tableHeaderConfig:[]

    @Prop({default(){
      return 500
    }})
    height: Number

    // 监听从父组件传过来的值
    @Watch('tbData')
    getTbData(newVal:[],oldVal:[]){
      this.tbData = newVal;
    }

    // 生命周期钩子
    mounted () {
      this._copy = Object.assign({},this.filters);
      this.getTableHeight();
    }

    // 查询
    search(){
      (this.$refs['myForm'] as any).validate(valid =>{
        if(valid){
          this.$emit('search',this.filters,this.currentPage);
        }
      })
    }
    
    getTableHeight(){
      this.$nextTick(() =>{
        this.tableHeight = <number>this.height - <number>document.getElementById("myForm").offsetHeight - 50;
      })
    }

    //清空
    reset(){
      this.$emit('update:filters',Object.assign({},this._copy));
    }

    // 页码跳转
    handleCurrentChange(val){
      this.search();
    }

  }
</script>


<style lang="scss">
.searchTable{
  padding: 10px;
  .pagination {
    float: right;
    margin-top: 10px;
  }
}
</style>
