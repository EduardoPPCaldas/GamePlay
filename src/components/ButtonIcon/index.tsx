import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import DiscordImg from '../../assets/discord.png'
import {style} from './style'

type Props = TouchableOpacityProps & {
  title: String;
}

export function ButtonIcon({title , ...rest}: Props){
  return(
    <TouchableOpacity style={style.container} {...rest} >
      <View style={style.iconWrapper}>
        <Image source = {DiscordImg} style={style.icon} />
      </View>

      <Text style={style.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}