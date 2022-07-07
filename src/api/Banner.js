import request from '@/utils/request'
export default {
    //1 根据id获取banner信息
    getBannerInfo(bannerId) {
        return request({
            url: `/cmsservice/bannerAdmin/getBannerInfo/`+bannerId,
            method: 'get'
          })
    },
    //2 分页查询banner信息
    pageQueryBannerInfo(index,limit,bannerQuery) {
        return request({
            url: `/cmsservice/bannerAdmin/pageQueryBannerInfo/${index}/${limit}`,
            method: 'post',
            data: bannerQuery
          })
    },
    //3 添加banner信息
    addBannerInfo(Banner) {
        return request({
            url: `/cmsservice/bannerAdmin/addBannerInfo`,
            method: 'post',
            data: Banner
          })
    },
    //4 更新banner信息
    updateBannerInfo(Banner) {
        return request({
            url: `/cmsservice/bannerAdmin/updateBannerInfo`,
            method: 'post',
            data: Banner
          })
    },
    //5 根据banner id删除banner数据
    deleteBannerInfo(bannerId) {
        return request({
            url: `/cmsservice/bannerAdmin/deleteBannerInfo/`+bannerId,
            method: 'delete'
          })
    },
}