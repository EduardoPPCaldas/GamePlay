import React from "react";
import { Alert } from "react-native";

import { 
  View,
  Text,
 } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { style } from "./style";


export function Profile(){
  const {user , signOut} = useAuth()

  function handleSignOut(){
    Alert.alert('Logout', 'Deseja sair do gameplay?', 
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: signOut
      }
    ]
    )
  }

  return(
    <View style={style.container}>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar}/>
      </RectButton>

      <View>
        <View style= {style.user}>
          <Text style={style.greeting}>
            Olá, 
          </Text>
          <Text style={style.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={style.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  )
}