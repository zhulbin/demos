import React from 'react'
import { View } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"

const ShoppingOrder: React.FC = () => {
  return (
    <>
      <View>订单页</View>
      <CustomTabBar current={3}></CustomTabBar>
    </>
  )
}

export default ShoppingOrder
