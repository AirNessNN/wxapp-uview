// components/u-card-title/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: null
    },
    fontIcon: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: 'u-card-title'
    },
    desc: {
      type: String,
      value: null
    },
    dens: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: '#101010'
    }
  },

  relations: {
    '../u-card/com': {
      type: 'parent',
      linked: function (target) {
        
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
