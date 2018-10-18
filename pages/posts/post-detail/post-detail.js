var postsData = require('../../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var postId = option.id;
    this.data.currentPostId = postId;
     /* var postData = postsData.postList[postId];
     this.data.postData = postData; *//* 这里是异步，用setData */
    this.setData({
      postData:postsData.postList[postId]
    });
    
    /* var postsCollected = {
      1:"true",
      2:"false",
      3:"true",
       ...
    }, */
    
    var postsCollected = wx.getStorageSync('posts_Collected')
    if(postsCollected){
      var postCollected = postsCollected[postId]
      this.setData({
        collected:postCollected
      })
    }
    else{
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_Collected',postsCollected)
    }
  },

  onCollectionTap:function(event){
    var postsCollected = wx.getStorageSync('posts_Collected');
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏编程为收藏，为收藏变成收藏
    postCollected =!postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新文章是否收藏的缓存
    wx.setStorageSync('posts_Collected',postsCollected);
    //更新数据绑定变量，从而实现功能图片
    this.setData({
      collected:postCollected
    })
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