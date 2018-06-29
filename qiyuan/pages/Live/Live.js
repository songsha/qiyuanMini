Page({


  lessontap:function(e){
    console.log(e.target.id)
  },

  /**
   * 页面的初始数据
   */
  data: {
         "bannerImage": ["/pages/Source/learnimage/111.jpg",                                 "/pages/Source/learnimage/222.jpg",                                 "/pages/Source/learnimage/333.jpg"
                         ],
         "lessonName":  ["视频","宝贝秀","直播间","精品用具"],
         "lessonImage": ["/pages/Source/liveimage/视频.jpg",                                "/pages/Source/liveimage/宝贝秀.jpg",                                "/pages/Source/liveimage/直播间.jpg",                                "/pages/Source/liveimage/运动工具.jpg"
                         ]                
                
    
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