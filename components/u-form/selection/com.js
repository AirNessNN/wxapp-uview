// components/u-form/selection/com.js
Component({
  relations: {
    '../../u-card-content/com': {
      type: 'parent',
      linked: function (target) {
      },
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: []
    },
    selected: {
      value: null
    },
    multiple: {
      type: Boolean,
      value: false
    },
    require: {
      type: Boolean,
      value: false
    }
  },

  observers: {
    'multiple': function (val) {
      this._updateMultiple(val)
    },
    'selected': function (val) {
      this._updateValue(val)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lastIndex: -1,
  },

  lifetimes: {
    attached () {
      this._updateValue(this.data.value)
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateMultiple (val) {
      const list = this.data.items
      if (!val) {
        // 单选去除所有必选项
        list.forEach(v => {
          v.select = false
        })
        if (this.data.lastIndex >= 0) {
          list[this.data.lastIndex].select = true
        }
      }
      this.setData({
        items: list
      })
    },
    _updateValue (val) {
      const list = this.data.items
      let lastIndex = this.data.lastIndex
      if (val instanceof Array && val.length > 0 && this.data.items.length > 0) {
        // list.forEach(v => {
        //   v.select = false
        // })
        // val.forEach(v => {
        //   list[v].select = true
        // })
      } else if (!this.data.multiple && typeof val == 'number' && this.data.items.length > 0 && this.data.items.length > val && val >= 0) {
        list.forEach(v => {
          v.select = false
        })
        list[val].select = true
        lastIndex = val
      }
      this.setData({
        items: list,
        lastIndex
      })
    },
    _none () {
      
    },
    _onSelect ({currentTarget: {dataset}}) {
      const list = this.data.items
      const selectCount = list.filter(e => e.select || e.require).length
      let index = dataset.index
      
      if (this.data.multiple) {
        if (this.data.require && list[index].select && selectCount == 1) {
          return
        } else {
          list[index].select = list[index].select == null ? true : !list[index].select
        }
      } else {
        if (index != this.data.lastIndex){
          list[index].select = true
          if (this.data.lastIndex >= 0) {
            list[this.data.lastIndex].select = false
          }
        } else if (!this.data.require && index == this.data.lastIndex) {
          list[dataset.index].select = false
          index = -1
        } else {
          return
        }
      }
      this.setData({
        items: list,
        lastIndex: index
      })
      const indexList = []
      list.forEach((v,i) => {
        if (v.select || v.require) {
          indexList.push(i)
        }
      })
      this.triggerEvent('OnChange', indexList)
    }
  }
})
