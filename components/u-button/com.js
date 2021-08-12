// components/u-button/com.js
Component({
  relations: {
    '../u-icon/com': {
      type: 'child',
      linked: function (target) {
        this.data.iconComponent = target
        if (!this.data.icon && !this.data.text) {
          target.setData({
            color: 'white',
            large: this.data.large,
            xLarge: this.data.xLarge
          })
        } else {
          target.setData({
            color: this.data.color,
            large: this.data.large,
            xLarge: this.data.xLarge
          })
        }
      }
    } 
  },
  /**
   * 组件的属性列表
   */
  properties: {
    block: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    icon: {
      type: Boolean,
      value: false
    },
    text: {
      type: Boolean,
      value: false
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
    shadow: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: 'white'
    },
    background: {
      type: String,
      value: 'var(--primary)'
    },
    style: {
      type: String,
      value: ''
    },
    loading: {
      type: Boolean,
      value: false
    },
    disable: {
      type: Boolean,
      value: false
    },
    to: {
      type: String,
      value: null
    },
  },

  lifetimes: {
    attached () {
      let radius = 35
      if (this.data.large) {
        radius = 40
      } else if (this.data.small) {
        radius = 27.5
      } else if (this.data.xLarge) {
        radius = 50
      }
      this.setData({
        borderRadius: radius
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    borderRadius: 35,
    touched: false,
    iconComponent: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _tap (e) {
      if (this.data.to) {
        wx.navigateTo({
          url: this.data.to,
        })
      }
      this.triggerEvent('Tap', e.detail)
    },
    _none () {},
    _tapStart () {
      this.setData({
        touched: true
      })
    },
    _tapEnd () {
      this.setData({
        touched: false
      })
    }
  }
})
