import React, { useState, useCallback } from "react";
import Taro from "@tarojs/taro";
import { View, Image, Text, Button } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"
import Child from "src/page/components/Child"
import './index.scss'
import BannerIcon from '../../../assets/images/banner.png'
import headerIcon from '../../../assets/images/header.png'

const HomePage: React.FC = () => {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handleCount1Callback = () => {
    setCount1(count1 + 1)
  }

  const handleCount2Callback = () => {
    setCount2(count2 + 1)
  }

  const needUpdate = data => {
    console.log('currentData: ', data)
  }

  const hanldeUseCallback = useCallback(() => {
    console.log('这里是子组件点击的事件', count1, count2)
    needUpdate(count1)
  }, [count1])


  return (
    <>
      <View className="header">
        <Image src={BannerIcon} className="banner" />
        <View className="loginPanel">
          <View className="left">
            <Image src={headerIcon} className="leftIcon" />
          </View>
          <View className="right">
            <Text className="topText">点击登录/注册</Text>
            <Text className="bottomText">来份美味的Taco犒劳自己</Text>
          </View>
        </View>
      </View>
      <View className="body">
        <View className="bodyContent bodyLeft">
          <View>
            <Button onClick={handleCount1Callback}>+1</Button>
            <View>{count1}</View>
          </View>
        </View>
        <View className="bodyContent bodyRight">
          <View>
            <Button onClick={handleCount2Callback}>+1</Button>
            <View>{count2}</View>
          </View>
        </View>
      </View>
      <Child
        onClick={hanldeUseCallback}
      />
      {/* <CustomTabBar current={0}></CustomTabBar> */}
    </>
  )
}
export default HomePage
