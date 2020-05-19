// components/cpn-mall-a/cpn-mall-a.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mall: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  options: {
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clk_detail(event) {
      // 获取下标
      // console.log(event);
      var index = parseInt(event.currentTarget.dataset.index);
      // console.log(bannerImg);
      // 传递下标
      this.triggerEvent('clk_detail', {'index': index}, {});
    }
  }
})
