// components/cpn-back-top/cpn-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    clk_backTop() {
      // console.log('回顶部');
      wx.pageScrollTo({
        scrollTop: 0,
        complete: (res) => {},
      })
    }
  }
})
