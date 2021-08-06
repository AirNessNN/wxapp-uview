// components/u-form/option/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: 'option'
    },
    desc: {
      type: String,
      value: ''
    },
    dot: {
      type: Boolean,
      value: false
    },
    spacing: {
      type: Boolean,
      value: false
    },
    to: {
      type: String,
      value: null
    },
    toDesc: {
      type: String,
      value: ''
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
    _tap () {
      wx.navigateTo({
        url: this.data.to,
      })
    }
  }
})
