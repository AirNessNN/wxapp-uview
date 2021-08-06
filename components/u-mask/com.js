// components/u-mask/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Boolean,
      value: false
    }
  },

  observers: {
    'value': function (value) {
      if (this.data.show != value) {
        this.setData({
          show: value,
          inited: true
        })
      }
      return value
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inited: false,
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _none () {
      
    },
    _tap () {
      this.triggerEvent('MaskTap', null)
    }
  }
})
