// components/cpn-tab-a/cpn-tab-a.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: ['首页', '分类', '我的']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    botB: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cpn_clk_tab(event) {
      // 需要data-index绑定index值
      const index = event.target.dataset.index;
      this.setData({
        botB: index
      });
      // 传递参数
      this.triggerEvent('cpn_clk_tab', {index: index, title: this.properties.title[index]}, {});
    }
  }
})
