export default {
  pages: [
    'page/main/shoppingOrder/index',
    'page/main/user/index',
    'page/main/mall/index',
    'page/main/order/index',
    'page/main/homePage/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#b091d2',
    selectedColor: '#501098',
    list: [
      {
        pagePath: 'page/main/homePage/index',
        selectedIconPath: 'assets/images/mainlight.png',
        iconPath: 'assets/images/main.png',
        text: '首页'
      },
      {
        pagePath: 'page/main/order/index',
        selectedIconPath: 'assets/images/orderlight.png',
        iconPath: 'assets/images/order.png',
        text: '点单'
      },
      // {
      //   pagePath: 'page/main/mall/index',
      //   selectedIconPath: 'assets/images/malllight.png',
      //   iconPath: 'assets/images/mall.png',
      //   text: '商场'
      // },
      {
        pagePath: 'page/main/shoppingOrder/index',
        selectedIconPath: 'assets/images/shoporderlight.png',
        iconPath: 'assets/images/shoporder.png',
        text: '订单'
      },
      {
        pagePath: 'page/main/user/index',
        selectedIconPath: 'assets/images/melight.png',
        iconPath: 'assets/images/me.png',
        text: '我的'
      }
    ]
  },
  usingComponents: {

  }
}
