import React, { memo,useState } from 'react'
import { Text, View } from 'react-native'

import { BaseButton, Container, RainbowContainer, RainbowLine } from './styles'

import {getRainbowColors} from '../../services/rainbow/getRainbowColors'


const RainbowScreen = () => {
  const [rainbowColors, setRainbowColors] = useState<string[]>([1])

  const handleRainbowColors = async() => {
    const colors = await getRainbowColors();
    setRainbowColors(colors)
  }

  console.log("rainbowColorss",rainbowColors)
  return (
    <Container>
      <RainbowContainer>
          {rainbowColors && rainbowColors.map(color => {
            return (
              <RainbowLine color={color}>
              </RainbowLine>
            )
          })}
      </RainbowContainer>
      <BaseButton onPress={handleRainbowColors}>
        <Text>Generate Rainbow</Text>
      </BaseButton>
    </Container>
  )
}

export default memo(RainbowScreen)
