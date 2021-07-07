import React from "react";

import { 
  View,
  Text,
 } from "react-native";
import { Avatar } from "../Avatar";
import { style } from "./style";

export function Profile(){
  return(
    <View style={style.container}>

      <Avatar urlImage="https://github.com/EduardoPPCaldas.png"/>

      <View>
        <View style= {style.user}>
          <Text style={style.greeting}>
            Olá, 
          </Text>
          <Text style={style.username}>
            Duka
          </Text>
        </View>

        <Text style={style.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  )
}