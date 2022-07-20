import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

import mainlightIcon from 'src/assets/images/mainlight.png'
import mainIcon from 'src/assets/images/main.png'
import orderlightIcon from 'src/assets/images/orderlight.png'
import orderIcon from 'src/assets/images/order.png'
import malllightIcon from 'src/assets/images/malllight.png'
import mallIcon from 'src/assets/images/mall.png'
import shoporderlightIcon from 'src/assets/images/shoporderlight.png'
import shoporderIcon from 'src/assets/images/shoporder.png'
import melightIcon from 'src/assets/images/melight.png'
import meIcon from 'src/assets/images/me.png'


namespace CustomTabBar {
  export interface Props {
    current: number
  }
}

const CustomTabBar: React.FC<CustomTabBar.Props> = props => {

  const list = [
    {
      pagePath: '/page/main/homePage/index',
      selectedIconPath: mainlightIcon,
      iconPath: mainIcon,
      text: '首页'
    },
    {
      pagePath: '/page/main/order/index',
      selectedIconPath: orderlightIcon,
      iconPath: orderIcon,
      text: '点单'
    },
    {
      pagePath: '/page/main/mall/index',
      selectedIconPath: malllightIcon,
      iconPath: mallIcon,
      text: '商场'
    },
    {
      pagePath: '/page/main/shoppingOrder/index',
      selectedIconPath: shoporderlightIcon,
      iconPath: shoporderIcon,
      text: '订单'
    },
    {
      pagePath: '/page/main/user/index',
      selectedIconPath: melightIcon,
      iconPath: meIcon,
      text: '我的'
    }
  ]

  // const setSelected = (index: number) => {
  //   console.log(index, selectedIndex)

  // }

  const switchTab = url => {
    Taro.switchTab({url})
  }

  return (
    <View className="tabBar">
      {
        list.map((item, index) => {
          return (
            <View key={index} className="tabBarItem" onClick={() => switchTab(item.pagePath)} >
              <Image className="img" src={props.current === index ? item.selectedIconPath : item.iconPath} />
              <View className={props.current === index ? "active txt" : "txt"} >{item.text}</View>
            </View>
          )
        })
      }
    </View>
  )
}

export default CustomTabBar
