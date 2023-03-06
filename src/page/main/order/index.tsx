import React from 'react'
import { View } from '@tarojs/components'
import CustomTabBar from "../../business/customTabBar/index"
import ChildC from './components/ChildC'
import ChildA from './components/ChildA'
import './index.scss'

const Order: React.FC = () => {

  const [count, setCount] = React.useState(0)

  const [price, setPrice] = React.useState(0)

  const value = 45

  const userInfo = React.useMemo(() => ({name: '小祝'}), [])

  // const userInfo = {name: '小祝'}

  const add = React.useCallback(() => {
    setCount(count + 1)
  }, [count])

  const addPrice = () => {
    setPrice(price + 1)
  }

  return (
    <>
      <View>点单页</View>
      <ChildC
        userInfo={userInfo}
        count={count}
        value={value}
      />
      <View className='add' onClick={add}>+1</View>
      <ChildA
        price={price}
      />
      <View className='add' onClick={addPrice}>+1元</View>
      {/* <CustomTabBar current={1}></CustomTabBar> */}
    </>
  )
}

export default Order
