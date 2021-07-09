import React from "react";

import {MaterialCommunityIcons} from '@expo/vector-icons';
import { style } from "./style";
import { theme } from "../../global/styles/theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps

export function ButtonAdd({...rest}: Props){
  return(
    <RectButton {...rest}
      style={style.container}
    >
      <MaterialCommunityIcons name="plus" color= {theme.colors.heading} size={24} />
    </RectButton>
  )
}