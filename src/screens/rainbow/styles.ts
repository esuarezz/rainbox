import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { Props } from './types'

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`

export const RainbowContainer = styled.View`
  display: flex;
  height: 300px;
  width: 300px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 1px solid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BaseButton = styled(RectButton)`
  border: 1px solid;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  height: 50px;
  width: 300px;
  display:flex;
`
export const RainbowLine = styled(RectButton)<Props>`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  background-color: ${({ color }) => color};
  flex: 1;
`
