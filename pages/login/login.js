// pages/login/login.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultButton:'重新授权'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  loginBtn(){
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log(res)
              app.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo)
              wx.switchTab({
                url: '../logs/logs',
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '请重新授权',
          })
        }
      }
    })
  },
  getUserInfoTap(event){
    // 点击同意
    if (event.detail.userInfo) {
      wx.showToast({
        title: '授权成功',
        icon: 'success',
        duration: 1000
      })
      app.globalData.userInfo = event.detail.userInfo
    } else {
      this.setData({
          defaultButton: '重新授权'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})