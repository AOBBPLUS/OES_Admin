import request from '@/utils/request'
export default {
    //获取订单信息
    getOrderInfo(orderId) {
        return request({
            url: `/orderservice/order/getOrderInfo/`+orderId,
            method: 'get'
        })
},
    pageQueryOrderInfo(index,limit){
        return request({
            url:`/orderservice/order/pageQueryOrderInfo/${index}/${limit}`,
            method: 'get'
        })
    }
}