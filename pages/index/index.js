import request from '../../service/network.js'
Page({
  data: {
    bannerImg: [],
    bannerImgUrl: ['./url1/url', './url2/url', './url3/url', './url4/url'],
    textAr: ['模块1', '模块2', '模块3', '模块4'],
    listImg: [],
    mall: [],
    mallIndex: 0,
    detail: '/pages/detail/detail',
    showBackTop: false,
    isTabFixed: false
  },

  // mall查看详细信息
  clk_detail(event) {
    // console.log(event);
    const This = this;
    // 获取mall的下标
    var index = parseInt(event.detail.index);
    // console.log(index);
    var mallIndex = This.data.mallIndex;
    var data = '?mallIndex=' + mallIndex + '&mallIndexIndex=' + index;
    wx.navigateTo({
      url: This.data.detail + data,
    })
  },

  // tab分类切换显示数据
  cpn_clk_tab(event) {
    var index = event.detail.index;
    // console.log(index);
    this.setData({
      mallIndex: index
    });
    request({
      url: 'http://x0.ifengimg.com/cmpp/2020/0519/9a0b50fdd6ac3c1.html'
    }).then(res => {
      // console.log(res);
      switch (index) {
        case 0:
          this.setData({
            mall: res.data.data.mall1
          })
          break;
        case 1:
          this.setData({
            mall: res.data.data.mall2
          })
          break;
        case 2:
          this.setData({
            mall: res.data.data.mall3
          })
          break;
      }
    });
  },

  // 轮播图跳转
  banner_image(event) {
    // console.log(event);
    const This = this;
    // 获取轮播图bannerImg的下标
    var index = parseInt(event.detail.index);
    wx.navigateTo({
      url: This.data.bannerImgUrl[index],
    })
  },

  // 模块点击跳转显示相对应的信息
  clk_viewcls(event) {
    // console.log(event);
    const This = this;
    var index = parseInt(event.detail.index);
    var data = '?name=' + this.data.textAr[index];
    wx.navigateTo({
      url: './url1/url' + data
    })
  },
 
  // 页面加载处理数据
  onLoad: function (options) {
    request({
      url: 'http://x0.ifengimg.com/cmpp/2020/0519/9a0b50fdd6ac3c1.html'
    }).then(res => {
      // console.log(res);
      // 获取url中的bannerImg数组
      var bannerImg = res.data.data.bannerImg;
      this.setData({
        bannerImg: bannerImg,
        listImg: bannerImg,
        // 默认显示分类一
        mall: res.data.data.mall1
      })
    });
  },

  //监听页面滚动到底部 
  onReachBottom() {
    // console.log('滚动至底部');
    // const This = this;
    request({
      url: 'http://x0.ifengimg.com/cmpp/2020/0519/9a0b50fdd6ac3c1.html'
    }).then(res => {
      // console.log(res);
      switch (this.data.mallIndex) {
        case 0:
          // concat()向数组中插入数据
          this.setData({
            mall: this.data.mall.concat(res.data.data.mall1)
          })
          break;
        case 1:
          this.setData({
            mall: this.data.mall.concat(res.data.data.mall2)
          })
          break;
        case 2:
          this.setData({
            mall: this.data.mall.concat(res.data.data.mall3)
          })
          break;
      }
    });
  },

  // 监听页面滚动
  onPageScroll(options) {
    // console.log(options);
    var scrollTop = options.scrollTop;
    var flagTop = scrollTop > 1000;
    var flagFixed = scrollTop > 650;
    if (flagTop != this.data.showBackTop) {
      this.setData({
        showBackTop: flagTop
      });
    };
    if (flagFixed != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flagFixed
      });
    }
  }
})
 