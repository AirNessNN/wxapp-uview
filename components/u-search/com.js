// components/u-search/com.js
import {
  throttle
} from './../func-utils'
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '搜索内容'
    },
    expandIcon: {
      type: String,
      value: null
    },
    expandPanelShow: {
      type: Boolean,
      value: false
    },
    expandHeight: {
      type: String,
      value: '500'
    },
    searchItems: {
      type: Array,
      value: []
    }

  },

  observers: {
    'expandPanelShow': function (value) {
      this.triggerEvent('expandPanelShow', {
        value
      })
      return value
    },
    'searchItems': throttle(function (value) {
      this._setPopViewBound()
      this._showPopView()
      return value
    }, 1000)
  },

  lifetimes: {
    attached () {
      this.setData({
        screenHeight: wx.getSystemInfoSync().screenHeight
      })
      this._showPopView()
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: '',
    screenHeight: 0,
    inputFocus: false,
    popViewShowed: false,
    popViewDirection: ''
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    _onExpBtnTap (e) {
      this.triggerEvent('ExpBtnTap', e.detail)
    },
    _onInput (e) {
      this.setData({
        value: e.detail.value
      })
      this.triggerEvent('input', e.detail)
    },
    _onInputBlur () {
      console.log('输入框失去焦点')
      this.setData({
        inputFocus: false
      })
    },
    _onInputFocus () {
      this._setPopViewBound()
      this.setData({
        inputFocus: true
      })
    },
    _onSearchItemTap (e) {
      const index = e.currentTarget.dataset.index
      const value = e.currentTarget.dataset.value
      this.triggerEvent('SearchItemTap', {
        value,
        index
      })
      this.setData({
        popViewShowed: false
      })
    },
    _onMaskTap () {
      this.setData({
        popViewShowed: false
      })
    },
    _setPopViewBound () {
      wx.createSelectorQuery().in(this).select('#input').boundingClientRect(rect => {
        this.setData({
          popViewDirection: rect.bottom > this.data.screenHeight / 2 ? 'top':'bottom'
        })
      }).exec()
    },
    _showPopView () {
      if (this.data.searchItems && this.data.searchItems.length > 0) {2
        this.setData({
          popViewShowed: true
        })
      }
    }
  }
})
