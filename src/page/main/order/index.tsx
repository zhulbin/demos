import React from 'react'
import { View } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"

const Order: React.FC = () => {
  return (
    <>
      <View>点单页</View>
      <CustomTabBar current={1}></CustomTabBar>
    </>
  )
}

export default Order
