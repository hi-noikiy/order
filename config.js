/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "https://api.";

var storeid = '&storeid=2&weid=3';

var ids = '&id=2&weid=3';

var config = {
    // 下面的地址配合云端 Server 工作
    host,
    // 登录地址，用于建立会话
    loginUrl: `https://${host}/login`,
    // 测试的请求地址，用于测试会话
    requestUrl: `https://${host}/testRequest`,
    // 用code换取openId
    openIdUrl: `https://${host}/openid`,
    // 测试的信道服务接口
    tunnelUrl: `https://${host}/tunnel`,
    // 生成支付订单的接口
    paymentUrl: `https://${host}/payment`,
    // 发送模板消息接口
    templateMessageUrl: `https://${host}/templateMessage`,
    // 上传文件接口
    uploadFileUrl: `https://${host}/upload`,
    // 下载示例图片接口
    downloadExampleUrl: `https://${host}/static/weapp.jpg`,
    //主页信息接口
    //index: "https://www.easy-mock.com/mock/59979e65059b9c566dc7bcc6/index/index",
    index: `${host}shanggao.wshoto.com/app/index.php?i=3&c=entry${ids}&do=detail_api&m=weisrc_dish`,
    //菜单信息
    //menu: "http://www.easy-mock.com/mock/59979e65059b9c566dc7bcc6/index/menu",
    menu: `${host}shanggao.wshoto.com/app/index.php?i=3&c=entry${storeid}&mode=4&do=menu_api&m=weisrc_dish`,
    //状态接口
    // wd: "http://www.easy-mock.com/mock/59979e65059b9c566dc7bcc6/index/state",
    wd: `${host}shanggao.wshoto.com/app/index.php?i=3&c=entry&do=order_api&m=weisrc_dish${storeid}`,
    //获取我的订单数据
    state:`${host}shanggao.wshoto.com/app/index.php?i=3&c=entry&do=orderdetail_api&m=weisrc_dish${storeid}`,
     //state: "http://www.easy-mock.com/mock/59979e65059b9c566dc7bcc6/index/stateq",
    //支付页面
    //payment: "http://www.easy-mock.com/mock/59979e65059b9c566dc7bcc6/index/payment",
    payment:`${host}shanggao.wshoto.com/app/index.php?i=3&c=entry${ids}&do=orderdetail_api&m=weisrc_dish${storeid}`,
    //待支付页面
    dcxz: "http://www.easy-mock.com/mock/59979e65059b9c566dc7bcc6/index/dcxz",
    //post点菜数据接口
    podc: `${host}shanggao.wshoto.com/app/index.php?i=3&c=entry${storeid}&mode=4&do=addtoorder_api&m=weisrc_dish`,
    //取消订单接口
    cancelorder_api: `${host}shanggao.wshoto.com/app/index.php?i=3&c=entry${storeid}&mode=4&do=cancelorder_api&m=weisrc_dish`
};

module.exports = config
