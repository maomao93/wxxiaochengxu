//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    borderBottom:null,
    list:[
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'https://www.tcn-aomori.com/wp-content/uploads/2015/03/79_shirakaminomori_01.jpg',
        money:'88',
        text:'这是一个神奇的故事.......'
      },
      {
        img:'http://i4.qhimg.com/t017352ccfa5fe277aa.jpg',
        money:'66',
        text:'这是一个神奇的故事.......'
      },
    ],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    categories: [
      { "id": 0, "name": "全部" },
      { "dateAdd": "2017-09-12 11:07:32", "dateUpdate": "2019-04-10 11:24:32", "icon": "https://cdn.it120.cc/apifactory/2019/04/09/f89753a227d26a3fe9ccc6f975857bb6.png", "id": 1872, "isUse": true, "key": "1", "level": 1, "name": "上装", "paixu": 0, "pid": 0, "type": "", "userId": 951 },
    ],
  },
  onChange: function(e) {
    console.log(e.detail)
  },
  onScale: function(e) {
    console.log(e.detail)
  },
  navbarClick(event){
    let query = event.currentTarget.dataset['index'];
    for(let i=0;i<this.data.categories.length;i++){
      if(this.data.categories[i].id===query){
        this.setData({
          borderBottom:this.data.categories[i].id
        })
      }
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if(!this.borderBottom){
      for(let i=0;i<this.data.categories.length;i++){
        if(i===0){
          this.setData({
            borderBottom:this.data.categories[i].id
          })
        }
      }
    }
  },
  onShow(){
    
  }
})
