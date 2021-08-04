// components/u-form/input/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    placeholder: {
      type: String,
      value: '请输入内容'
    },
    disable: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    focus: false,
    input: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _none () {

    },
    _tap () {
      this.setData({
        input: true
      })
    },
    _onBlur () {
      this.setData({
        input: false
      })
    },
    _input (e) {
      this.setData({
        value: e.detail.value
      })
      this.triggerEvent('input', e.detail)
    }
  }
})
