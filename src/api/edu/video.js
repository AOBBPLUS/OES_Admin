import request from '@/utils/request'
export default {

    //添加小节
    addVideo(video) {
        return request({
            url: '/eduservice/video/addVideo',
            method: 'post',
            data: video
          })
    },
    //修改小节
    updateVideoInfo(Video) {
        return request({
            url: '/eduservice/video/updateVideoInfo',
            method: 'post',
            data: Video
        })
    },
    //根据id查询小节
    getVideoInfo(videoId) {
        return request({
            url: '/eduservice/video/getVideoInfo/'+videoId,
            method: 'get'
          })
    },
    //删除小节
    deleteVideo(videoId) {
        return request({
            url: '/eduservice/video/deleteVideo/'+videoId,
            method: 'delete'
          })
    },
    //删除视频
    deleteAliyunvod(id) {
        return request({
            url: '/vodservice/video/deleteAliVideo/'+id,
            method: 'delete'
          })
    }

}