import React from 'react'
import * as THREE from 'three'
import { View } from '@tarojs/components'
import './index.scss'

const ShoppingOrder: React.FunctionComponent = () => {

  React.useEffect(() => {
    // 创建场景值
    const scene = new THREE.Scene()

    // 创建透视投影相机
    const camera = new THREE.PerspectiveCamera()

    // 创建渲染器
    // const renderer = new THREE.WebGLRenderer()


    console.log('===========>', scene, camera, THREE)
  }, [])

  return (
    <View>
    </View>
  )
}

export default ShoppingOrder
