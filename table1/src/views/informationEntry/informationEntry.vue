<template>
  <div class="entry_box">
    <div class="top">
      <p>生产管理 > 车间数据录入</p>
      <div>
        <el-button size="small" class="top_btn" @click="submitForm" >提交</el-button>
        <el-button size="small" class="top_btn" >取消</el-button>
      </div>
    </div>
    <div class="content">
        <p>
          <span style="color:red">* </span>工单号: <input type="text" @blur="searchData" v-model="formData.wk_no" placeholder="QAD工单号" class="inp1 fofo">
        </p>
        <p>
          <span style="color:red">* </span> &nbsp;&nbsp;&nbsp;
          日期:  <input id="meeting"   style="margin-right:55px" v-model="formData.wk_date" disabled class="inp1" /> 
          车间: <input type="text" v-model="formData.wk_workshop_id" disabled class="inp1"><span style="color:red">* </span>
          线别: <input type="text"  v-model="formData.wk_line" placeholder="单行输入"  class="inp1 fofo">
          班别: <select class="inp1 select_inp fofo" v-model="formData.wk_classes_id"  >
                  <option selected disabled style="display:none">请选择</option>
                  <option value ="早">早</option>
                  <option value="晚">晚</option>
                </select>
        </p>
        <p>
          <span style="color:red">* </span>
          机台号: <input type="text" v-model="formData.wk_machine"  placeholder="单行输入" class="inp1 fofo" />
          生产方式: <select class="inp1 fofo" style="border-radius: 5px;" v-model="formData.wk_mode_id"  >
                      <option selected disabled style="display:none">请选择</option>
                      <option value ="量产">量产</option>
                      <option value="制样">制样</option>
                      <option value="试样">试样</option>
                      <option value="返工">返工</option>
                  </select>
        </p>
    </div>
    <div class="content">
      计划量：<input v-model="formData.wk_plan_qty" type="number" placeholder="0.0" class="inp2 fofo" />
      实际产出良品量：<input v-model="formData.wk_real_qty" type="number" placeholder="0.0" class="inp2 fofo" />
      入库数量：<input  v-model="formData.wk_in_qty" placeholder="0.0" type="number" class="inp2 fofo" />
      设备包工工时(小时)：<input v-model="formData.wk_timesheet_time" type="number" placeholder="0.0" class="inp2 fofo" />
      损失工时汇总(小时)：<input v-model="formData.wk_loss_time" type="number" placeholder="0.0" class="inp2 fofo" />
    </div>
    <div class="content other_content"  >
      <table class="table_cont" >
        <tr class="first_tr">
          <td></td>
          <td>员工</td>
          <td>技术员</td>
          <td>班长/班助</td>
          <td>物料员</td>
          <td>外观员</td>
          <td>包装</td>
          <td>打签员</td>
          <td>修理</td>
          <td>QC</td>
          <td>其他后勤人员</td>
        </tr>
        <tr>
          <td>正在出勤：</td>
          <td class="bor">
              <input  placeholder="0.0" type="number"  @input="clearNoNum" v-model="formData.wk_normal_worker" class="inppp tab_inp totalNum fofo"  />
          </td>
          <td class="bor">
            <input type="number" placeholder="0.0" @input="clearNoNum" v-model="formData.wk_normal_technician"  class="inppp tab_inp totalNum fofo" />
          </td>
          <td class="bor"><input type="number" @input="clearNoNum"  placeholder="0.0" v-model="formData.wk_normal_assistant" class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_material"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_appearance"  class="inppp tab_inp totalNum fofo"></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_package"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_label"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_repairman"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_qc"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_normal_others"  class="inppp tab_inp totalNum fofo" /></td>
        </tr>
        <tr>
          <td>加班出勤：</td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_worker"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_technician"   class="inppp tab_inp totalNum fofo"></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_assistant" class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_material"   class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum"  placeholder="0.0" v-model="formData.wk_ot_appearance"   class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_package"   class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_label"   class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_repairman"   class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_qc"  class="inppp tab_inp totalNum fofo" /></td>
          <td class="bor"><input type="number" @input="clearNoNum" placeholder="0.0" v-model="formData.wk_ot_others"   class="inppp tab_inp totalNum fofo" /></td>
        </tr>
      </table>
    </div>
    <div class="content other_content desc" >
      项目名：<input v-model="formData.wo_project" placeholder="QAD取数" disabled class="inp2 l_inp fofo" />
      料号：<input v-model="formData.wo_part"  placeholder="QAD取数" disabled class="inp2 l_inp fofo" />
      制令数量：<input  v-model="formData.wk_order_qty"  placeholder="QAD取数" disabled class="inp2 l_inp fofo" />
      标准设备工时：<input v-model="formData.wr_time_machine"  placeholder="QAD取数" disabled class="inp2 l_inp fofo" />
      标准人工工时：<input v-model="formData.wr_time_worker" placeholder="QAD取数" disabled class="inp2 l_inp fofo" />
      <div class="line">
          <p>&nbsp;&nbsp;&nbsp;描述：</p>
          <textarea disabled v-model="formData.pt_desc1" placeholder="QAD取数"   class="area_inp"></textarea>
      </div>
    </div>
    <div class="content other_content" style="padding: 1% 2%;">
      不良品数合计：<input v-model="formData.wk_reject_qty" placeholder="计算" disabled class="inp2 ll_inp fofo fofo" />
      累计产出良品量：<input v-model="formData.wk_allreal_qty" placeholder="计算" disabled class="inp2 ll_inp fofo fofo" />
      累积入库量：<input  v-model="formData.wk_allin_qty" placeholder="计算" disabled class="inp2 ll_inp fofo fofo" />
      总人工工时：<input  v-model="formData.wk__chr01" placeholder="计算" disabled class="inp2 ll_inp fofo fofo" />
      损失工时合计：<input  v-model="formData.wk__chr02" placeholder="计算" disabled class="inp2 ll_inp fofo fofo" />
    </div>
    <div class="content other_content">
      <span style="margin-right:20px;">不良品：</span>
      <span class="mar_span">责任部门：</span><el-select size="mini" v-model="wkd_wk_dept_id" @change="selectDeptName"  filterable placeholder="请选择">
                  <el-option v-for="(item,index) in deptarmentList" :key="index" :label="item.wk_dept_desc" :value="item.wk_dept_id"></el-option>
                </el-select>
      <span class="mar_span">原因：</span><el-select size="mini" v-model="wkd_wk_reason_id" @change="selectReasonName" filterable placeholder="请选择">
                  <el-option  v-for="(item,index) in reasonList" :key="index" :value="item.wk_reason_id" :label="item.wk_reason_desc" ></el-option>
                </el-select>
      <span class="mar_span">数量：</span><input type="text"  v-model="wkd_qty" placeholder="数量"   style="width:100px;height:30px;border-radius:5px;border-color:#DCDFE6;" class="inp1 fofo otherInp">
      <el-button @click="saveTabList" size="mini">保存</el-button>
      <table class="table_cont list_table" >
        <tr  style="text-align:center">
            <td>责任部门</td>
            <td>数量</td>
            <td>原因</td>
            <td>操作</td>
        </tr>
        <tr v-for="(item,index) in tableData" :key="index">
          <td>{{item.wkd_wk_dept_desc}}</td>
          <td>{{item.wkd_qty}}</td>
          <td>{{item.wkd_wk_reason_desc}}</td>
          <td><el-button type="text">编辑</el-button>
            <el-button type="text" @click="cancel(index)">删除</el-button></td>
        </tr>
        <tr>
          <td colspan="4" v-if="tableData.length == 0">暂无数据</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      formData:{
        keyValue:'',
        wk_id:'',   
        wk_no:'',                // 工单号
        wk_date:'',       // 日期
        wk_workshop_id:'ID', // 车间ID
        wk_line:'',        // 线别
        wk_classes_id:'早',   // 班别
        wk_machine:'',      // 机台号
        wk_mode_id:'量产',      //  生产方式
        wk_plan_qty:'',     // 计划量
        wk_real_qty:'',     // 实际产出良品量
        wk_in_qty:'',       // 入库数量        
        wk_timesheet_time:'',  // 设备包工工时(小时)
        wk_loss_time:'',      // 损失工时汇总(小时)
        wk_normal_worker:null,      //员工
        wk_normal_technician:null,  // 技术员
        wk_normal_assistant :null,  // 班长
        wk_normal_material :null,     // 物料员
        wk_normal_appearance :null,     // 外观员
        wk_normal_package:null,         // 包装
        wk_normal_label:null,           // 打签员
        wk_normal_repairman:null,       // 修理
        wk_normal_qc:null,              // QC
        wk_normal_others:null,          // 其他后勤人员
        wk_ot_worker:null,
        wk_ot_technician:null,
        wk_ot_assistant :null,
        wk_ot_material :null,
        wk_ot_appearance :null,
        wk_ot_package:null,
        wk_ot_label:null,
        wk_ot_repairman:null,
        wk_ot_qc:null,
        wk_ot_others:null,
        wk_reject_qty:'0',
        wk_allreal_qty:'',
        wk_allin_qty:'',
        wo_project:'',     //  项目名:  
        wo_part:'',        // 料号: 
        wk_order_qty:'',      // 制令数量: 
        wr_time_machine:'',   // 标准设备工时: 
        wr_time_worker:'',    // 标准人员工时:
        pt_desc1:'',        // 描述: 
        wk__chr01:'0',    // 总人工工时
        wk__chr02:'',    // 损失工时
        // wkd_det_List:''   // 表格数据
      },
      tableData:[],
      deptarmentList:[],
      reasonList:[],      
      wkd_wk_dept_id:'',
      wkd_wk_reason_id:'',
      wkd_qty:'',
      wkdWkDeptName:'',
      wkdWkReasonName:''
    }
  },
  created(){
    let timestamp3 = new Date().getTime()
    this.formData.wk_date = this.changeTime(timestamp3);
  },
  mounted(){
    $(function() {  
      $(".fofo").keypress(function(e) {  
      if (e.which == 13) {// 判断所按是否回车键  
          var inputs = $(".fofo"); // 获取表单中的所有输入框  
          var idx = inputs.index(this); // 获取当前焦点输入框所处的位置  
          if (idx == inputs.length - 1) {// 判断是否是最后一个输入框  
              // if (confirm("最后一个输入框已经输入,是否提交?")) // 用户确认  
              // $(".fofo").submit(); // 提交表单  
          } else {  
              inputs[idx + 1].focus(); // 设置焦点  
          }  
          return false;// 取消默认的提交行为  
        }  
        });  
    }); 
    // // 获取部门信息
    this.$http.get('/Qzd_CodeDemo/wk_dept/GetList').then((res)=>{
      // console.log(res);
      this.deptarmentList = res.data.data;
      // console.log(this.deptarmentList);
    }).catch((res)=>{
      this.$message.error(res.data.info)
    })
    // // 获取原因信息
    this.$http.get('/Qzd_CodeDemo/wk_reason/GetList').then((res)=>{
      // console.log(res)
        this.reasonList = res.data.data;
      }).catch((res)=>{
        this.$message.error(res.data.info)
    })    
    // let img_url =[];
    // let num = 0;
    // $(".totalNum").each(function(){
    //     img_url.push($(this).val());
    // })
    // for(let i=0;i<img_url.length;i++){
    //   num += parseFloat(img_url[1]);
    // }
    // this.formData.wk__chr01 = num.toFixed(1) || 0;

  },
  methods:{
    searchData(){
        //获取制令行项目名数量
      this.$http.get(`/Qzd_CodeDemo/wo_mstr/getlist?queryjson={"wo_lot":"${this.formData.wk_no}","wo_domain":"SWSX"}`).then((res)=>{
        // console.log(res.data.data)
        let length = res.data.data.length;
        let obj = res.data.data[length-1];
        this.formData.wo_project = obj.wo_project || '';
        this.formData.wo_part = obj.wo_part || '';
        this.formData.wk_order_qty = obj.wo_qty_ord || '';
      }).catch((res)=>{
        this.$message.error(res.data.info)
      })
      this.$http.get(`/Qzd_CodeDemo/wr_route/GetStandarStatistics?queryjson={"wr_domain":"SZWS","wr_lot":"${this.formData.wk_no}"}`).then((res)=>{
        // console.log(res.data.data)
        let obj = res.data.data[0];
        this.formData.wr_time_machine = obj.total_wr_setup || '';
        this.formData.wr_time_worker = obj.total_wr_run || '';
      }).catch((res)=>{
        this.$message.error(res.data.info)
      })
      this.$http.get('/Qzd_CodeDemo/pt_mstr/getList?queryjson={"pt_part":"1101000045","pt_domain":"SWSX"}').then((res)=>{
        // console.log(res.data.data)
        let obj = res.data.data[0];
        this.formData.pt_desc1 = obj.pt_desc1 || '';
      }).catch((res)=>{
        this.$message.error(res.data.info)
      })
      // 获取统计数
      this.$http.get('/Qzd_CodeDemo/wk_mstr/GetDataStatistics?queryJson={"wr_domain":"1101000045","wr_route":"SWSX"}').then((res)=>{
        // console.log(res.data.data)
        let obj = res.data.data[0];
        this.formData.wk_allreal_qty = obj.total_wk_real_qty;
        this.formData.wk_allin_qty = obj.total_wk_in_qty;
        this.formData.wk__chr02 = obj.total_wk_loss_time;
      }).catch((res)=>{
        this.$message.error(res.data.info)
      })
    },
    changeTime(val){
      let date = new Date(val);
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() + ' ';
      let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      let lastTime = Y + M + D + h + m + s;
      return lastTime;
    },
    saveTabList(){
      if(this.wkd_wk_deptId == ''|| this.wkd_wkReason_id == '' || this.wkd_qty == ''){
        this.$message('请填完信息')
        return;
      }
      if(!(/^-?[0-9]\d*$/.test(parseFloat(this.wkd_qty)))){
        this.$message('数量必须是整数')
        return;
      }
      this.tableData.push({wkd_wk_dept_desc:this.wkdWkDeptName,wkd_wk_dept_id:this.wkd_wk_dept_id,wkd_qty:this.wkd_qty+'.00',wkd_wk_reason_desc:this.wkdWkReasonName,wkd_wk_reason_id:this.wkd_wk_reason_id});
      this.wkd_wk_dept_id = '';
      this.wkd_wk_reason_id = '';
      this.wkd_qty = '';
      let num = 0;
      for(let i=0;i<this.tableData.length;i++){
          num +=  parseFloat(this.tableData[i].wkd_qty);
      }
      this.formData.wk_reject_qty = num;
    },
    cancel(index){
      this.tableData.splice(index,1);
      let num = 0;
      for(let i=0;i<this.tableData.length;i++){
          num +=  parseFloat(this.tableData[i].wkd_qty);
      }
      this.formData.wk_reject_qty = num;
    },
    clearNoNum(e){
      let img_url =[];
      let num = 0;
      $(".totalNum").each(function(){
          img_url.push($(this).val());
      })
      for(let i=0;i<img_url.length;i++){
        num += parseFloat(img_url[i]);
      }
      this.formData.wk__chr01 = num.toFixed(1) || 0;
    },
    submitForm(){
      console.log(this.formData)
      for (var item in this.formData){
        if(this.formData[item] == '' && item != 'wk_id' && item != 'keyValue' && item != 'wo_project' ){
          this.$message('请填完所有信息')
          return
        }
      }
      this.formData.wkd_det_List = JSON.stringify(this.tableData);
      console.log(this.formData);
      let that = this;
      $.ajax({
        url: '/Qzd_CodeDemo/wk_mstr/SaveForm',
        type: 'POST', // GET
        async: true,
        contentType: 'application/json;charset=UTF-8',
        dataType: 'jsonp',
        data: JSON.stringify(this.formData),
        success: function(res) {
          that.$message({
            message: res.info,
            type: 'success'
          })
        }
      });


    },
    selectDeptName(e){
      let obj = {};
      obj = this.deptarmentList.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.wk_dept_id === e;//筛选出匹配数据
      });
      this.wkdWkDeptName = obj.wk_dept_desc;
      this.wkd_wk_dept_id = obj.wk_dept_id;
    },
    selectReasonName(e){
      let obj = {};
      obj = this.reasonList.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.wk_reason_id === e;//筛选出匹配数据
      });
      console.log(obj)
      this.wkdWkReasonName = obj.wk_reason_desc;
      this.wkd_wk_reason_id = obj.wk_reason_id;
    }
  }
}
</script>

<style>
.entry_box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
  font-size: 13px;
}
.top{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  padding: 0 30px;
  box-sizing: border-box;
}
.top p{
  line-height: 40px;
}
.top_btn{
  width:100px;
}
.content{
  width: 95%;
  min-height: 50px;
  margin: 8px auto;
  box-shadow: 0px 0px 1px 2px #f7f7ff;
  border: 1px solid #eeeeee;
  line-height: 50px;
  padding: 10px 5%;
  box-sizing: border-box;
}
.other_content{
  padding: 10px 2% ;
  box-sizing: border-box;
}
.inp1{
  margin-right: 30px;
  width: 15%;
  height: 28px;
  border: 1px solid #DCDFE6;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #545454; 
  padding-left: 10px;
  box-sizing: border-box;
}
.select_inp{
  width: 8%;
  margin-right:10%;
  border-radius: 5px;
}
.inp2{
  margin-right: 2%;
  width: 8%;
  height: 30px;
  border: 1px solid #ccc;
  padding-left: 10px;
  box-sizing: border-box;
}
.area_inp{
  padding-left: 10px;
  box-sizing: border-box;
  width: 64.5%;
  max-width: 925px;
  min-width: 890px;
}
.line{
  display: flex;
  margin-top: 10px;
}
.line p{
  height: 30px;
  line-height: 20px;
}
.line textarea{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #545454; 
}
.l_inp{
  width: 100px;
}
.ll_inp{
  width: 80px;
}
.table_cont{
  border-collapse:collapse;
}
tr{
  height: 40px;
}
.first_tr{
  text-align: center;
}
.bor{
  width: 100px;
  border: 1px solid #cccccc;
}
.inppp{
  padding-left: 10px;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #545454; 
}
.tab_inp {
  width:100px;
  height:40px;
  border:none;
}
.tab_inp /deep/ .el-input__inner{
  width:100px;
  height:40px;
  border:none;
}
.elform{
  width: 100px;
  display: flex;
  flex-direction: column;
}
.elform div p{
  display: inline-block;
}
.el-form-item{
  display: inline-block;
}
.set{
  width:200px;
}
.trrr{
  height: 50px;
  border-bottom: 1px solid #EBEEF5;
}
.trrr td{
  width: 100px;
  text-align: center;
}
.list_table{
  width: 100%;
  text-align: center;
}
.list_table tr{
  border-bottom: 1px solid #ccc;
}
.list_table td{
  width: 10%;
}
.mar_span{
  margin-left: 20px; 
}
.otherInp::-webkit-input-placeholder {    
  color: #C0C4CC;     
}
</style>
