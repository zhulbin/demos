import React from 'react'
import { View, Text } from '@tarojs/components'
import { handlePrice, formatPrice, isEmpty } from 'src/page/business/util'
// import BigNumber from "bignumber.js"
import CustomTabBar from "../../business/customTabBar/index"

const User: React.FC = () => {

  return (
    <>
      <View>我的余额</View>
      <View>{handlePrice(0, false)}</View>
      <View>
        <Text>{formatPrice(handlePrice(102120215, true))[0]}</Text>
        {
          !isEmpty(formatPrice(handlePrice(102120215, true))[1]) && (
            formatPrice(handlePrice(102120215, true))[1].includes('万') ? (
              <Text>
                <Text>{`.${formatPrice(handlePrice(102120215, true))[1].split('万')[0]}`}</Text>
                <Text>万</Text>
              </Text>
            ) : (
              <Text>{`.${formatPrice(handlePrice(102120215, true))[1]}`}</Text>
            )
          )
        }
      </View>
      {/* <View>
        <View>
          <View>user图片</View>
          <View>
            <View>注册/图片</View>
            <View>登录后享受更多精彩</View>
          </View>
        </View>
        <View>
          <View>
            <View>会员卡图片</View>
            <View>会员码</View>
          </View>
          <View>
            <View>优惠券图片</View>
            <View>优惠券</View>
          </View>
        </View>
      </View> */}
      {/* <CustomTabBar current={4}></CustomTabBar> */}
    </>
  )
}

export default User
