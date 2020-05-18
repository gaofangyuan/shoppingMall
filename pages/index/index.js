import request from '../../service/network.js'
Page({
  data: {
    bannerImg: [],
    bannerImgUrl: ['./url1/url', './url2/url', './url3/url', './url4/url'],
    textAr: ['模块1', '模块2', '模块3', '模块4'],
    listImg: []
  },
  banner_image(event) {
    // console.log(event);
    const This = this;
    // 获取轮播图bannerImg的下标
    var index = parseInt(event.detail.index);
    wx.navigateTo({
      url: This.data.bannerImgUrl[index],
    })
  },
  clk_viewcls(event) {
    // console.log(event);
    const This = this;
    var index = parseInt(event.detail.index);
    var data = '?name=' + this.data.textAr[index];
    wx.navigateTo({
      url: './url1/url' + data
    })
  },
 
  onLoad: function (options) {
    request({
      url: 'http://10.168.1.197:8020/test/json.json'
    }).then(res => {
      // console.log(res);
      // 获取url中的bannerImg数组
      var bannerImg = res.data.data.bannerImg;
      this.setData({
        bannerImg: bannerImg,
        listImg: bannerImg
      })
    });
  }
})
 