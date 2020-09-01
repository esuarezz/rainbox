import React, { memo, useState } from 'react'
import { Text } from 'react-native'
import { TooltipBox } from './styles'
interface Props {
  message:string;
}

const Tooltip = (props : Props) => {

  const {message} = props;
  return (
      <TooltipBox>
        <Text>{message}</Text>
      </TooltipBox>
  )
}

export default memo(Tooltip)

Tooltip.defaultProps = {
  message: "No message set"
};


