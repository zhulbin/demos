import React, { useEffect } from 'react'
import { Button, View } from '@tarojs/components'

namespace Child {
  export interface Props {
    onClick(): void
  }
}

const Child: React.FunctionComponent<Child.Props> = React.memo((props: any) => {

  useEffect(() => {
    console.log('子组件更新了')
  })

  return (
    <View>
      <Button onClick={props.onClick}>触发callback</Button>
    </View>
  )
})

export default Child
