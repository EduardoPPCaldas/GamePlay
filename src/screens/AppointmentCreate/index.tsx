import React from "react";
import { ImageBackground, Text, View , FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { Header } from '../../components/Header'
import BannerImg from "../../assets/banner.png"
import { theme } from "../../global/styles/theme";
import { style } from "./style"
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentCreate() {
  const members = [
    {
      id: '1',
      username: 'Duka',
      avatar_url: 'https://github.com/EduardoPPCaldas.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Duka',
      avatar_url: 'https://github.com/EduardoPPCaldas.png',
      status: 'offline'
    },
  ]

  return (
    <Background>
      <Header
        title="Agendar Partida"
        
      />

    </Background>
  )
}