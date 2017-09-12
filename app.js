//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  getAppid: function (bc) {
    var that = this;
    if (that.globalData.appid != "") {
      bc(that.globalData.appid);
    } else {
      //调用微信登录接口
      wx.login({
        success: function (loginCode) {
          that.globalData.appid = loginCode.code;
          bc(loginCode.code);
        }
      })
    }
  },
  authorize : function(type, cb){
      let that = this;
      // $scopeLists = ['scope.userInfo', 'scope.address', 'scope.userLocation'];

      wx.getSetting({
          success: (res) => {
              if(res.authSetting[type] === false){
                  wx.authorize({
                      scope: type,
                      success() {
                          that.callback({statusCode : 1, data: true}, cb)
                      },
                      fail(){
                          that.callback({statusCode : 0, data: false}, cb)
                      }
                  });
              }else{
                  that.callback({statusCode : 1, data: true}, cb)
              }
          }
      })

  },
  callback : function(res, cb){
      if (typeof cb === "object" || typeof cb === "function") {
          if (typeof cb === "function") {
              cb(res);
              return true;
          }

          if (res.statusCode === 1) {
              if (typeof cb.success === "function") {
                  cb.success(res);
              }
          } else {
              if (typeof cb.fail === "function") {
                  cb.fail(res);
              }
          }

          if (typeof cb.complete === 'function') {
              cb.complete(res);
          }
      }

      return res;
  },
  //封装获取数据的方式
  ajax: function (url, data, fun, post) {
    console.log(url);
    wx.showLoading({
      title: '加载中',
    });
    var method = "POST";
    var header = {
      'content-type': 'application/json'
    };
    if (post) {
      method = "POST";
      header = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
    }
    //获取数据
    wx.request({
      url: url,
      method: method,
      data: data,
      dataType:'json',
      // header: header,
      success: function (res) {
        console.log(url);
        console.log(JSON.stringify(res));
        if(res.data.status == 1){
          wx.hideLoading();
          var data = {
            errcode: '0',
            data: res.data.result
          }
          fun(data);
        }else{
          wx.hideLoading();
          var message = "获取数据失败";
          if(res.data.message){
            message = res.data.message;
          }
          wx.showToast({
            title: message,
            icon: 'loading',
            duration: 2000
          })
        }
      },
      fail: function(res){
        console.log('fail data======' + JSON.stringify(data));
        console.log('fail res======' + JSON.stringify(res));
        wx.hideLoading();
        wx.showToast({
          title: '接口调用失败',
          icon: 'loading',
          duration: 2000
        })
      }
    });
  },
  globalData: {
    appid: "",
    menu: {
      cost: 0,
      number: 0,
      menu: []
    },
    wmmenu: {
      cost: 0,
      number: 0,
      menu: []
    },
    pdmenu: {
      cost: 0,
      number: 0,
      menu: []
    }
  }
})
