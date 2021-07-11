import React from "react";
import { View } from "react-native";
import { style } from './style'

type Props = {
  isCentered?: boolean
}

export function ListDivider({isCentered = false} : Props){
  return (
    <View style={[style.container, isCentered ? { marginVertical: 12} : {marginTop: 2, marginBottom:31}]}/>

  )
}