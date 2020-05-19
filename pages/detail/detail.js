import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mallDetail: [],
    mallIndex: 0,
    mallIndexIndex: 0
  },

  banner_image(event) {
    // console.log(event);
    var src = event.detail.src;
    wx.previewImage({
      urls: src,
      current: src[0]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var mallIndex = parseInt(options.mallIndex);
    var mallIndexIndex = parseInt(options.mallIndexIndex);
    this.setData({
      mallIndex: mallIndex,
      mallIndexIndex: mallIndexIndex
    });

    request({
      url: 'http://10.168.1.197:8020/test/json.json'
    }).then(res => {
      // console.log(res);
      switch (mallIndex) {
        case 0:
          this.setData({
            mallDetail: res.data.data.mall1[mallIndexIndex]
          });
          break;
        case 1:
          this.setData({
            mallDetail: res.data.data.mall2[mallIndexIndex]
          })
          break;
        case 2:
          this.setData({
            mallDetail: res.data.data.mall3[mallIndexIndex]
          })
          break;
      }
    });

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