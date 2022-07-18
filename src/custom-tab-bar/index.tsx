import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

const CustomTabBar: React.FC = () => {

  const list = [
    {
      pagePath: '/page/main/homePage/index',
      selectedIconPath: '../assets/images/mainlight.png',
      iconPath: '../assets/images/main.png',
      text: '首页'
    },
    {
      pagePath: '/page/main/order/index',
      selectedIconPath: '../assets/images/orderlight.png',
      iconPath: '../assets/images/order.png',
      text: '点单'
    },
    {
      pagePath: '/page/main/mall/index',
      selectedIconPath: '../assets/images/malllight.png',
      iconPath: '../assets/images/mall.png',
      text: '商场'
    },
    {
      pagePath: '/page/main/shoppingOrder/index',
      selectedIconPath: '../assets/images/shoporderlight.png',
      iconPath: '../assets/images/shoporder.png',
      text: '订单'
    },
    {
      pagePath: '/page/main/user/index',
      selectedIconPath: '../assets/images/melight.png',
      iconPath: '../assets/images/me.png',
      text: '我的'
    }
  ]

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  // const setSelected = (index: number) => {
  //   console.log(index, selectedIndex)

  // }

  const switchTab = (index, url) => {
    setSelectedIndex(index)
    console.log(index, selectedIndex)
    Taro.switchTab({url})
  }

  return (
    <View className="tabBar">
      {
        list.map((item, index) => {
          return (
            <View key={index} className="tabBarItem" onClick={() => switchTab(index, item.pagePath)} >
              <Image className="img" src={selectedIndex === index ? item.selectedIconPath : item.iconPath} />
              <View className={selectedIndex === index ? "active txt" : "txt"} >{item.text}</View>
            </View>
          )
        })
      }
    </View>
  )
}

export default CustomTabBar
