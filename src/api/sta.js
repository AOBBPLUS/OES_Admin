import request from '@/utils/request'
export default {
    //1 生成统计数据
    createStaData(day) {
        return request({
            url: '/statisticsservice/statistics/registerMemberCount/'+day,
            method: 'post'
          })
    },
    //2 获取统计数据
    getDataSta(searchObj) {
        return request({
            url: `/statisticsservice/statistics/getStatisticsData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
            method: 'get'
          })
    }
}