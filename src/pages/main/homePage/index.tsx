import React from "react";
import { View, Image } from '@tarojs/components'
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
        </View>
      </View>
      <View className="body">

      </View>
    </>
  )
}
export default HomePage
