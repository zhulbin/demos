import React from 'react'
import { View } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"

const User: React.FC = () => {
  return (
    <>
      <View>我的</View>
      <CustomTabBar current={4}></CustomTabBar>
    </>
  )
}

export default User
