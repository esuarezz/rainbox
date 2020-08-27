import React, { memo } from 'react'
import { Text, View } from 'react-native'

import { BaseButton, Container, RainbowContainer } from './styles'

const RainbowScreen = () => {
  return (
    <Container>
      <RainbowContainer>
        <View>
          <Text>DIV container</Text>
        </View>
      </RainbowContainer>
      <BaseButton>
        <Text>Generate Rainbow</Text>
      </BaseButton>
    </Container>
  )
}

export default memo(RainbowScreen)
