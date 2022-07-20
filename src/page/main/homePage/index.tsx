import React from "react";
import { View, Image, Text } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"
import './index.scss'
import BannerIcon from '../../../assets/images/banner.png'
import headerIcon from '../../../assets/images/header.png'

const HomePage: React.FC = () => {

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
          <View></View>
        </View>
        <View className="bodyContent bodyRight">
          <View></View>
        </View>
      </View>
      <CustomTabBar current={0}></CustomTabBar>
    </>
  )
}
export default HomePage
