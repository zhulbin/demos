import React from 'react'
import { View, Map, Image, Text } from '@tarojs/components'
import AgreeMentIcon from '../../../assets/images/agreement.png'
import NoticeIcon from '../../../assets/images/notice.png'
import AddressIcon from '../../../assets/images/address.png'
import CustomTabBar from "../../business/customTabBar/index"
import './index.scss'


const Mall: React.FC = () => {

  const markets = [
    {
      id: 1,
      latitude: 31.992305,
      longitude: 118.796654,
      iconPath: AgreeMentIcon,
      width: '20',
      height: '20'
    }
  ]

  return (
    <>
      {/* <View>商场页</View> */}
      {/* <CustomTabBar current={2}></CustomTabBar> */}
      <View className='bar'>
        <Image className='icon' src={NoticeIcon}/>
        <Text className='notice'>我们的店很多，千万别选错哦~（可咨询店员）</Text>
      </View>
      <Map
        latitude={31.992305}
        longitude={118.796654}
        markers={markets}
      />
    </>
  )
}

export default Mall
