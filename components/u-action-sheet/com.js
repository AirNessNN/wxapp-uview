// components/u-action-sheet/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String,
      value: '500'
    },
    show: {
      type: Boolean,
      value: false
    },
    // 保留
    persistent: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: null
    },
    titleColor: {
      type: String,
      value: 'var(--primary)'
    }
  },

  observers: {
    'show': function (show) {
      if (show != this.data.value) {
        this.setData({
          inited: true,
          value: show
        })
      }
      return show
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inited: false,
    value: false,
    press: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _maskTap () {
      if (!this.data.persistent) {
        this.setData({
          value: false,
          show: false
        })
        this.triggerEvent('show', {
          value: this.data.show
        })
      }
    },
    _onClose () {
      this.setData({
        value: false,
        show: false
      })
    },

    _press () {
      if (!this.data.persistent){
        return
      }
      this.setData({
        press: true
      })
    },
    _release () {
      if (!this.data.persistent){
        return
      }
      this.setData({
        press: false
      })
    }
  }
})
