// components/u-form/number-range/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type: Number,
      value: Number.MAX_VALUE
    },
    min: {
      type: Number,
      value: -(2^53-1)
    },
    maxValue: {
      type: Number,
      value: 0
    },
    minValue: {
      type: Number,
      value: 0
    },
    disable: {
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

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onMaxValue (e) {
      this.setData({
        maxValue: e.detail,
        error: this.data.minValue > e.detail
      })
      this.triggerEvent('input', {
        minium: this.data.minValue,
        maxium: this.data.maxValue
      })
    },
    _onMinValue (e) {
      this.setData({
        minValue: e.detail,
        error: this.data.maxValue < e.detail
      })
      this.triggerEvent('input', {
        minium: this.data.minValue,
        maxium: this.data.maxValue
      })
    }
  }
})
