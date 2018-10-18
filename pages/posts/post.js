var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //小程序总会读取data对象来做数据绑定，这个动作我们称为动作A
    //这个动作A的执行，是在Onload事件执行之后发生的
  },

  /**
   * 生命周期函数--监听页面加载1
   */
  onLoad: function (options) {
   
    /* this.data.postList = postsData.postList */
    this.setData({
        posts_key:postsData.postList
    });
},

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    //console.log("onPostTap" + postId);
    wx.navigateTo({
      url:"post-detail/post-detail?id=" + postId
    })
},

  /**
   * 生命周期函数--监听页面初次渲染完成3
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示2
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