// components/u-switch/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: Boolean,
      value: false
    },
    disable: {
      type: Boolean,
      value: false
    },
    large: {
      type: Boolean,
      value: false
    },
    small: {
      type: Boolean,
      value: false
    }
  },
  lifetimes: {
    attached () {
      if (this.properties.large) {
        this.setData({
          size: 80,
          pd: 0
        })
      } else if (this.properties.small) {
        this.setData({
          size: 40,
          pd: 20
        })
      }
    }
  },
  observers: {
    'disable': function (disable) {
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstStart: true,
    size: 60,
    pd: 20,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _tap() {
      this.setData({
        value: !this.data.value,
        firstStart: false
      })
      this.triggerEvent("click", this.data.value)
    },
    _none () {}
  }
})
