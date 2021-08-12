// components/u-tab-item/com.js
Component({
  relations: {
    '../u-tab-bar/com': {
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
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    test: 'asdas',
    select: false,
    listener: () => {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onTap (e) {
      this.data.listener(e)
      
    }
  }
})
