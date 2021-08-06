// components/u-card-content/com.js
Component({
  relations: {
    '../u-form/selection/com': {
      type: 'child',
      linked: function (target) {
        console.log('u-card-content 已连接', target)
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    spacing: {
      type: Boolean,
      value: false
    }
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

  }
})
