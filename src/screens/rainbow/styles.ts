import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`

export const RainbowContainer = styled.View`
  display: flex;
  height:300px;
  width:300px;
  margin-left:10px;
  margin-Right:10px;
  margin-bottom:20px;
  background-color: orange;
  justify-content: center;
  align-items: center;
`

export const BaseButton = styled(RectButton)`
  background-color: green;
  justify-content: center;
  align-items:center;
  margin-left: 20px;
  margin-right: 20px;
  height:50px;
  width:300px;

`
