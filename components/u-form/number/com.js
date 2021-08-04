// components/u-form/number/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: Number.MAX_VALUE
    },
    min: {
      type: Number,
      value: -(2^53-1)
    },
    disable: {
      type: Boolean,
      value: false
    },
    warn: {
      type: Boolean,
      value: false
    },
    dense: {
      type: Boolean,
      value: false
    },
    unit: {
      type: String,
      value: null
    }
  },

  observers: {
    'value': function (val) {
      const b = val > this.data.max || val < this.data.min
      if (b != this.data.error){
        this.setData({
          error: b
        })
      }
      return val
    },
    'disable': function (val) {
      if (val) {
        this.setData({
          input: false
        })
      }
      return val
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    input: false,
    error: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onTap () {
      this.setData({
        input: true
      })
    },
    _onFocus () {
      console.log('')
    },
    _onLoseFocus () {
      this.setData({
        input: false
      })
    },
    _onInput (e) {
      this.triggerEvent('value', e.detail.value)
      this.setData({
        value: e.detail.value
      })
    },
    _none () {

    }
  }
})
