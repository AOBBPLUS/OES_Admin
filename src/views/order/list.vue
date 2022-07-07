<template>
  <div class="app-container">
    订单列表
    <!-- 表格 -->
    <el-table
      :data="list"
      border
      fit
      highlight-current-row>

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="nickname" label="用户昵称" width="80" align="center"/>
      <!-- <el-table-column prop="name" label="用户名" width="80" /> -->
      <el-table-column prop="mobile" label="用户手机" width="80" align="center"/>
      <el-table-column prop="courseTitle" label="购买课程" width="80" align="center"/>
    
      <!-- <el-table-column label="头衔" width="80">
        <template slot-scope="scope">
          {{ scope.row.level===1?'高级讲师':'首席讲师' }}
        </template>
      </el-table-column> -->
      <el-table-column prop="teacherName" label="课程讲师" align="center"/>
      <el-table-column prop="totalFee" label="课程价格" align="center"/>
      <el-table-column prop="status" label="支付状态" align="center"/>
      
      <el-table-column prop="payType" label="支付方式" align="center">
      <template slot-scope="scope">
          {{ scope.row.payType===1?'微信':'支付宝' }}
      </template>
      </el-table-column>
      <el-table-column prop="gmtCreate" label="添加时间" width="160" align="center"/>
    </el-table>

  <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />

  </div>
</template>
<script>
//引入调用teacher.js文件
import order from '@/api/order'
import teacher from '@/api/edu/teacher'
import course from '@/api/edu/course'
import subject from '@/api/edu/subject'

export default {
    //写核心代码位置
    // data:{
    // },
    data() { //定义变量和初始值
        return {
          list:null,//查询之后接口返回集合
          page:1,//当前页
          limit:10,//每页记录数
          total:0,//总记录数
          orderQuery:{} ,//条件封装对象
          orderInfo:{
              orderNo:'',//订单号
              courseId:'',//课程id
              courseTitle:'',//课程名称
              teacherName:'',//讲师名称
              nickname:'',//用户昵称
              mobile:'',//用户手机
              totalFee:'',//金额
              payType:'',//支付方式
              gmtCreate:'',//创建时间
        }
            
            
        }
    },
    created() { //页面渲染之前执行，一般调用methods定义的方法
        //调用
        this.getList() 
    },
    methods:{  //创建具体的方法，调用teacher.js定义的方法
        //讲师order的方法
        getList(page=1) {
            this.page = page
            order.pageQueryOrderInfo(this.page,this.limit)
                .then(response =>{//请求成功
                    //response接口返回的数据
                    //console.log(response)
                    this.list = response.data.orders
                    this.total = response.data.total
                    console.log(this.list)   
                    console.log(this.total)
                }) 
        },

        getOrderInfo(){
          order.getOrderInfo(id)
            .then(response => {
              this.order = response.data.order
            })

        }
 
    }
}
</script>
