// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchValue: false,
    multiple: false,
    inputValue: 0,
    numberRange: {
      max: 10,
      min: 3,
    },
    selections: [
      {
        name: '拼手气红包（必选）',
        desc: '随机金额，拼运气抢',
        require: true
      },
      {
        name: '普通红包',
        desc: '直接抵扣订单金额，优惠多多',
        require: false
      },
      {
        name: '接龙红包',
        desc: '先分享再拆包，裂变转化好帮手',
        require: false
      }
    ],
    selections2: [
      {
        name: '拼手气红包（必选）',
        desc: '随机金额，拼运气抢',
        require: false,
        select: true,
      },
      {
        name: '普通红包',
        desc: '直接抵扣订单金额，优惠多多',
        require: false,
        select: true,
      },
      {
        name: '接龙红包',
        desc: '先分享再拆包，裂变转化好帮手',
        require: false
      }
    ],
    inputValue2: '测试输入'
  },

  onTap (e) {
    console.log(e)
  },

  onInput (e) {
    console.log(e)
  },

  onNumberInput(e) {
    this.setData({
      
    })
  },

  onChange (e) {
    console.log('onChange', e.detail)
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