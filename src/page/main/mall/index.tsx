import React from 'react'
import { View } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"


const Mall: React.FC = () => {
  return (
    <>
      <View>商场页</View>
      <CustomTabBar current={2}></CustomTabBar>
    </>
  )
}

export default Mall
