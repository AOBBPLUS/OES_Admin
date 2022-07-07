<template>
  <div class="app-container">
    <!-- Banner列表 -->
     <el-form label-width="120px">
      <el-form-item label="Banner标题">
        <el-input v-model="Banner.title"/>
      </el-form-item>
      <el-form-item label="Banner排序">
        <el-input-number v-model="Banner.sort" controls-position="right" :min="0"/>
      </el-form-item>

      <el-form-item label="Banner图片">
          <!-- <pan-thumb :image="Banner.imageUrl"/> -->
            <el-upload
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :action="BASE_API+'/ossservice/oss/uploadAvatarFile'"
                class="avatar-uploader">
                <img :src="Banner.imageUrl">
            </el-upload>

        </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>

import Banner from '@/api/Banner'
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
export default {
  components: { ImageCropper, PanThumb },

  data() {
    return {
      saveBtnDisabled:false,
      //url:'https://img2.huashi6.com/images/resource/2009/01/24/28h33392p0.jpg',//测试图片
      Banner:{
        //id:'',    //id
        title: '', // 标题
        sort: 0,  // 排序
        imageUrl: 'https://img2.huashi6.com/images/resource/2009/01/24/28h33392p0.jpg'  // 图片地址
      },
      // https://img2.huashi6.com/images/resource/2009/01/24/28h33392p0.jpg
      id:'',//bannerid
      //上传弹框组件是否显示 
      // imagecropperShow:false,
      // imagecropperKey:0,//上传组件key值
      BASE_API:process.env.BASE_API, //获取dev.env.js里面地址
      saveBtnDisabled:false  // 保存按钮是否禁用,
    }
  },
  created() { //页面渲染之前执行
    this.init()
  },
  watch: {  //监听
    $route(to, from) { //路由变化方式，路由发生变化，方法就会执行
      this.init()
    }
  },
  methods:{
    getInfo(id) {
      Banner.getBannerInfo(id)
        .then(response => {
          this.Banner = response.data.banner
        })
    },
    init() {
      //判断路径有id值,做修改
      if(this.$route.params && this.$route.params.id) {
          //从路径获取id值
          const id = this.$route.params.id
          //调用根据id查询的方法
          this.getInfo(id)
      } else { //路径没有id值，做添加
        //清空表单
        this.Banner = {}
        this.Banner.imageUrl="https://img2.huashi6.com/images/resource/2009/01/24/28h33392p0.jpg"
      }
    },
    //上传封面成功调用的方法
        handleAvatarSuccess(res, file) {
            //this.Banner.imageUrl={}
            
            this.Banner.imageUrl = res.data.url
            this.$forceUpdate();
            
        },
        //上传之前调用的方法
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg'
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传Banner图片只能是 JPG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传Banner图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
    //根据Bannerid查询的方法
    
    saveOrUpdate() {
      //判断修改还是添加
      //根据Banner是否有id
      if(!this.Banner.id) {
        //添加
        this.saveBanner()
      } else {
        //修改
        this.updateBanner()
      }
    },
    //修改Banner的方法
    updateBanner() {
      Banner.updateBannerInfo(this.Banner)
        .then(response => {
          //提示信息
          this.$message({
              type: 'success',
              message: '修改成功!'
          });
          //回到列表页面 路由跳转
          this.$router.push({path:'/cms/banner/list'})
        })
    },
    //添加Banner的方法
    saveBanner() {
      Banner.addBannerInfo(this.Banner)
        .then(response => {//添加成功
          //提示信息
          this.$message({
              type: 'success',
              message: '添加成功!'
          });
          //回到列表页面 路由跳转
          this.$router.push({path:'/cms/banner/list'})
        })
    }

  }
}
</script>
