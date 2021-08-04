// components/u-card/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    style: {
      type: String,
      value: null
    },
    pd: {
      type: Number,
      value: 0
    },
    spacing: {
      type: Boolean,
      value: true
    }
  },

  relations: {
    '../u-card-title/com': {
      type: 'child',
      linked: function (target) {
        console.log(target)
      },
      linkChanged: function (target) {
        
      },
      unlinked: function (target) {
        
      }
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

  }
})
