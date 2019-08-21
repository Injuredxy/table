<template>
  <div>
    表格
  </div>
</template>

<script>
export default {
  data(){
    return{
      pageRequest:{
        rows:10,
        page:1,
        sidx:"",     // 排序列
        sort:"",       // 排序类型
      },
      tableList:[]
    }
  },
  mounted(){
    this.getList();
  },
  methods:{
    getList(){
      this.$http.get('/Qzd_CodeDemo/wkd_det/GetList').then((res)=>{
        console.log(res.data)
        if(res.data.code == 200){
          this.tableList = res.data.data;
        }else{    
          this.$message.error(res.data.info); 
        }
      }).catch((res)=>{
        this.$message.error(res.data.info);        
      })

    }
  }
}
</script>

<style>

</style>
