import React from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";
import { useAuth } from "../../hooks/auth";
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";
import { style } from './style';
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";



export function SignIn() {

  const { user, loading , signIn} = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <Background>
      <View style={style.container}>
        <Image source={IllustrationImg} style={style.image} resizeMode="stretch" />
        <View style={style.content}>
          <Text style={style.title}>
            Conecte-se {"\n"}
            e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={style.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            com seus amigos
          </Text>
          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> : 
            <ButtonIcon
              title={"Entrar com Discord"}
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  )
}