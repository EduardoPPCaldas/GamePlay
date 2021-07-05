import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";
import { style } from './style';


export function SignIn() {

  return (
    <View style={style.container}>
      <StatusBar 
        barStyle = 'light-content'
        backgroundColor = "transparent"
        translucent
      />
      <Image source= {IllustrationImg} style={style.image} resizeMode="stretch" />
      <View style={style.content}>
        <Text style={style.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
           facilmente
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          com seus amigos
        </Text>

        <ButtonIcon title={"Entrar com Discord"} activeOpacity={0.7}/>
      </View>
    </View>
  )
}