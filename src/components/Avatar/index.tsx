import React , { ReactNode } from "react";
import {
  View,
  Image,
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { style } from "./style";

type Props = {
  urlImage: string;
}

export function Avatar({urlImage} : Props){
  const {secondary50, secondary70} = theme.colors
  return(
    <LinearGradient 
    style={style.container}
    colors = {[secondary50,secondary70]}
    >
      <Image
        source = {{ uri: urlImage }}
        style = {style.avatar}
      />
    </LinearGradient>
  )
}