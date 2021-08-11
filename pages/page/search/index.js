// pages/page/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    show2: false,
    inputValue: '',
    value: '测试搜索',
    items: [],
    clickItem: null
  },



  onTap (e) {
    this.setData({
      show: !this.data.show
    })
  },
  onTap2 (e) {
    this.setData({
      show2: !this.data.show2
    })
  },
  onItemTap (e) {
    this.setData({
      clickItem: this.data.items[e.detail.index]
    })
  },
  onInput1 (e) {
    console.log(e);
    this.setData({
      clickItem: e.detail.value
    })
  },
  onInput2 (e) {
    if (e.detail.value == '') {
      this.setData({
        items: []
      })
      return
    }
    setTimeout(() => {
      const list = []
      for (let i = 0;i < 10; i++){
        list.push(e.detail.value)
      }
      this.setData({
        items: list
      })
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})