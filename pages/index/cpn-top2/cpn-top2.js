// pages/index/cpn-top2/cpn-top2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listImg: Array,
    textAr: Array
  },
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clk_viewcls(event) {
      var index = parseInt(event.currentTarget.dataset.index);
      this.triggerEvent('clk_viewcls', {'index': index}, {})
    }
  }
})
