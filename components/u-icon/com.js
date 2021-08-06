// components/u-icon/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: 'icon-a-68-01'
    },
    large: {
      type: Boolean,
      value: false
    },
    xLarge: {
      type: Boolean,
      value: false
    },
    small: {
      type: Boolean,
      value: false
    },
    style: {
      type: String,
      value: null
    },
    size: {
      type: String,
      value: '28'
    },
    color: {
      type: String,
      value: 'var(--primary)'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: null
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
