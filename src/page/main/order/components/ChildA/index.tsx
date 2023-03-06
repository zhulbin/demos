import React from "react"
import {
  View
} from "@tarojs/components"
import './index.scss'

namespace ChildA {
  export interface Props {
    price: number
  }
}

const ChildA: React.FunctionComponent<ChildA.Props> = React.memo(props => {
  React.useEffect(() => {
    console.log('bbbbbbbbbbbbb')
  })
  return (
    <View>{props.price}</View>
  )
})

export default ChildA
