import React from "react"
import {
  View
} from "@tarojs/components"

namespace ChildC {
  export interface Props {
    userInfo: any
    value: number
    count: number
  }
}

const ChildC: React.FunctionComponent<ChildC.Props> = React.memo(props => {
  React.useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaa')
  })
  return (
    <>
      <View>{props.count}</View>
      <View>{props.value}</View>
    </>
  )
})

export default ChildC
