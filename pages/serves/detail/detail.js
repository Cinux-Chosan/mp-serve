// pages/serves/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [],
    autoplay: true,
    interval: 5000,
    duration: 600,
    nMaxSwiper: 3,
    desc: '',
    nMaxDesc: 200,
    nMaxTitle: 20
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: this.data.nMaxSwiper - this.data.swipers.length,
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          swipers: that.data.swipers.concat(res.tempFilePaths)
        });
      }
    })
  },

  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.swipers // 需要预览的图片http链接列表
    })
  },


  deleteSwiper(e) {
    var index = e.target.dataset.index;
    this.data.swipers.splice(index, 1);
    this.setData({
      swipers: this.data.swipers
    })
  },

  inputDesc(e) {
    this.setData({
      desc: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options = {}) {
    let { serveid = '' } = options;
    if (serveid) {
      this.setData({ serveid });
    }
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