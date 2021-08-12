// components/u-tab-bar/com.js
import {
  pxToRpx
} from '../func-utils.js'
Component({
  relations: {
    '../u-tab-item/com': {
      type: 'child',
      linked: function (target) {
        this.data.components.push(target)
        target.data.listener = this._initListener(this._onTabItemTap)
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: null
    },
    select: {
      type: String
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
    components: [],
    rect: {
      width: 0,
      left: -20,
      bottom: 23
    },
    lastClickComponent: null,
    obsChange: false,
    ready: false
  },

  observers: {
    'value': function(value) {
      if (!this.data.ready) {
        this.data.obsChange = true
        return value
      }
      this._moveLine(value)
      return value
    }
  },

  lifetimes: {
    ready () {
      const components = this.data.components
      const obsChange = this.data.obsChange
      if (components) {
        this._moveLine(obsChange ? this.data.value : components[0].data.value)
        this.data.obsChange = false
      }
      this.data.ready = true
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _initListener (func) {
      const ctx = this
      return function () {
        func.call(ctx, ...arguments)
      }
    },

    _onTabItemTap (e) {
      this._moveLine(e.currentTarget.dataset.value)
      this.triggerEvent('Change', {
        value: e.currentTarget.dataset.value
      })
    },

    _moveLine (value) {
      let clicked = null
      for (const i in this.data.components) {
        const com = this.data.components[i]
        if (com.data.value == value) {
          clicked = com
        }
      }
      if (this.data.lastClickComponent && this.data.lastClickComponent.data.value === value) {
        return
      }
      if (clicked != null) {
        wx.createSelectorQuery().in(this).select('#con').boundingClientRect(absRect => {
          clicked.createSelectorQuery().in(clicked).select('#tab-text').boundingClientRect(rect => {
            const width = pxToRpx(rect.width) - 20
            const left = pxToRpx(rect.left - absRect.left) + 10
            const bottom = Math.abs(pxToRpx(rect.bottom - absRect.bottom) - 5)
            const res = {
              width,
              left,
              bottom
            }
            clicked.setData({
              select: true
            })
            if (this.data.lastClickComponent != null) {
              this.data.lastClickComponent.setData({
                select: false
              })
            }
            this.setData({
              rect: res,
              lastClickComponent: clicked,
              value
            })
          }).exec()
        }).exec()
      }
    }
  }
})
