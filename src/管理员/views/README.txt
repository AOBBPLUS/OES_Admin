本文件夹下包含了管理员前端各个功能页面的功能调用及实现
1. acl是权限管理主要包含：
    1.1 menu 菜单管理，引入api/acl/menu.js
	1.1.1 list.vue 菜单以列表形式体现
    1.2 role 角色管理，引入api/acl/role.js
	1.2.1 form.vue 角色添加
	1.2.2 list.vue 角色信息以列表形式体现
	1.2.3 roleForm.vue 角色分配
    1.3 user 用户管理，引入api/acl/user.js
	1.3.1 form.vue 用户添加
	1.3.2 list.vue 用户信息以列表形式体现
	1.3.3 roleForm.vue 用户分配

2. cms/banner是轮播图管理，引入api/Banner.js
    2.1 form.vue Banner添加
    2.2 list.vue Banner列表
3. dashboard是管理员中心页面，引入vuex.js
    index.vue 管理员主页
4. edu是与课程相关的管理
    4.1 course 课程管理，引入api/edu/course.js&&chapter.js&&publish.js&&video.js，富文本编辑器Tinymce
	4.1.1 chapter.vue 添加课程章节
	4.1.2 info.vue 编写课程基本信息
	4.1.3 list.vue 课程信息以列表形式体现
	4.1.3 publish.vue 发布课程
    4.2 subject课程分类管理api/edu/subject.js
	4.2.1 import.vue 导入课程分类模板
	4.2.2 list.vue 分类结果以列表形式体现
    4.3 teacher讲师管理api/edu/teacher.js
	4.3.1 form.vue 添加讲师信息
	4.3.2 list.vue 讲师信息以列表形式体现
5. layout是登出功能，引入/components的Navbar, Sidebar, AppMain组件及./mixin/ResizeHandler.js
    5.1 Layout.vue 登出功能
6. login是登入功能，引入api/login.js
    6.1 index.vue 登入主页
7. order是订单管理，引入api/order.js
    7.1 list.vue 订单信息以列表形式体现
8. statistics/daily是统计管理，引入api/sta.js
    8.1 chart.vue 生成统计数据
    8.2 creat.vue 以图表形式体现数据查询结果
9. 以上未说明文件均为框架文件