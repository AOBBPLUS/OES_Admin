import request from '@/utils/request'
export default {
    //1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/addCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: '/eduservice/teacher/getAllTeacherInfo',
            method: 'get'
          })
    },
    //根据课程id查询课程基本信息
    getCourseInfo(id) {
        return request({
            url: '/eduservice/course/getCourseInfo/'+id,
            method: 'get'
          })
    },
    //修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/updateCourseInfo/',
            method: 'post',
            data: courseInfo
          })
    },
    /* //x修改课程大纲
    updateCourseChapter(){
        return request({
            url: '/eduservice/course/updateCourseInfo',
            method: 'post',
            data: courseInfo
          })
    }, */
    
    //课程确认信息显示
    getPublishCourseInfo(id) {
        return request({
            url: '/eduservice/course/getPublishCourseInfo/'+id,
            method: 'get'
          })
    },
    //课程最终发布
    publishCourse(id) {
        return request({
            url: '/eduservice/course/publishCourse/'+id,
            method: 'post'
          })
    },
    //TODO 课程列表
    getAllCourseInfo() {
        return request({
            url: '/eduservice/course/getAllCourseInfo/',
            method: 'get'
          })
    },
    //根据id删除课程
    deleteCourse(id){
        return request({
            url: '/eduservice/course/deleteCourse/'+id,
            method: 'delete'
          })
    },
    //分页查询
    pageQueryCourseInfo(index,limit,courseQuery){
        return request({
            url: `/eduservice/course/pageQueryCourseInfo/${index}/${limit}`,
            method: 'post',
            data:courseQuery
        })
    }
    
}
