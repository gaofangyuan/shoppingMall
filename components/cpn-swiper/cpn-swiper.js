// components/cpn-swiper/cpn-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bannerImg: {
      type: Array,
      value: []
    }
  },
  options: {
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  // externalClasses: ['banner', 'banImg'],
  /**
   * 组件的方法列表
   */
  methods: {
    banner_image(event) {
      // 获取下标
      // console.log(event);
      var index = parseInt(event.target.dataset.index);
      var bannerImg = event.target.dataset.src;
      // console.log(bannerImg);
      // 传递下标
      this.triggerEvent('banner_image', {'index': index, 'src': bannerImg}, {});
    }
  }
})
