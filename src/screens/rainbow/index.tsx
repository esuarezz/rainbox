import React, { memo, useState } from 'react'
import { Text } from 'react-native'

import { BaseButton, Container, RainbowContainer, RainbowLine } from './styles'

import { getRainbowColors } from '../../services/rainbow/getRainbowColors'
import Tooltip from '../../components/tooltip'


const RainbowScreen = () => {
  const [rainbowColors, setRainbowColors] = useState<string[]>([])
  const [tooltipIsShow, setTooltipIsShow] = useState<number>(-1)
  const handleRainbowColors = async () => {
    const colors = await getRainbowColors()
    setRainbowColors(colors)
  }

  //I Could use pressable new in react native 0.63, so I could use onPressIn to emulate the real hover
  const showTooltip = (key: number) => {
    setTooltipIsShow(key)
    setTimeout(() => {setTooltipIsShow(-1)}, 500);
  }

  return (
    <Container>
      <RainbowContainer>
        {rainbowColors &&
          rainbowColors.map((color, key) => {
            return (
                <RainbowLine
                  key={key}
                  color={color}
                  activeOpacity={0}
                  onPress={() => showTooltip(key)}
                >
                  {tooltipIsShow === key && (
                    <Tooltip key={key} message={color} />
                  )}
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
