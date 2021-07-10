import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
  Text,
} from 'react-native';
import { style } from './style'

type Props = RectButtonProps & {
  title: String;
}

export function Button({title , ...rest}: Props){
  return(
    <RectButton style={style.container} {...rest} >

      <Text style={style.title}>
        {title}
      </Text>
    </RectButton>
  );
}